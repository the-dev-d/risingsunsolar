<script lang="ts">
	import AOS from 'aos';
	import { Sun, Shield, Leaf, Phone, ArrowUpRight } from '@lucide/svelte';
	import Button from '$lib/shadcn/ui/button/button.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import BrandTrust from '$lib/components/home/brandTrust.svelte';
	import Achievements from '$lib/components/home/achievements.svelte';
	import Faq from '$lib/components/home/faq.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init({
			offset: 120,
			delay: 0,
			duration: 800,
			easing: 'ease',
			once: false,
			mirror: false,
			anchorPlacement: 'top-bottom'
		});
	});
</script>

<svelte:head>
	<title>Rising Sun Solar Systems | Solar & Energy Solutions Kottayam</title>
	<meta name="title" content="Leading Solar Panel Installation Company Kerala" />
	<meta
		name="description"
		content="Rising Sun Solar is a leading solar panel installation company in Kerala offering reliable solar panel installation Kerala for homes and businesses. Save energy today."
	/>
	<link rel="canonical" href="https://risingsunsolar.in/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://risingsunsolar.in/" />
	<meta property="og:title" content="Leading Solar Panel Installation Company Kerala" />
	<meta
		property="og:description"
		content="Rising Sun Solar is a leading solar panel installation company in Kerala offering reliable solar panel installation Kerala for homes and businesses. Save energy today."
	/>
	<meta property="og:image" content="https://risingsunsolar.in/images/meta-preview.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://risingsunsolar.in/" />
	<meta name="twitter:title" content="Leading Solar Panel Installation Company Kerala" />
	<meta
		name="twitter:description"
		content="Rising Sun Solar is a leading solar panel installation company in Kerala offering reliable solar panel installation Kerala for homes and businesses. Save energy today."
	/>
	<meta name="twitter:image" content="https://risingsunsolar.in/images/meta-preview.png" />
</svelte:head>

