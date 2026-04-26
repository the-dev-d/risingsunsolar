<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Our Blog | Rising Sun Solar Systems</title>
	<meta
		name="description"
		content="Read our latest articles on solar energy, savings, and tips in Kerala."
	/>
</svelte:head>

<section class="mt-16 min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<h1 class="mb-4 text-4xl font-bold text-gray-900">Our Blog</h1>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Insights, guides, and tips on solar energy, electrical systems, and sustainable living in
				Kerala.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.blogs as blog}
				{#if blog.title && blog.title !== '====='}
					<article
						class="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
					>
						{#if blog.banner}
							<div class="h-48 w-full overflow-hidden">
								<img src="/images/{blog.banner}" alt={blog.title} class="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
							</div>
						{/if}
						<div class="flex flex-1 flex-col p-6">
							<div class="mb-4 flex items-center text-sm text-gray-500">
								<svg
									class="mr-2 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									></path></svg
								>
								<time datetime={blog.date}>{blog.date}</time>
							</div>
							<h2 class="mb-3 line-clamp-2 text-xl font-semibold text-gray-900">
								{blog.title}
							</h2>
							<p class="mb-6 line-clamp-3 flex-1 text-gray-600">
								{blog.summary}
							</p>
							<a
								href="/blog/{blog.titleId}"
								class="inline-flex items-center font-medium text-orange-600 transition-colors hover:text-orange-700"
							>
								Read More
								<svg
									class="ml-1 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									></path></svg
								>
							</a>
						</div>
					</article>
				{/if}
			{/each}
		</div>
	</div>
</section>
