<script lang="ts">
	import { Card } from '$lib/shadcn/ui/card';
	import { Badge } from '$lib/shadcn/ui/badge';
	import { Progress } from '$lib/shadcn/ui/progress';
	import Feature from './feature.svelte';

	import { Check, Zap, Shield, Wrench, Clock, Headphones, BadgeCheck } from '@lucide/svelte';
</script>

<section class="relative mx-auto max-w-7xl px-6 py-24">
	<div class="container mx-auto grid items-center gap-16 lg:grid-cols-2">
		<div class="relative flex h-128 w-full flex-col p-10" data-aos="fade-up">
			<img
				src="/images/solarDisplay.jpg"
				alt="Solar panels"
				class="absolute top-0 left-0 -z-10 h-full w-full rounded-2xl object-cover opacity-45"
			/>

			<Card class="w-full gap-4 p-4 shadow-lg">
				<div class="flex items-center justify-between text-sm text-muted-foreground">
					<span>Energy Generated</span>
					<Badge variant="secondary" class="text-text-green">+12.5%</Badge>
				</div>
				<div class="text-2xl font-semibold">24,580 kWh</div>
				<Progress value={70} />
			</Card>
			<div class="flex-1"></div>
			<Card class="w-full gap-3 p-4 shadow-lg">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-md bg-buttons-orange/24">
						<Check class="h-5 w-5 text-buttons-orange" />
					</div>

					<div>
						<p class="text-sm text-muted-foreground">CO₂ Emissions Saved</p>
						<p class="text-lg font-semibold">12.4 Tons</p>
					</div>
				</div>
			</Card>
		</div>

		<div data-aos="fade-up">
			<div class="mb-3 flex items-center gap-6 text-sm font-semibold tracking-widest uppercase">
				Why choose us
				<span
					class="block h-px
         flex-1 bg-gradient-to-r from-buttons-default to-transparent"
				>
				</span>
			</div>

			<h2 class="mb-4 text-4xl leading-tight font-bold">
				Trusted by Thousands <br />
				for Sustainable Living
			</h2>

			<p class="mb-10 max-w-xl text-muted-foreground">
				We combine cutting-edge technology with exceptional service to deliver solutions that make a
				real difference for your wallet and the planet.
			</p>

			<div class="grid gap-6 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="200">
				<Feature
					icon={Zap}
					title="Cost Savings"
					text="Reduce energy costs by up to 70% with our efficient solar systems."
				/>

				<Feature
					icon={Clock}
					title="Quick Installation"
					text="Professional installation completed in just 1–3 days."
				/>

				<Feature
					icon={Shield}
					title="Premium Quality"
					text="Industry-leading equipment with 25-year warranty coverage."
				/>

				<Feature
					icon={Headphones}
					title="24/7 Support"
					text="Round-the-clock customer service and monitoring."
				/>

				<Feature
					icon={Wrench}
					title="Free Maintenance"
					text="Complimentary annual maintenance for optimal performance."
				/>

				<Feature
					icon={BadgeCheck}
					title="Certified Experts"
					text="Licensed professionals with 10+ years of experience."
				/>
			</div>
		</div>
	</div>
</section>