<main>
	<!-- HERO -->
	<Hero />
	<!-- SERVICES -->
	<section
		class="relative mx-auto w-full max-w-7xl overflow-hidden px-8 py-20 text-center md:py-24"
	>
		<span class="text-sm font-medium tracking-widest uppercase" data-aos="fade-up">
			Our Services
		</span>

		<div
			class="relative my-6 flex items-center justify-center gap-6 text-center"
			data-aos="fade-up"
		>
			<span
				class="hidden h-px flex-1
         bg-gradient-to-l from-buttons-default to-transparent md:block"
			>
			</span>

			<h2 class="text-3xl font-black md:text-5xl">
				Complete Energy & <br /> Security Solutions
			</h2>

			<span
				class=" hidden h-px flex-1
         bg-gradient-to-r from-buttons-default to-transparent md:block"
			>
			</span>
		</div>

		<p class="mx-auto max-w-2xl text-sm leading-relaxed md:text-base" data-aos="fade-up">
			Everything you need to power, protect, and sustain your home or business under one roof. As a
			leading solar panel installation company Kerala, we provide advanced energy solutions designed
			for efficiency, reliability, and long-term sustainability. Our services combine modern
			technology with professional expertise to deliver the best solar panel installation Kerala
			along with smart security and eco-friendly systems.
		</p>

		<div class="mt-16 grid gap-8 text-left text-text-green md:grid-cols-3">
			<div class="rounded-2xl bg-white p-8 shadow-md shadow-black/5" data-aos="fade-right">
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-buttons-orange/24 text-buttons-orange"
				>
					<Sun />
				</div>

				<h3 class="text-lg font-semibold text-black">Solar Panels</h3>

				<p class="mt-3 text-sm">
					High-efficiency photovoltaic systems designed for maximum energy capture and long-term
					performance. As a leading solar panel installation company Kerala, we provide professional
					solar panel installation Kerala services that help homeowners and businesses reduce
					electricity costs while switching to clean and renewable energy.
				</p>

				<ul class="mt-4 space-y-2 text-sm">
					<li>• Monocrystalline Technology</li>
					<li>• Leading Brand Equipment</li>
					<li>• Smart Monitoring App</li>
					<li>• Expert Solar Panel Installation in Kerala</li>
				</ul>

				<a
					href="/services#solar"
					class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-green transition-all hover:gap-3"
				>
					Learn More <ArrowUpRight class="h-4 w-4" />
				</a>
			</div>

			<div
				class="rounded-2xl bg-white p-8 shadow-md shadow-black/5"
				data-aos="fade-right"
				data-aos-delay="200"
			>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-buttons-grey text-white"
				>
					<Shield />
				</div>

				<h3 class="text-lg font-semibold text-black">Security Systems</h3>

				<p class="mt-3 text-sm">
					Advanced electronic security systems designed to protect your home or business while
					integrating energy-efficient technologies. Our smart security solutions include cameras,
					sensors, and monitoring systems powered by sustainable energy sources.
				</p>

				<ul class="mt-4 space-y-2 text-sm">
					<li>• 24/7 Monitoring</li>
					<li>• Solar-Powered Security Options</li>
					<li>• Mobile App Control</li>
					<li>• Smart Surveillance Solutions</li>
				</ul>

				<a
					href="/services#security"
					class="mt-6 inline-flex items-center gap-2 text-sm font-medium font-semibold text-text-green transition-all hover:gap-3"
				>
					Learn More <ArrowUpRight class="h-4 w-4" />
				</a>
			</div>

			<div
				class="rounded-2xl bg-white p-8 shadow-md shadow-black/5"
				data-aos="fade-right"
				data-aos-delay="400"
			>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-buttons-muted text-text-green"
				>
					<Leaf />
				</div>

				<h3 class="text-lg font-semibold text-black">Eco Equipment</h3>

				<p class="mt-3 text-sm">
					Sustainable home automation and energy-efficient equipment that support smarter living.
					From AI-powered cameras to LED systems and smart appliances, our eco solutions help reduce
					energy consumption and environmental impact.
				</p>

				<ul class="mt-4 space-y-2 text-sm">
					<li>• Energy-Efficient Devices</li>
					<li>• Smart Home Integration</li>
					<li>• AI Camera Systems</li>
					<li>• Environmental Impact Reduction</li>
				</ul>

				<a
					href="/services"
					class="mt-6 inline-flex items-center gap-2 text-sm font-medium font-semibold text-text-green transition-all hover:gap-3"
				>
					Learn More <ArrowUpRight class="h-4 w-4" />
				</a>
			</div>
		</div>
	</section>
	<!-- ACHIEVEMENTS -->
	<Achievements />

	<!-- TRUST SECTION -->
	<BrandTrust />

	<!-- ABOUT SECTION -->
	<About />

	<!-- FAQ SECTION -->
	<Faq />

	<!-- CTA -->
	<section
		class="relative bg-linear-to-l from-buttons-orange/16 to-transparent py-10"
		data-aos="fade-down"
	>
		<div class="relative mx-auto max-w-5xl px-6 text-center">
			<p class="mb-6 text-sm">Get Started Today</p>

			<div class="relative mb-6 flex items-center justify-center gap-6">
				<span
					class="hidden h-px flex-1
               bg-gradient-to-l from-buttons-default to-transparent md:block"
				></span>

				<h2 class="text-2xl font-black md:text-3xl">
					Ready to Make the Switch to
					<span class="text-text-green"> Clean Energy</span>?
				</h2>
				<span
					class="hidden h-px flex-1
               bg-gradient-to-r from-buttons-default to-transparent md:block"
				></span>
			</div>

			<div
				class="mx-auto mb-10 max-w-4xl space-y-4 text-xs leading-relaxed text-text-green/80 md:text-sm"
			>
				<p>
					Take the first step toward a smarter and more sustainable future with the leading solar
					panel installation company in Kerala. We specialize in professional solar panel
					installation in Kerala, helping homeowners and businesses reduce electricity costs while
					embracing reliable renewable energy solutions.
				</p>
				<p>
					Get a free consultation and quote for your solar, electrical, or security project. Our
					experienced experts will guide you through every step, from system design to installation,
					ensuring a smooth and efficient transition to clean energy. With advanced technology,
					quality equipment, and dedicated support, we make solar panel installation in Kerala
					simple, affordable, and highly effective.
				</p>
				<p>
					Switch to clean energy today and start enjoying long-term savings and environmental
					benefits with a trusted team committed to delivering excellence.
				</p>
				<p class="font-bold text-text-green">
					Contact us now to learn how we can power your home or business with solar energy.
				</p>
			</div>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="https://wa.me/919495744899?text=Hello%2C%20I'd%20like%20to%20get%20a%20quote%20for%20clean%20energy%20solutions."
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
							class="h-5 w-6 shrink-0"
							><path
								d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
							/></svg
						>WhatsApp Us</Button
					>
				</a>
				<Button
					class=" border border-buttons-default bg-transparent text-base font-bold text-text-green hover:scale-105 hover:bg-transparent"
				>
					<Phone />
					Call Us Now</Button
				>
			</div>
		</div>
	</section>
</main>
