import type { AppProps } from 'next/app'
import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	gql,
	ApolloProvider,
} from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  const cache = new InMemoryCache();
	const httpLink = createHttpLink({
			uri: `https://study.aokki.jp/api`
	});
	const client = new ApolloClient({
			cache: cache,
			link: httpLink
	});

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
