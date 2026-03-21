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
				src="/images/about_diagram_growth.png"
				alt="Diagram showing company growth through solar energy, smart security, and sustainability"
				class="absolute top-0 left-0 -z-10 h-full w-full rounded-2xl object-contain p-4"
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
				for Sustainable Living <br />
				<span class="text-lg font-bold text-text-green sm:text-2xl"
					>Leading Solar Panel Installation Company Kerala</span
				>
			</h2>

			<p class="mb-10 max-w-2xl text-justify text-sm text-muted-foreground md:text-base">
				As a leading solar panel installation company in Kerala, we are committed to helping homes
				and businesses transition to clean, renewable energy. Our team specializes in solar panel
				installation in Kerala, combining cutting-edge solar technology with exceptional customer
				service to deliver reliable, long-term energy solutions. We focus on creating systems that
				not only reduce electricity costs but also contribute to a greener and more sustainable
				future for the planet. Our approach is simple , provide efficient, high-quality solar
				solutions tailored to your needs while ensuring maximum performance and savings for years to
				come.
			</p>

			<div class="grid gap-6 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="200">
				<Feature
					icon={Zap}
					title="Cost Savings"
					text="Significantly reduce your monthly electricity bills with our advanced solar systems designed for maximum efficiency and long-term financial benefits."
				/>

				<Feature
					icon={Clock}
					title="Quick Installation"
					text="Our experienced team ensures a smooth and efficient solar panel installation in Kerala, completing projects quickly while maintaining the highest safety and quality standards."
				/>

				<Feature
					icon={Shield}
					title="Premium Quality"
					text="We use top-tier solar panels, inverters, and components sourced from globally trusted manufacturers to ensure durability, reliability, and high performance."
				/>

				<Feature
					icon={Headphones}
					title="Dedicated Support"
					text="From consultation to post-installation service, our support team provides reliable customer care and system monitoring to keep your solar system performing at its best."
				/>

				<Feature
					icon={Wrench}
					title="Maintenance Services"
					text="We offer regular maintenance and system checkups to ensure optimal performance and longevity of your solar power system."
				/>

				<Feature
					icon={BadgeCheck}
					title="Certified Experts"
					text="Our licensed and trained professionals bring extensive industry expertise, making us a leading solar panel installation company in Kerala trusted by hundreds of satisfied customers."
				/>
			</div>
		</div>
	</div>
</section>
