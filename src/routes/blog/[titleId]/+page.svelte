<script lang="ts">
	import { marked } from 'marked';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.blog.metaTitle}</title>
	<meta name="description" content={data.blog.metaDescription} />

	<meta property="og:title" content={data.blog.metaTitle} />
	<meta property="og:description" content={data.blog.metaDescription} />
	<meta property="og:type" content="article" />

	<meta name="twitter:title" content={data.blog.metaTitle} />
	<meta name="twitter:description" content={data.blog.metaDescription} />
</svelte:head>

<article class="mt-16 min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<div class="mb-10 text-center">
			<a
				href="/blog"
				class="mb-8 inline-flex items-center font-medium text-orange-600 transition-colors hover:text-orange-700"
			>
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
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					></path></svg
				>
				Back to all blogs
			</a>
			<div class="mb-6 flex items-center justify-center text-sm text-gray-500">
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
				<time datetime={data.blog.date}>{data.blog.date}</time>
			</div>
			<h1 class="text-3xl leading-tight font-bold text-gray-900 md:text-5xl">
				{data.blog.title}
			</h1>
		</div>

		{#if data.blog.banner}
			<div class="mb-10 w-full overflow-hidden rounded-2xl shadow-sm">
				<img src="/images/{data.blog.banner}" alt={data.blog.title} class="w-full h-auto max-h-[500px] object-cover" />
			</div>
		{/if}

		<div class="mx-auto prose prose-lg text-gray-700 prose-p:m-3">
			{@html marked.parse(data.blog.content)}
		</div>
	</div>
</article>
