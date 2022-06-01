<script context="module">
	export const load = async ({ fetch, params }) => {
		const slug = params.slug;
		const res = await fetch(`/api/category-${slug}.json`);

		if (res.ok) {
			const { articles } = await res.json();

			return {
				props: {
					articles
				}
			};
		}
	};
</script>

<script>
	export let articles;
</script>

<h1>Category</h1>

<ul>
	{#each articles as article}
		<li>
			{article.title}<br />
			<a href="{article.category.slug}/{article.slug}">{article.slug}</a>
		</li>
	{/each}
</ul>
