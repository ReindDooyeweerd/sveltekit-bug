import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async ({ params }) => {
	console.log(`api/single-[slug].json called`);

	try {
		const queryVariables = {
			slug: params.slug
		};

		const query = gql`
			query ($slug: String!) {
				articles(filter: { slug: { _eq: $slug } }) {
					body
					slug
					title
				}
			}
		`;

		const { articles } = await client.request(query, queryVariables);

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
