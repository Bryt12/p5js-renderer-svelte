<script>
  import { onMount, afterUpdate } from "svelte";
  import { generateIframeSrc } from './p5Generator';

  let iframe;

  // Update the iframe src whenever p5code changes
  afterUpdate(() => {
    iframe.src = generateIframeSrc();
  });

  // Set the initial iframe src
  onMount(() => {
    iframe.src = generateIframeSrc();
  });
</script>

<iframe bind:this={iframe} style="border: none; width: 100%; height: 100%"></iframe>
