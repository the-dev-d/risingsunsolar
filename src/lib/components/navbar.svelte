<script>
	import Button from '$lib/shadcn/ui/button/button.svelte';
	import { Menu, X } from '@lucide/svelte';

	let open = false;

	const toggle = () => (open = !open);
</script>

<nav
	class=" fixed top-0 z-50 mx-auto w-full bg-white/40 shadow-xs backdrop-blur-md"
	data-aos="fade-down"
>
	<div class="mx-auto flex h-fit max-w-7xl items-center justify-between px-6 py-2">
		<a class="flex h-16 items-center" href="/">
			<img src="/images/logo.webp" alt="logo" class="h-full w-auto object-contain" />
		</a>

		<div class="hidden items-center gap-8 md:flex">
			<a href="/services" class=" text-sm text-text-green transition-colors"> Services </a>
			<a href="/about" class=" text-sm text-text-green transition-colors"> About </a>
			<a href="/blog" class=" text-sm text-text-green transition-colors"> Blog </a>
			<a href="/contact" class=" text-sm text-text-green transition-colors"> Contact </a>
		</div>

		<div class="flex items-center">
			<a
				href="https://wa.me/919495744899?text=Hello%2C%20I'd%20like%20to%20get%20a%20quote%20for%20RisingSun%20services."
				target="_blank"
				rel="noopener noreferrer"
				class="hidden md:flex"
			>
				<Button class="hover:bg-buttons-green bg-buttons-default hover:scale-105">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						fill="white"
						width="20"
						height="20"
						><path
							d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
						/></svg
					>Get Quotes</Button
				>
			</a>
			<button
				class="rounded-lg p-2 hover:bg-black/5 md:hidden"
				on:click={toggle}
				aria-label="Toggle menu"
			>
				{#if open}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Overlay -->
{#if open}
	<div class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" on:click={() => (open = false)}>
	</div>
{/if}

<!-- Slide Menu -->
<aside
	id="sidemenu"
	class="fixed top-0 left-0 z-50 h-full w-full
  transform bg-white transition-all duration-300 ease-in-out
  {open ? 'translate-y-0' : '-translate-y-full'}"
>
	<div class="flex h-full flex-col px-6 py-3">
		<div class="mb-8 flex items-center justify-between">
			<a class="flex h-16 items-center" href="/">
				<img src="/images/logo.webp" alt="logo" class="h-full w-auto object-contain" />
			</a>
			<button on:click={() => (open = false)}>
				<X class="h-6 w-6" />
			</button>
		</div>

		<nav class="flex flex-col gap-6 text-lg text-text-green">
			<a href="/services" on:click={() => (open = false)}>Services</a>
			<!-- <a href="#features" on:click={() => (open = false)}>Features</a> -->
			<a href="/about" on:click={() => (open = false)}>About</a>
			<a href="/blog" on:click={() => (open = false)}>Blog</a>
			<a href="/contact" on:click={() => (open = false)}>Contact</a>
		</nav>

		<div class="mt-auto pt-6">
			<a
				href="https://wa.me/919495744899?text=Hello%2C%20I'd%20like%20to%20get%20a%20quote%20for%20RisingSun%20services."
				target="_blank"
				rel="noopener noreferrer"
				class="w-full"
			>
				<Button class="hover:bg-buttons-green w-full bg-buttons-default">Get Quotes</Button>
			</a>
		</div>
	</div>
</aside>

<style>
	#sidemenu {
		background-image: url('/images/texture.avif');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
