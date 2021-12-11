import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloProvider,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useEffect, useState } from 'react';

type Token = {
	token: string | null,
	no_token: boolean,
}

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	let [token, setToken] = useState<Token>({
		token: null,
		no_token: false,
	});

	useEffect(()=>{
		// クエリパラメータ`login`があった場合はその値をローカルストレージに保存する
		if (router.query.login) {
			const query_token = router.query.login.toString();
			// ローカルストレージに保存する
			localStorage.setItem('login', query_token);
			// クエリパラメータを消す
			router.push({query:{}});
		} else {
			// ローカルストレージからログイン認証コードを取得する
			const storage_token = localStorage.getItem('login');
			const no_token = storage_token == null;
			console.log(storage_token)
			console.log(no_token)
			// ステートにトークンを設定する
			setToken({
				token: storage_token,
				no_token: no_token,
			})
		}
	},[router])

	if (!token.token) {
		if (token.no_token) {
			// ここでログイン画面を実装する
			return (<div>ログイン認証コードをクエリパラメータに入れてください</div>)
		}
		// ログイン取得前なのか?ログイン中なのかわからない、、
		return (<div>ログイントークンを読み込んでいます</div>)
	}
	console.log(token);

	// apiサーバーとの通信オブジェクト
	const httpLink = createHttpLink({
			uri: `/api`
	});
	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			}
		}
	});
	const client = new ApolloClient({
			cache: new InMemoryCache(),
			link: authLink.concat(httpLink),
	});
	

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
