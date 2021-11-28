import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function create_feeding(giver_id: String, eater_name: String, am_pm: String) {
	const cache = new InMemoryCache();
	const httpLink = createHttpLink({
			uri: `${location.origin}/api`
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
					"am_pm": am_pm,
					"giver": {
						"connect": {
							"where": {
								"node": {
									"id": giver_id
								}
							}
						}
					},
					"eater": {
						"connect": {
							"where": {
								"node": {
									"name": eater_name
								}
							}
						}
					}
				}
			]
		}
	});
}