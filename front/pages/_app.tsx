import type { AppProps } from 'next/app'
import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloProvider,
} from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const cache = new InMemoryCache();
	const httpLink = createHttpLink({
			uri: `/api`
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
