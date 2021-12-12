import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloProvider,
	from,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useEffect, useState, createContext } from 'react';
import { onError } from "@apollo/client/link/error";

type Token = {
	token: string | null,
	no_token: boolean,
}

export const LogoutContext = createContext(()=>{});
export const LoginContext = createContext((pass: string)=>{});

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

	const [pass_input, setPassInput] = useState("");
	const click_login = ()=>{
		login(pass_input);
	}
	const login = (pass: string)=>{
		if (pass == "") {
			return;
		}
		localStorage.setItem('login', pass);
		setToken({
			token: pass,
			no_token: false,
		})
	}

	if (!token.token) {
		if (token.no_token) {
			// ここでログイン画面を実装する
			return (
			<div>
				パスワードを入力してください<br/>
				<input value={pass_input} onChange={(event)=>{setPassInput(event.target.value)}}/>
				<button onClick={click_login}>ログイン</button>
			</div>
			)
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
				authorization: token ? `Bearer ${token.token}` : "",
			}
		}
	});

	const errorLink = onError(({ graphQLErrors, networkError }) => {
		// if (graphQLErrors)
		// 	graphQLErrors.forEach(({ message, locations, path }) =>
				// console.log(
				// 	`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
				// ),
			// );
	
		// if (networkError) console.log(`[Network error]: ${networkError}`);
	});

	const client = new ApolloClient({
			cache: new InMemoryCache(),
			// link: authLink.concat(httpLink),
			link: from([errorLink, authLink, httpLink]),
	});
	
	/**
	 * ログアウトの処理を行う関数
	 */
	const logout = () =>{
		localStorage.clear();
		setToken({
			token: null,
			no_token: true,
		})
	}
	


  return (
		<LogoutContext.Provider value={logout}>
			<LoginContext.Provider value={login}>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</LoginContext.Provider>
		</LogoutContext.Provider>
		)

}

export default MyApp
