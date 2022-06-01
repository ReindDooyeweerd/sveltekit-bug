import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	console.log(`homepage.json called`);
	try {
		const query = gql`
			query {
				articles(sort: ["-publication_date", "sort"]) {
					category {
						title
						slug
					}
					slug
					title
				}
			}
		`;

		const { articles } = await client.request(query);
		return {
			status: 200,
			body: { articles }
		};
	} catch (error) {
		console.error(error);
		return {
			status: 500,
			body: { error: 'There was a server error' }
		};
	}
};
