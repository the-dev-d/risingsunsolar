<script lang="ts">
	import { Button } from '$lib/shadcn/ui/button';
	import Service from '$lib/components/services/service.svelte';
	import { Sun, Zap, Shield, DoorOpen, Droplets } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Our Services | Solar, Electrical & Security Solutions</title>
	<meta
		name="description"
		content="Explore our wide range of services including solar panel installation, electrical work, CCTV security, gate automation, and solar water heaters in Kottayam."
	/>
</svelte:head>

<section class="relative w-full overflow-hidden py-20">
	<div class="mx-auto flex w-full flex-col gap-2">
		<!-- HEADER -->
		<div class="mx-auto w-full bg-linear-to-l from-buttons-default/16 to-transparent py-16">
			<div class="mx-auto w-full max-w-7xl px-8">
				<div
					class="mb-6 flex w-fit items-center gap-2 rounded-full bg-buttons-muted px-3 py-1 text-sm font-medium text-text-green"
				>
					Our Services
				</div>

				<h2 class="mb-4 text-3xl font-black md:text-5xl">
					Complete Energy & <span class="text-text-green">Security Solutions</span>
				</h2>

				<p class="text-sm text-text-green md:text-base">
					From solar installation to smart security systems, we offer comprehensive solutions to
					power and protect your home or business.
				</p>
			</div>
		</div>

		<!-- Services -->
		<div class="mx-auto flex w-full max-w-7xl flex-col px-8 py-4 md:px-0">
			<Service
				id="solar"
				title="Solar Panel Installation"
				description="Harness the power of the sun with our premium solar panel systems. We provide complete installation services for residential and commercial properties."
				points={[
					'Grid-Tied Solar Systems',
					'Hybrid Systems',
					'Commercial Installations',
					'Maintenance & Repairs'
				]}
				bg="bg-buttons-orange/24"
				fg="text-buttons-orange"
				image="images/products/solar.jpeg"
				icon={Sun}
			/>
			<Service
				id="electrical"
				title="Electrical Work"
				description="Complete electrical services from wiring to panel upgrades. Our certified electricians ensure safe and efficient power solutions for any project."
				points={[
					'House Rewiring',
					'Panel Upgrades',
					'EV Charging Installation',
					'Smart Home Systems',
					'Emergency Repairs'
				]}
				bg="bg-buttons-blue"
				fg="text-white"
				image="images/products/Electric.jpeg"
				icon={Zap}
				reverse
			/><Service
				id="security"
				title="CCTV & Security"
				description="Advanced security camera systems and monitoring solutions. Keep your property safe with constant surveillance technology and smart alerts."
				points={[
					'HD Camera Systems',
					'Night Vision Cameras',
					'Remote Monitoring',
					'Motion Detection Alerts',
					'AI enabled Cameras'
				]}
				bg="bg-buttons-grey"
				fg="text-white"
				image="images/products/Cam.jpeg"
				icon={Shield}
			/><Service
				id="gates"
				title="Gate Automation"
				description="Automated gate systems for enhanced security and convenience. Modern solutions for residential and commercial properties."
				points={[
					'Sliding Gate Motors',
					'Swing Gate Systems',
					'Intercom Integration',
					'Remote Access Control',
					'Safety Sensors'
				]}
				bg="bg-buttons-muted"
				fg="text-buttons-default"
				image="images/products/Gate.jpeg"
				icon={DoorOpen}
				reverse
			/><Service
				id="water-heaters"
				title="Solar Water Heaters"
				description="Eco-friendly water heating solutions powered by the sun. Reduce your energy consumption while enjoying hot water year-round."
				points={[
					'Flat Plate Collectors',
					'Evacuated Tube Systems',
					'Heat Pump Integration',
					'Maintenance Services'
				]}
				bg="bg-buttons-orange/24"
				fg="text-buttons-orange"
				image="images/products/SolarW.jpeg"
				icon={Droplets}
			/>
		</div>
	</div>
</section>
<!-- CTA -->
<div
	class="mx-auto flex w-full flex-col items-center gap-4 bg-footer-background px-8 py-10 text-center text-white"
>
	<h3 class=" text-xl font-semibold md:text-2xl">Not Sure Which Service You Need?</h3>

	<p class="mx-auto mb-6 max-w-md text-sm text-buttons-muted">
		Our experts will assess your requirements and recommend the best solution. Get a free
		consultation today!
	</p>

	<a
		href="https://wa.me/919495744899?text=Hello%2C%20I'd%20like%20to%20chat%20with%20an%20expert%20regarding%20RisingSun%20services."
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
			>Chat with an Expert</Button
		>
	</a>
</div>
