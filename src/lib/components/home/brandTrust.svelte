<script lang="ts">
	import StackedCards from './stackedCards.svelte';
	import { Zap, Award } from 'lucide-svelte';
</script>

<section class="relative mx-auto w-full max-w-7xl px-8 py-20 md:py-32" data-aos="fade-up">
	<div class="grid items-center gap-16 lg:grid-cols-2">
		<!-- LEFT: TRUSTED BRANDS -->
		<div class="relative order-2 lg:order-1">
			<div class="mb-10 text-center lg:text-left">
				<span class="text-xs font-black tracking-widest text-buttons-orange uppercase"
					>Our Partners</span
				>
				<h2 class="mt-2 text-3xl font-black md:text-5xl">
					Trusted <span class="text-text-green">Industry Brands</span>
				</h2>
			</div>
			<StackedCards headless={true} />
		</div>

		<!-- RIGHT: WHY SOLAR & WHY RISING SUN -->
		<div class="order-1 flex flex-col gap-16 lg:order-2">
			<!-- WHY SOLAR -->
			<div class="space-y-6">
				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-2xl bg-buttons-orange/10 text-buttons-orange shadow-inner"
					>
						<Zap class="h-6 w-6" />
					</div>
					<h3 class="text-3xl font-black md:text-4xl">Why Solar?</h3>
				</div>
				<div class="space-y-4">
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						Choosing solar energy is a commitment to a cleaner and more sustainable future. With
						professional solar panel installation Kerala, homeowners and businesses can harness the
						abundant power of the sun to generate reliable electricity while significantly reducing
						their carbon footprint.
					</p>
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						Solar energy not only helps protect the environment but also provides long-term
						financial benefits. By installing a modern solar power system, you can drastically
						reduce monthly electricity bills and gain greater energy independence. With high-quality
						technology and expert solar panel installation Kerala, your property benefits from
						efficient power generation, long-term durability, and protection against rising utility
						costs from the very first day of installation.
					</p>
				</div>
			</div>

			<!-- WHY RISING SUN -->
			<div class="space-y-6">
				<div class="flex items-center gap-4">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-2xl bg-buttons-default/10 text-buttons-default shadow-inner"
					>
						<Award class="h-6 w-6" />
					</div>
					<h3 class="text-3xl font-black md:text-4xl">Why Rising Sun?</h3>
				</div>
				<div class="relative space-y-4">
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						Since our journey began in 1997 as Rising Sun Electricals, we have built a strong
						reputation based on quality workmanship, reliability, and customer trust across Kerala.
						Over the years, we have evolved from an electrical goods supplier into a trusted
						renewable energy provider and a leading solar panel installation company Kerala.
					</p>
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						Our experienced team delivers professional solar panel installation Kerala solutions
						designed for homes, commercial buildings, and industrial projects. We focus on advanced
						technology, efficient system design, and seamless installation to ensure maximum energy
						output and long-term performance.
					</p>
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						We are proud to be <span class="font-black text-black">Ranked 3rd in Kottayam</span> as
						a preferred solar solutions provider. As an
						<span class="font-black text-black">MNRE Approved Agency</span> and a
						<span class="font-black text-black">Kerala PWD Licensed Electrical Contractor</span>, we
						follow strict government standards and safety regulations to deliver reliable and
						efficient solar energy systems.
					</p>
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						With decades of industry expertise, we continue to provide sustainable energy solutions
						that help customers save money, reduce energy costs, and move toward a greener future.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
