import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function delete_pet(id: String) {
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
			mutation Mutation($where: PetWhere) {
				deletePets(where: $where) {
					nodesDeleted
					relationshipsDeleted
				}
			}
		`,
		variables: {
			"where": {
				"id": id
			}
		}
	});
}