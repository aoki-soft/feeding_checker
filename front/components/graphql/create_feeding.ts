import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    HttpLink,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function create_feeding() {
	const cache = new InMemoryCache();
	const httpLink = createHttpLink({
			uri: 'https://study.aokki.jp/api'
	});
	const client = new ApolloClient({
			cache: cache,
			link: httpLink
	});
	return client.mutate({
		mutation: gql`
			mutation Mutation($input: [FeedingCreateInput!]!) {
				createFeedings(input: $input) {
					info {
						nodesCreated
					}
					feedings {
						id
						am_pm
						createAt
						updateAt
						giver {
							name
						}
						eater {
							id
							name
						}
					}
				}
			}
		`,
		variables: {
			"input": [
				{
					"am_pm": "pm",
					"giver": {
						"connect": {
							"where": {
								"node": {
									"id": "46dd2b11-7527-4ef5-9288-6ac86d179ece"
								}
							}
						}
					},
					"eater": {
						"connect": {
							"where": {
								"node": {
									"id": "82fa0198-38a3-46e1-bbb5-e38357379b05"
								}
							}
						}
					}
				}
			]
		}
	});
}