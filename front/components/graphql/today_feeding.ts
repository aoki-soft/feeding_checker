import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    HttpLink,
    createHttpLink,
    gql,
} from "@apollo/client";

export async function today_feeding(now: Date) {
	const yesterday = new Date();
	yesterday.setTime(now.getTime() -86400000);
	const start_datetime = `${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}T15:00:00.000Z`;
	const end_datetime = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}T15:00:00.000Z`;
	console.log("スタート: " + start_datetime);
	console.log("エンド: "+ end_datetime);

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
					"createAt_GTE": start_datetime,
					"createAt_LT": end_datetime,
				}
			}
	});
}