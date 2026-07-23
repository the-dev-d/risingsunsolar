<script>
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	let { headless = false } = $props();

	const cards = [
		{ id: 1, image: '/images/products/adani.webp', alt: 'Adani Solar' },
		{ id: 2, image: '/images/products/emmvee.webp', alt: 'Emmvee Solar' },
		{ id: 3, image: '/images/products/N-Type.webp', alt: 'Gautam Solar N-Type' },
		{ id: 4, image: '/images/products/Microtek.webp', alt: 'Microtek' },
		{ id: 5, image: '/images/products/Eastman.webp', alt: 'Eastman' }
	];

	let cardOrder = $state([0, 1, 2, 3, 4]); // Indices of cards in display order (top to bottom)

	function moveUp() {
		// Top card goes to bottom
		cardOrder = [...cardOrder.slice(1), cardOrder[0]];
	}

	function moveDown() {
		// Bottom card goes to top
		cardOrder = [cardOrder[cardOrder.length - 1], ...cardOrder.slice(0, -1)];
	}

	// Calculate card styles based on position in stack
	/** @param {number} index */
	function getCardStyle(index) {
		const position = cardOrder.indexOf(index);
		const scale = 1 - position * 0.1;
		const translateY = position * 40;
		const translateZ = position * -100;
		const rotateX = position * -2;
		const zIndex = 10 - position;
		const opacity = 1 - position * 0.4;

		return `
			transform: translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale}) rotateX(${rotateX}deg);
			z-index: ${zIndex};
			opacity: ${opacity > 0 ? opacity : 0};
			transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
		`;
	}
</script>

<section
	class="relative mx-auto w-full {headless ? '' : 'max-w-7xl px-8 py-24'}"
	data-aos="fade-up"
>
	{#if !headless}
		<div class="mb-16 text-center">
			<span class="text-sm font-bold tracking-widest text-buttons-orange uppercase"
				>Our Trusted Brands</span
			>
			<h2 class="mt-4 text-4xl font-black md:text-5xl">
				Our Trusted <span class="text-text-green">Brands</span>
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-base text-text-green/70">
				We bring you the world's most reliable solar technology from industry-leading manufacturers.
			</p>
		</div>
	{/if}

	<div
		class="relative mx-auto flex {headless
			? 'max-w-full'
			: 'max-w-5xl'} flex-col items-center justify-center gap-12 md:flex-row"
	>
		<!-- Stacked Cards Container -->
		<div
			class="relative flex h-[500px] w-full max-w-[350px] items-center justify-center md:h-[600px]"
			style="perspective: 2000px; transform-style: preserve-3d;"
		>
			{#each cards as card, index (card.id)}
				<div
					class="absolute h-full w-full rounded-2xl border border-black/5 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 ease-in-out hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
					style={getCardStyle(index)}
				>
					<div class="h-full w-full overflow-hidden rounded-xl bg-gray-50">
						<img src={card.image} alt={card.alt} class="h-full w-full object-contain" />
					</div>
				</div>
			{/each}
		</div>

		<!-- Navigation Controls -->
		<div class="flex flex-row gap-6 md:flex-col">
			<button
				onclick={moveUp}
				class="group flex h-14 w-14 items-center justify-center rounded-full border border-buttons-orange/10 bg-white text-buttons-orange shadow-xl transition-all hover:bg-buttons-orange hover:text-white active:scale-95"
				aria-label="Previous card"
			>
				<ChevronUp class="h-8 w-8 transition-transform group-hover:-translate-y-1" />
			</button>
			<button
				onclick={moveDown}
				class="group flex h-14 w-14 items-center justify-center rounded-full border border-buttons-orange/10 bg-white text-buttons-orange shadow-xl transition-all hover:bg-buttons-orange hover:text-white active:scale-95"
				aria-label="Next card"
			>
				<ChevronDown class="h-8 w-8 transition-transform group-hover:translate-y-1" />
			</button>
		</div>
	</div>
</section>

<style>
	/* Additional smooth transition for the card container */
	div {
		will-change: transform, opacity;
	}
</style>
