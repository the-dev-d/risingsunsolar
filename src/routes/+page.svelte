<script>
	import { Sun, Shield, Leaf, Phone } from '@lucide/svelte';
	import Button from '$lib/shadcn/ui/button/button.svelte';
</script>

<main>
	<!-- HERO -->

	<section class="relative h-screen max-h-200">
		<div class="absolute inset-0">
			<img src="/images/solarHero.jpg" alt="Solar panels" class="h-full w-full object-cover" />
			<div class="absolute inset-0 bg-linear-to-r from-white/70 to-transparent"></div>
			<div class="absolute inset-0 bg-linear-to-t from-white/70 to-transparent"></div>
		</div>
		<!-- Content -->
		<div class="relative mx-auto flex max-w-7xl flex-col px-6 py-32 text-center md:text-left h-full">
			<div class="h-1 flex-1"></div>
			<div>
				<div
					class="mb-6 flex w-fit items-center gap-2 rounded-full bg-buttons-muted px-3 py-1 text-sm font-medium text-text-green"
				>
					<Leaf class="h-4 w-4" /> Sustainable Energy Solutions
				</div>

				<h1 class="mb-6 text-4xl font-black sm:text-5xl lg:text-6xl">
					Power Your Future <br />
					with <span class="text-text-green">Clean Energy</span>
				</h1>

				<p class="mb-8 max-w-xl text-lg text-text-green sm:text-xl">
					Premium solar panels with industry-leading efficiency. Save up to 70% on your energy
					bills.
				</p>

				<div class="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
					<button
						class="rounded-lg bg-buttons-default px-6 py-3 font-semibold text-white shadow transition"
					>
						Start Saving Today →
					</button>
					<button
						class="rounded-lg border border-buttons-default bg-white px-6 py-3 font-semibold text-text-green transition"
					>
						View Solutions
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- SERVICES -->
	<section class="relative overflow-hidden py-24">
		<div class="relativ mx-auto max-w-7xl px-6 text-center">
			<span class="text-sm font-semibold tracking-widest uppercase"> Our Services </span>

			<div class="relative my-6 flex items-center gap-6">
				<span
					class="hidden h-px flex-1
         bg-gradient-to-l from-buttons-default to-transparent md:block"
				>
				</span>

				<h2 class="text-5xl font-black">
					Complete Energy & <br /> Security Solutions
				</h2>

				<span
					class=" hidden h-px flex-1
         bg-gradient-to-r from-buttons-default to-transparent md:block"
				>
				</span>
			</div>

			<p class="mx-auto max-w-xl">
				Everything you need to power, protect, and sustain your home or business under one roof.
			</p>

			<div class="mt-16 grid gap-8 text-left text-text-green md:grid-cols-3">
				<div class="rounded-2xl bg-white p-8 shadow-md shadow-black/5">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-buttons-orange/24 text-buttons-orange"
					>
						<Sun />
					</div>

					<h3 class="text-lg font-semibold text-black">Solar Panels</h3>

					<p class="mt-3 text-sm">
						High-efficiency photovoltaic systems designed for maximum energy capture. Reduce your
						electricity bills by up to 70%.
					</p>

					<ul class="mt-4 space-y-2 text-sm">
						<li>• Monocrystalline Technology</li>
						<li>• 25-Year Performance Warranty</li>
						<li>• Smart Monitoring App</li>
					</ul>

					<a
						href="#"
						class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-text-green transition-all hover:gap-3"
					>
						Learn More →
					</a>
				</div>

				<div class="rounded-2xl bg-white p-8 shadow-md shadow-black/5">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-buttons-grey text-white"
					>
						<Shield />
					</div>

					<h3 class="text-lg font-semibold text-black">Security Systems</h3>

					<p class="mt-3 text-sm">
						Advanced electronic security powered by renewable energy. Cameras, sensors, and
						monitoring with eco-conscious design.
					</p>

					<ul class="mt-4 space-y-2 text-sm">
						<li>• 24/7 Monitoring</li>
						<li>• Solar-Powered Options</li>
						<li>• Mobile App Control</li>
					</ul>

					<a
						href="#"
						class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-text-green transition-all hover:gap-3"
					>
						Learn More →
					</a>
				</div>

				<div class="rounded-2xl bg-white p-8 shadow-md shadow-black/5">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-buttons-muted text-text-green"
					>
						<Leaf />
					</div>

					<h3 class="text-lg font-semibold text-black">Eco Equipment</h3>

					<p class="mt-3 text-sm">
						Sustainable home automation and energy management solutions. Smart thermostats, LED
						systems, and efficient appliances.
					</p>

					<ul class="mt-4 space-y-2 text-sm">
						<li>• Energy-Efficient Devices</li>
						<li>• Smart Home Integration</li>
						<li>• Carbon Footprint Tracking</li>
					</ul>

					<a
						href="#"
						class="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
					>
						Learn More →
					</a>
				</div>
			</div>
		</div>
	</section>
	<!-- CTA -->
	<section class="relative bg-linear-to-l from-buttons-orange/16 to-transparent py-28">
		<div class="relative mx-auto max-w-5xl px-6 text-center">
			<p class="mb-6 text-sm">Get Started Today</p>

			<div class="relative mb-6 flex items-center justify-center gap-6">
				<span
					class="hidden h-px flex-1
               bg-gradient-to-l from-buttons-default to-transparent md:block"
				></span>

				<h2 class="text-3xl font-black">
					Ready to Make the Switch to
					<span class="text-text-green"> Clean Energy</span>?
				</h2>
				<span
					class="hidden h-px flex-1
               bg-gradient-to-r from-buttons-default to-transparent md:block"
				></span>
			</div>

			<p class="mx-auto mb-10 max-w-xl text-sm leading-relaxed">
				Get a free consultation and quote for your solar, electrical, or security project. Our
				experts are ready to help you make the switch to smarter energy solutions.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button
					class="hover:bg-buttons-green order-2 border-buttons-whatsapp bg-buttons-whatsapp text-base font-bold hover:scale-105"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						fill="white"
						class="h-5 w-5 shrink-0"
						><path
							d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
						/></svg
					>WhatsApp Us</Button
				>
				<Button
					class=" border-2 border-buttons-default bg-transparent text-base font-bold text-text-green hover:scale-105 hover:bg-transparent"
				>
					<Phone />
					Call Us Now</Button
				>
			</div>
		</div>
	</section>
</main>
