<script lang="ts">
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	const faqs = [
		{
			question: 'Why choosing the leading solar panel installation company in Kerala?',
			answer:
				'Choosing a leading solar panel installation company in Kerala ensures high-quality solar systems, professional installation, and reliable after-sales support. Experienced installers design systems based on your energy consumption, roof structure, and sunlight exposure to maximize efficiency and savings.'
		},
		{
			question: 'How does solar panel installation in Kerala work?',
			answer:
				'The process of solar panel installation in Kerala typically includes a site inspection, system design, government approval, installation of panels and inverters, and final grid connection. Most projects are completed within a few days depending on system size.'
		},
		{
			question: 'What are the benefits of solar panel installation in Kerala?',
			answer:
				'Solar panel installation in Kerala helps homeowners and businesses reduce electricity bills, generate clean renewable energy, and increase property value. Many users report significant bill reductions after installing rooftop solar systems.'
		},
		{
			question: 'How much does solar panel installation cost in Kerala?',
			answer:
				'The cost of solar panel installation in Kerala depends on system capacity (1kW–10kW+), panel quality, and inverter type. Government subsidies can significantly reduce the cost for residential systems.'
		},
		{
			question: 'Is solar energy suitable for homes and businesses in Kerala?',
			answer:
				'Yes. Kerala receives abundant sunlight throughout the year, making solar energy a practical and sustainable solution. With proper system design and installation, solar panels can generate reliable electricity for both residential and commercial properties.'
		}
	];

	let openIndex = $state(-1);

	function toggle(index: number) {
		openIndex = openIndex === index ? -1 : index;
	}
</script>

<section class="relative mx-auto max-w-7xl px-8 py-20 md:py-24" data-aos="fade-up">
	<div class="mb-12 text-center">
		<span class="text-sm font-medium tracking-widest text-text-green uppercase">ADD ON - FAQ</span>
		<h2 class="mt-4 text-3xl font-black md:text-5xl">FAQ</h2>
	</div>

	<div class="mx-auto max-w-4xl space-y-4">
		{#each faqs as faq, i}
			<div
				class="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:shadow-md"
			>
				<button
					class="flex w-full items-center justify-between p-6 text-left"
					onclick={() => toggle(i)}
					aria-expanded={openIndex === i}
				>
					<span class="pr-8 text-lg font-bold text-text-green md:text-xl">{faq.question}</span>
					<ChevronDown
						class="h-6 w-6 shrink-0 text-text-green transition-transform duration-300 {openIndex ===
						i
							? 'rotate-180'
							: ''}"
					/>
				</button>

				<div
					class="grid transition-all duration-300 ease-in-out {openIndex === i
						? 'grid-rows-[1fr] opacity-100'
						: 'grid-rows-[0fr] opacity-0'}"
				>
					<div class="overflow-hidden">
						<div class="px-6 pb-6 text-base leading-relaxed text-text-green/70 md:text-lg">
							{faq.answer}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
