<script lang="ts">
  export let icon;
  export let title: string;
  export let text: string;
  import Card from "$lib/shadcn/ui/card/card.svelte";
</script>

<Card class="p-6 flex flex-col gap-4">
  <div class="flex h-10 w-10 items-center justify-center rounded-md bg-buttons-muted">
    <svelte:component this={icon} class="h-5 w-5 text-text-green" />
  </div>

  <h4 class="font-semibold">{title}</h4>
  <p class="text-sm text-muted-foreground">
    {text}
  </p>
</Card>
