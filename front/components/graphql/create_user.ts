import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function create_user(name: String) {
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
			mutation Mutation($input: [UserCreateInput!]!) {
				createUsers(input: $input) {
					users {
						id
						name
						createAt
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