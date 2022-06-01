<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/homepage.json');

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

<ul>
	{#each articles as article}
		<li>
			{article.title}<br />
			<a href="{article.category.slug}/{article.slug}">{article.slug}</a>
		</li>
	{/each}
</ul>

<ul>
	<li>
		<a href="nieuws">Nieuws</a>
	</li>
	<li>
		<a href="reviews">Reviews</a>
	</li>
	<li>
		<a href="tutorials">Tutorials</a>
	</li>
</ul>
