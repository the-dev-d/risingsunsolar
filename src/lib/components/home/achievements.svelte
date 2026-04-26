<script lang="ts">
	import { Check } from 'lucide-svelte';
</script>

<section class="relative mx-auto w-full max-w-7xl px-8 py-20" data-aos="fade-up">
	<div class="flex flex-col items-center justify-center text-center">
		<!-- AWARD IMAGE CONTAINER -->
		<div class="group relative mb-12 flex items-center justify-center">
			<!-- OUTER GLOW -->
			<div
				class="absolute inset-0 scale-75 rounded-full bg-buttons-default/5 blur-3xl transition-all duration-1000 group-hover:bg-buttons-default/10"
			></div>

			<img
				src="/images/positionaward.webp"
				alt="Ranked 3rd Award"
				class="relative h-72 w-auto object-contain transition-all duration-700 group-hover:scale-110"
				style="filter: drop-shadow(0 20px 50px rgba(0,0,0,0.2)) contrast(1.05) brightness(1.02);"
			/>
		</div>

		<!-- CONTENT -->
		<div class="space-y-8">
			<div class="space-y-2">
				<h3 class="text-6xl font-black tracking-tighter text-black md:text-7xl">Ranked 3rd</h3>
				<p class="text-xl font-bold tracking-[0.2em] text-text-green/60 uppercase md:text-2xl">
					In Kottayam District
				</p>
			</div>

			<!-- MNRE APPROVED BADGE -->
			<div class="pt-2">
				<div
					class="mx-auto flex w-fit items-center gap-6 rounded-2xl border border-black/5 bg-white px-10 py-6 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all hover:translate-y-[-4px] hover:shadow-2xl"
				>
					<div
						class="flex h-14 w-14 items-center justify-center rounded-full bg-buttons-default text-white shadow-lg shadow-buttons-default/30"
					>
						<Check class="h-8 w-8" strokeWidth={4} />
					</div>
					<div class="text-left">
						<span class="block text-4xl font-black tracking-tight text-buttons-default">
							MNRE Approved
						</span>
						<p class="text-xs font-black tracking-widest text-text-green/40 uppercase">
							Ministry of New and Renewable Energy
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Subtle float animation for the award */
	.group:hover {
		animation: floating 4s ease-in-out infinite;
	}

	@keyframes floating {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
</style>
