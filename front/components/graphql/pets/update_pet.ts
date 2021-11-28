import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function update_pet(id: String, new_name: String) {
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
			mutation Mutation($where: PetWhere, $update: PetUpdateInput) {
				updatePets(where: $where, update: $update) {
					pets {
						id
						name
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