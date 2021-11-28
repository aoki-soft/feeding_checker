import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function create_pet(name: String) {
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
			mutation Mutation($input: [PetCreateInput!]!) {
				createPets(input: $input) {
					pets {
						id
						name
						createAt
					}
					info {
						nodesCreated
					}
				}
			}
		`,
		variables: {
			"input": [
				{
					"name": name
				}
			]
		}
	});
}