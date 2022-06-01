<script context="module">
	export const load = async ({ fetch, params }) => {
		const slug = params.slug;
		const res = await fetch(`/api/single-${slug}.json`);

		if (res.ok) {
			const { articles } = await res.json();
			const article = articles[0];

			return {
				props: {
					article
				}
			};
		}
	};
</script>

<script>
	export let article;
</script>

<h1>Single item</h1>

<h2>{article.title}</h2>
<strong>{article.slug}</strong><br />
{@html article.body}
