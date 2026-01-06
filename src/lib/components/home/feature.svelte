<script lang="ts">
	export let icon;
	export let title: string;
	export let text: string;
</script>

<div class="flex gap-4">
	<div class="flex h-fit items-center justify-center rounded-full border border-buttons-orange p-2">
		<svelte:component this={icon} class="h-5 w-5 text-buttons-orange " />
	</div>

	<div>
		<h4 class="font-semibold">{title}</h4>
		<p class="text-sm text-muted-foreground">{text}</p>
	</div>
</div>
