<script lang="ts">
	import { Button } from '$lib/shadcn/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/shadcn/ui/card';
	import {
		Phone,
		Mail,
		MapPin,
		Clock,
		Facebook,
		Instagram,
		Linkedin,
		MessageCircle
	} from '@lucide/svelte';
</script>

<section class="py-20">
	<!-- HEADER -->
	<div class="mx-auto w-full bg-linear-to-l from-buttons-default/16 to-transparent py-16">
		<div class="mx-auto w-full max-w-7xl px-8">
			<div
				class="mb-6 flex w-fit items-center gap-2 rounded-full bg-buttons-muted px-3 py-1 text-sm font-semibold text-text-green"
			>
				Get In Touch
			</div>

			<h2 class="mb-4 text-3xl font-black md:text-5xl">
				Let's Start Your <span class="text-text-green">Project</span>
			</h2>

			<p class="text-sm text-text-green md:text-base">
				Have a question or ready to get started? Reach out to us through any of the channels below.
				We're here to help!
			</p>
		</div>
	</div>

	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-8 lg:grid-cols-2 lg:gap-10">
		<!-- LEFT: CONTACT INFO -->
		<Card class="border-none bg-transparent shadow-none">
			<CardHeader>
				<CardTitle class="text-xl">Contact Information</CardTitle>
			</CardHeader>

			<CardContent class="space-y-4">
				<!-- Item -->
				<div class="flex items-center gap-4 rounded-xl bg-white p-3">
					<div class="w-fit rounded-md bg-buttons-muted p-3">
						<Phone class="h-6 w-6 text-text-green" />
					</div>
					<div>
						<p class="text-sm font-semibold">Phone</p>
						<p class="text-sm text-muted-foreground">+91 23456 78900</p>
					</div>
				</div>

				<div class="flex items-center gap-4 rounded-xl bg-white p-3">
					<div class="w-fit rounded-md bg-buttons-muted p-3">
						<Mail class="h-6 w-6 text-text-green" />
					</div>

					<div>
						<p class="text-sm font-semibold">Email</p>
						<p class="text-sm text-muted-foreground">support@email.com</p>
					</div>
				</div>

				<div class="flex items-center gap-4 rounded-xl bg-white p-3">
					<div class="w-fit rounded-md bg-buttons-muted p-3">
						<MapPin class="h-6 w-6 text-text-green" />
					</div>

					<div>
						<p class="text-sm font-semibold">Address</p>
						<p class="text-sm text-muted-foreground">123 Solar Street, Energy City, EC 12345</p>
					</div>
				</div>

				<div class="flex items-center gap-4 rounded-xl bg-white p-3">
					<div class="w-fit rounded-md bg-buttons-muted p-3">
						<Clock class="h-6 w-6 text-text-green" />
					</div>

					<div>
						<p class="text-sm font-semibold">Business Hours</p>
						<p class="text-sm text-muted-foreground">Mon – Sat: 8:00 AM – 6:00 PM</p>
					</div>
				</div>

				<!-- WhatsApp CTA -->
				<div class="mt-8 rounded-2xl bg-[#25D366]/32 p-5">
					<h4 class="mb-1 font-semibold">Quick Response via WhatsApp</h4>
					<p class="mb-4 text-sm text-muted-foreground">
						Get an instant response from our team. We typically reply within minutes!
					</p>

					<Button
						class="hover:bg-buttons-green border border-buttons-whatsapp bg-buttons-whatsapp text-sm font-semibold "
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
				</div>

				<!-- Socials -->
				<div class="pt-4">
					<p class="mb-3 text-sm font-semibold">Follow Us</p>
					<div class="flex gap-3">
						<a class="w-fit rounded-md bg-buttons-muted p-3 text-text-green" href="#">
							<Facebook class="h-4 w-4" />
						</a>
						<a class="w-fit rounded-md bg-buttons-muted p-3 text-text-green" href="#">
							<Instagram class="h-4 w-4" />
						</a>
						<a class="w-fit rounded-md bg-buttons-muted p-3 text-text-green" href="#">
							<Linkedin class="h-4 w-4" />
						</a>
						<a class="w-fit rounded-md bg-buttons-muted p-3 text-text-green" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 640"
								fill="#224F3E"
								class="h-5 w-5 shrink-0"
								><path
									d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
								/></svg
							>
						</a>
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- RIGHT: LOCATION -->
		<Card class="border-none bg-transparent shadow-none">
			<CardHeader>
				<CardTitle class="text-xl">Our Location</CardTitle>
			</CardHeader>

			<CardContent class="space-y-8">
				<!-- Map -->
				<div class="overflow-hidden rounded-2xl border">
					<iframe
						title="map"
						class="h-90 w-full"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps?q=Ernakulam&output=embed"
					>
					</iframe>
				</div>

				<!-- Showroom -->
				<div class="rounded-xl bg-buttons-muted p-4">
					<h4 class="mb-1 font-semibold">Visit Our Showroom</h4>
					<p class="text-sm text-muted-foreground">
						Come see our products in person! Our showroom features working displays of solar
						systems, security equipment, and automation solutions. No appointment necessary during
						business hours.
					</p>
				</div>
			</CardContent>
		</Card>
	</div>
</section>
