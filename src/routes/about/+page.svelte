<script lang="ts">
	import { Button } from '$lib/shadcn/ui/button';
	import ValueCard from '$lib/components/about/valueCard.svelte';
	import { Leaf, Eye, Heart } from 'lucide-svelte';
</script>

<section class="relative w-full overflow-hidden py-20">
	<div class="mx-auto flex w-full flex-col gap-12">
		<!-- HEADER -->
		<div class="mx-auto w-full bg-linear-to-l from-buttons-default/16 to-transparent py-16">
			<div class="mx-auto w-full max-w-7xl px-8">
				<div
					class="mb-6 flex w-fit items-center gap-2 rounded-full bg-buttons-muted px-3 py-1 text-sm font-medium text-text-green"
				>
					About Us
				</div>

				<h2 class="mb-4 text-3xl font-black md:text-5xl">
					Pioneering <span class="text-text-green">Sustainable</span> Solutions
				</h2>

				<p class="text-sm text-text-green md:text-base">
					Based in Ayarkunnam, Kottayam, and established in 1997, Rising Sun Solar Systems is a
					trusted leader in integrated electrical, plumbing, and renewable energy solutions across
					Kerala.
				</p>
			</div>
		</div>

		<!-- STORY CONTENT -->
		<div class="mx-auto grid w-full max-w-7xl items-center gap-10 px-8 py-2 md:px-0 lg:grid-cols-2">
			<div class="space-y-5 text-text-green">
				<h3 class="text-xl font-semibold text-black md:text-2xl">Our Story</h3>

				<p>
					Established in 1997 as Rising Sun Electricals in Ayarkunnam, Kottayam, our journey began
					with the supply of branded electrical goods. Over the years, we expanded into
					comprehensive electrical and plumbing contracting, backed by a valid Kerala PWD Electrical
					Contractor License, catering to residential, commercial, and government projects with
					unwavering quality.
				</p>

				<p>
					Driven by modernization, we diversified into home automation, security surveillance, and
					designer lighting. This evolution naturally led us to the forefront of renewable energy,
					where we launched Rising Sun Solar Systems. Today, we offer integrated solutions across
					solar power, smart technology, and traditional utilities, providing a one-stop destination
					for efficient and secure living.
				</p>

				<p>
					As a trusted name built on decades of customer trust, we are proud to be recognized as the
					<span class="font-bold text-black">3rd most top solar solutions team in Kottayam</span>.
					Our commitment to excellence is reinforced by being an
					<span class="font-bold text-black">MNRE Approved</span> agency, ensuring that our sustainable
					installations meet the highest national standards of reliability and performance.
				</p>
			</div>

			<!-- IMAGE -->
			<div class="overflow-hidden rounded-2xl">
				<img
					src="/images/products/teamjpeg.jpeg"
					alt="Team collaboration"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>

		<!-- VALUES -->
		<div
			class="mx-auto grid w-full max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 md:px-0 lg:grid-cols-3"
		>
			<ValueCard
				icon={Leaf}
				title="Mission"
				text="To provide integrated electrical, plumbing, and renewable energy solutions that deliver quality, reliability, and value to every project we undertake."
			/>

			<ValueCard
				icon={Eye}
				title="Vision"
				text="To drive sustainable development and modernization across Kerala through innovative solar power, smart automation, and advanced electrical systems."
			/>

			<ValueCard
				icon={Heart}
				title="Values"
				text="Decades of experience, quality workmanship, and customer trust form the foundation of our commitment to excellence."
			/>
		</div>

		<!-- CTA -->
		<div class="px-6">
			<div
				class="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 rounded-2xl bg-footer-background px-14 py-10 text-center text-white"
			>
				<h3 class="mb-2 text-xl font-semibold">Not Sure Which Service You Need?</h3>

				<p class="mx-auto mb-6 max-w-md text-sm text-buttons-muted">
					Get in touch with our team for a free consultation and discover how we can help power your
					future.
				</p>

				<a
					href="https://wa.me/919495744899?text=Hello%2C%20I'd%20like%20to%20get%20in%20touch%20with%20RisingSun%20regarding%20energy%20solutions."
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						class="hover:bg-buttons-green border border-buttons-whatsapp bg-buttons-whatsapp text-base font-bold hover:scale-105"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							fill="white"
							class="h-5 w-5 shrink-0"
							><path
								d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
							/></svg
						>Chat on WhatsApp</Button
					>
				</a>
			</div>
		</div>
	</div>
</section>
