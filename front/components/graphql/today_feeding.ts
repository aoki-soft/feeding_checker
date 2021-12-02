import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql,
} from "@apollo/client";

/**
 * 1桁の数値を0でパディングする
 * @param num 2桁以下の数値
 */
const zero_padding = (num: number) => {
	if (num < 10) {
		return "0" + num;
	}
	return "" + num;
}

/**
 * その日のえさやり情報取得
 * @param now 日時
 * @returns nowの日時のえさやり情報を返す
 */
export async function today_feeding(now: Date) {
	const end_datetime = `${now.getFullYear()}-${zero_padding(now.getMonth()+1)}-${zero_padding(now.getDate())}T15:00:00.000Z`;
	const yesterday = now;
	yesterday.setTime(now.getTime() -86400000);
	const start_datetime = `${yesterday.getFullYear()}-${zero_padding(yesterday.getMonth()+1)}-${zero_padding(yesterday.getDate())}T15:00:00.000Z`;
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
			query Query($where: FeedingWhere) {
				feedings(where: $where) {
					id
					am_pm
					createAt
					updateAt
					giver {
						id
						name
					}
					eater {
						id
						name
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