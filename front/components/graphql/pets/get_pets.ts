import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function get_pets() {
	const cache = new InMemoryCache();
	const httpLink = createHttpLink({
			uri: `${location.origin}/api`
	});
	const client = new ApolloClient({
			cache: cache,
			link: httpLink
	});
	return client.query({
		query: gql`
			query Query {
				pets {
					id
					name
					eatingAggregate {
						count
					}
				}
			}
		`,
	});
}