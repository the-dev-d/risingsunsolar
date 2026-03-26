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
	<meta property="og:url" content="https://risingsunsolar.in/" />
	<meta property="og:image" content="/images/meta-preview.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://risingsunsolar.in/" />
	<meta name="twitter:title" content="Rising Sun Solar Systems" />
	<meta
		name="twitter:description"
		content="Integrated solar, electrical, and security solutions in Kottayam, Kerala. Trusted since 1997."
	/>
	<meta name="twitter:image" content="/images/meta-preview.png" />

	<link rel="icon" href={favicon} />

	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-KQZCHDP2');
	</script>
	<!-- End Google Tag Manager -->
</svelte:head>

<Navbar />
{@render children()}
<Footer />
<!-- Google Tag Manager (noscript) -->
<noscript
	><iframe
		title="Google Tag Manager"
		src="https://www.googletagmanager.com/ns.html?id=GTM-KQZCHDP2"
		height="0"
		width="0"
		style="display:none;visibility:hidden"
	></iframe></noscript
>
<!-- End Google Tag Manager (noscript) -->
