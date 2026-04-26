<script>
	import { Facebook, Instagram, Linkedin } from '@lucide/svelte';
</script>

<footer class="bg-footer-background text-white">
	<div class="mx-auto max-w-7xl px-6 py-20">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			<div>
				<div class="flex items-center gap-3">
					<img src="/images/logo.webp" alt="RisingSun" class="h-18 w-18" />
					<span class="text-xl font-semibold">RisingSun</span>
				</div>

				<p class="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
					Leading provider of sustainable energy solutions. We help homes and businesses transition
					to clean, renewable power.
				</p>

				<div class="mt-6 space-y-2 text-sm text-white/70">
					<p>Central Junction, Ayarkunnam, Kottayam, Kerala 686564</p>
					<p>+91 94957 44899</p>
				</div>

				<!-- Social icons -->
				<div class="mt-6 flex gap-4">
					<a
						href="https://www.facebook.com/risingsunfancylightshop/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-buttons-default transition hover:scale-110"
						aria-label="Facebook"
					>
						<Facebook class="h-5 w-5" />
					</a>
					<a
						href="https://www.instagram.com/risingsunsolarsystems/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-buttons-default transition hover:scale-110"
						aria-label="Instagram"
					>
						<Instagram class="h-5 w-5" />
					</a>
					<a
						href="https://wa.me/919495744899"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-buttons-default transition hover:scale-110"
						aria-label="WhatsApp"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
							fill="white"
							width="26"
							height="26"
							><path
								d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
							/></svg
						>
					</a>
				</div>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-6 text-sm font-semibold">Services</h4>
				<ul class="space-y-4 text-sm text-white/80">
					<li>
						<a href="/services#solar" class="transition-colors hover:text-white">Solar Panels</a>
					</li>
					<li>
						<a href="/services#security" class="transition-colors hover:text-white"
							>Security Systems</a
						>
					</li>
					<li>
						<a href="/services#electrical" class="transition-colors hover:text-white"
							>Electrical Work</a
						>
					</li>
					<li>
						<a href="/services#gates" class="transition-colors hover:text-white">Gate Automation</a>
					</li>
				</ul>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-6 text-sm font-semibold">Quick Links</h4>
				<ul class="space-y-4 text-sm text-white/80">
					<li><a href="/" class="transition-colors hover:text-white">Home</a></li>
					<li><a href="/about" class="transition-colors hover:text-white">About Us</a></li>
					<li><a href="/services" class="transition-colors hover:text-white">Our Services</a></li>
					<li><a href="/blog" class="transition-colors hover:text-white">Our Blog</a></li>
					<li><a href="/contact" class="transition-colors hover:text-white">Contact</a></li>
				</ul>
			</div>

			<!-- Support -->
			<div>
				<h4 class="mb-6 text-sm font-semibold">Support</h4>
				<ul class="space-y-4 text-sm text-white/80">
					<li><a href="/contact" class="transition-colors hover:text-white">Inquiries</a></li>
					<li>
						<a
							target="_blank"
							href="https://share.google/hH5BNi2qrrAbPaHvb"
							class="transition-colors hover:text-white">Location</a
						>
					</li>
					<li>
						<a href="https://wa.me/919495744899" class="transition-colors hover:text-white"
							>WhatsApp Support</a
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Divider -->
		<div class="my-12 h-px w-full bg-white/20"></div>

		<!-- Bottom bar -->
		<div class="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
			<span>© 2026 Rising Sun Solar Systems. All rights reserved.</span>
			<div class="flex gap-6">
				<p>Sustainable Energy for a Better Tomorrow</p>
			</div>
		</div>
	</div>
</footer>
