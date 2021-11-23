import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    HttpLink,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function today_feeding() {
	const cache = new InMemoryCache();
	const httpLink = createHttpLink({
			uri: 'https://study.aokki.jp/api'
	});
	const client = new ApolloClient({
			cache: cache,
			link: httpLink
	});
	return client.query({
		query: gql`
			query Feedings($where: FeedingWhere) {
				feedings(where: $where) {
					id
					am_pm
					createAt
					giver {
						name
						id
					}
					eater {
						name
						id
					}
				}
			}
    `,
		variables: {
			"where": {
				"createAt_LT": "2021-11-23T15:00:00.000Z",
				"createAt_GTE": "2021-11-22T15:00:00.000Z"
			}
		}
});
}