<script lang="ts">
	import { Card } from '$lib/shadcn/ui/card';
	import { Badge } from '$lib/shadcn/ui/badge';
	import { Progress } from '$lib/shadcn/ui/progress';
	import Feature from './feature.svelte';

	import { Check, Zap, Shield, Wrench, Clock, Headphones, BadgeCheck } from '@lucide/svelte';
</script>

<section class="relative mx-auto max-w-7xl px-8 py-20 md:py-24">
	<div class="container mx-auto grid items-center gap-16 lg:grid-cols-2">
		<div class="relative flex h-92 w-full flex-col p-6 md:h-128 md:p-10" data-aos="fade-up">
			<img
				src="/images/solarDisplay.jpg"
				alt="Solar panels"
				class="absolute top-0 left-0 -z-10 h-full w-full rounded-2xl object-cover"
			/>
		</div>

		<div data-aos="fade-up">
			<div class="mb-3 flex items-center gap-6 text-sm font-medium tracking-widest uppercase">
				Why choose us
				<span
					class="block h-px
         flex-1 bg-gradient-to-r from-buttons-default to-transparent"
				>
				</span>
			</div>

			<h2 class="mb-4 text-3xl leading-tight font-bold md:text-5xl">
				Trusted Partner <br />
				for Sustainable Living
			</h2>

			<p class="mb-10 max-w-xl text-sm text-muted-foreground md:text-base">
				We combine cutting-edge technology with exceptional service to deliver solutions that make a
				real difference for your budget and the planet.
			</p>

			<div class="grid gap-6 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="200">
				<Feature
					icon={Zap}
					title="Cost Savings"
					text="Significantly lower your monthly energy expenses with our solar solutions."
				/>

				<Feature
					icon={Clock}
					title="Quick Installation"
					text="Efficient installation process managed by our experienced team."
				/>

				<Feature
					icon={Shield}
					title="Premium Quality"
					text="Top-tier equipment sourced from world-renowned manufacturers."
				/>

				<Feature
					icon={Headphones}
					title="Dedicated Support"
					text="Reliable customer service and system monitoring."
				/>

				<Feature
					icon={Wrench}
					title="Maintenance Services"
					text="Regular maintenance options to ensure peak system performance."
				/>

				<Feature
					icon={BadgeCheck}
					title="Certified Experts"
					text="Licensed professionals with extensive industry experience."
				/>
			</div>
		</div>
	</div>
</section>
