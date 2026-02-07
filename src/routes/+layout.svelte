<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Rising Sun Solar Systems | Solar, Electrical & Security Solutions Kottayam</title>
	<meta
		name="description"
		content="Trusted solar energy, electrical, and security solutions in Kottayam, Kerala. Established in 1997, MNRE Approved agency providing integrated power and security systems."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://risingsunsolar.in/" />
	<meta property="og:title" content="Rising Sun Solar Systems | Solar, Electrical & Security" />
	<meta
		property="og:description"
		content="Leading provider of solar power, automation, and electrical solutions in Kerala since 1997. MNRE Approved and PWD Licensed."
	/>
	<meta property="og:image" content="/images/logo.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://risingsunsolar.in/" />
	<meta property="twitter:title" content="Rising Sun Solar Systems" />
	<meta
		property="twitter:description"
		content="Integrated solar, electrical, and security solutions in Kottayam, Kerala. Trusted since 1997."
	/>
	<meta property="twitter:image" content="/images/logo.png" />

	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
{@render children()}
<Footer />
