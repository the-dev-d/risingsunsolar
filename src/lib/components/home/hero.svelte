<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/shadcn/ui/carousel/index.js';
	import { Leaf } from '@lucide/svelte';

	const images = [
		'/images/solarHero.jpg',
		'/images/solarPannelAlt.png',
		'/images/solarRisingSun.jpg'
	];

	const plugin = Autoplay({
		delay: 3000,
		stopOnInteraction: false
	});
</script>

<section class="relative mx-auto h-screen max-h-200 min-h-200 w-full overflow-hidden px-6 py-20">
	<!-- Background -->
	<div class="absolute inset-0">
		<Carousel.Root plugins={[plugin]} class="h-full w-full">
			<Carousel.Content class="h-full">
				{#each images as _, i (i)}
					<Carousel.Item class="h-full">
						<img src={images[i]} alt="Hero Background" class="h-full w-full object-cover" />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Next class="absolute top-1/2 right-4 z-10 hidden opacity-50 md:flex" />
		</Carousel.Root>
		<div class="pointer-events-none absolute inset-0">
			<div class="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent"></div>
			<div class="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
		</div>
	</div>
	<!-- Content -->
	<div
		class="pointer-events-none relative mx-auto flex h-full max-w-7xl flex-col px-6 py-32 text-left"
		data-aos="fade-up"
	>
		<div class="h-1 flex-1"></div>
		<div>
			<div
				class="mb-6 flex w-fit items-center gap-2 rounded-full bg-buttons-muted px-3 py-1 text-sm font-medium text-text-green"
			>
				<Leaf class="h-4 w-4" /> Sustainable Energy Solutions
			</div>

			<h1 class="mb-6 text-4xl font-black sm:text-5xl lg:text-6xl">
				Power Your Future <br />
				with <span class="text-text-green">Clean Energy</span>
			</h1>

			<p class="mb-8 max-w-xl text-lg text-text-green sm:text-xl">
				Premium solar panels with industry-leading efficiency. Save up to 70% on your energy bills.
			</p>

			<div
				class="pointer-events-auto flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
			>
				<button
					class="rounded-lg bg-buttons-default px-6 py-3 font-semibold text-white shadow transition"
				>
					Start Saving Today →
				</button>
				<button
					class="rounded-lg border border-buttons-default bg-white px-6 py-3 font-semibold text-text-green transition"
				>
					View Solutions
				</button>
			</div>
		</div>
	</div>
</section>
