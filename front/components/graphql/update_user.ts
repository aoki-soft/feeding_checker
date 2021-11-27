import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function update_user(id: String, new_name: String) {
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
			mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
				updateUsers(where: $where, update: $update) {
					users {
						id
						name
						createAt
						updateAt
					}
				}
			}
		`,
		variables: {
			"where": {
				"id": id
			},
			"update": {
				"name": new_name
			}
		}
	});
}