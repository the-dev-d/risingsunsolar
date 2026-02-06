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

<section class="relative mx-auto h-screen max-h-200 min-h-200 w-full overflow-hidden">
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
			<div class="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>
			<div class="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
		</div>
	</div>
	<!-- Content -->
	<div
		class="pointer-events-none relative mx-auto flex h-full max-w-7xl flex-col px-8 py-36 text-left"
		data-aos="fade-up"
	>
		<div class="h-1 flex-1"></div>
		<div>
			<div
				class="mb-6 flex w-fit items-center gap-2 rounded-full bg-buttons-muted px-3 py-1 text-sm font-medium text-text-green sm:text-base"
			>
				<Leaf class="h-4 w-4" /> Sustainable Energy Solutions
			</div>

			<h1 class="mb-6 text-4xl font-black sm:text-5xl lg:text-6xl">
				Power Your Future <br />
				with <span class="text-text-green">Clean Energy</span>
			</h1>

			<p class="sm:text-md mb-8 max-w-lg text-justify text-base text-text-green">
				Premium solar panels with industry-leading efficiency. Transform your home or business with
				clean, sustainable energy.
			</p>

			<div
				class="pointer-events-auto flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
			>
				<a
					href="/contact"
					class="flex transform items-center justify-center rounded-lg bg-buttons-default px-6 py-3 font-semibold text-white shadow transition-all duration-300 hover:scale-105"
				>
					Get Started
				</a>
				<a
					href="/services"
					class="flex transform items-center justify-center rounded-lg border border-buttons-default px-6 py-3 font-semibold text-text-green transition-all duration-300 hover:scale-105 hover:bg-white"
				>
					View Solutions
				</a>
			</div>
		</div>
		<div class="hidden h-1 flex-1 sm:block"></div>
	</div>
</section>
