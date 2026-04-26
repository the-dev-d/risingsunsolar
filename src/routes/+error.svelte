<script lang="ts">
	import { Sun, ArrowLeft } from 'lucide-svelte';
	import { Button } from '$lib/shadcn/ui/button';
</script>

<svelte:head>
	<title>404 - Page Not Found | Rising Sun Solar Systems</title>
	<meta name="title" content="404 - Page Not Found | Rising Sun Solar Systems" />
	<meta
		name="description"
		content="The page you're looking for was not found. Return to Rising Sun Solar Systems for solar and energy solutions."
	/>
	<meta property="og:title" content="404 - Page Not Found | Rising Sun Solar Systems" />
	<meta
		property="og:description"
		content="The page you're looking for was not found. Return to Rising Sun Solar Systems for solar and energy solutions."
	/>
	<meta property="og:image" content="https://risingsunsolar.in/images/meta-preview.webp" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="404 - Page Not Found | Rising Sun Solar Systems" />
	<meta
		name="twitter:description"
		content="The page you're looking for was not found. Return to Rising Sun Solar Systems for solar and energy solutions."
	/>
	<meta name="twitter:image" content="https://risingsunsolar.in/images/meta-preview.webp" />
</svelte:head>

<div
	class="mt-20 flex min-h-[70vh] flex-col items-center justify-center space-y-8 px-6 text-center"
>
	<div class="relative mt-12">
		<!-- SUN GLOW -->
		<div
			class="absolute inset-0 -z-10 scale-150 animate-pulse rounded-full bg-buttons-orange/20 blur-3xl transition-all duration-1000"
		></div>
		<Sun class="h-24 w-24 text-buttons-orange md:h-32 md:w-32" strokeWidth={1.5} />
	</div>

	<h1 class="mt-12 text-6xl font-black tracking-tighter text-text-green md:text-8xl">404</h1>

	<div class="space-y-4">
		<h2 class="text-2xl font-bold text-black md:text-3xl">This page is currently in the shade.</h2>
		<p class="mx-auto max-w-md text-sm text-text-green/70 md:text-base">
			Looks like you've moved out of the sun's path. We couldn't find the page you were looking for,
			but we can help you find your way back to reliable energy.
		</p>
	</div>

	<a href="/" class="pt-4">
		<Button
			class="group mb-6 flex h-auto items-center gap-2 rounded-xl bg-buttons-default px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-buttons-default/90 active:scale-95"
		>
			<ArrowLeft class="h-5 w-5 transition-transform group-hover:-translate-x-1" />
			Back to Sunlight
		</Button>
	</a>
</div>
