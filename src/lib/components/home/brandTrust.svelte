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
						Choosing solar energy is a commitment to a cleaner, more sustainable future. By
						harnessing the power of the sun, you significantly reduce your carbon footprint while
						gaining energy independence.
					</p>
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						Beyond environmental benefits, solar systems offer a massive reduction in monthly
						electricity bills, providing long-term financial stability and protection against rising
						utility costs from the very first day of installation.
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
						Since our journey began in 1997 as Rising Sun Electricals, we have built a legacy based
						on quality workmanship and customer trust across Kerala. Our evolution from an
						electrical goods supplier to a multifaceted renewable energy leader ensures you get
						unparalleled industry expertise.
					</p>
					<p class="text-base leading-relaxed text-text-green/80 md:text-lg">
						We are proud to be <span class="font-black text-black">Ranked 3rd in Kottayam</span> as
						a preferred solar solutions provider. As an
						<span class="font-black text-black">MNRE Approved Agency</span> and a
						<span class="font-black text-black">Kerala PWD Licensed Electrical Contractor</span>, we
						guarantee integrated solutions that meet the highest government standards of safety and
						efficiency.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
