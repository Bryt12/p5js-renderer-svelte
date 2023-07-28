<script>
  import { onMount, onDestroy } from 'svelte';
  import p5 from 'p5';

  export let sketch;

  let canvasParent;

  let localP5;

  onMount(() => {
    localP5 = new p5(sketch, canvasParent);
  });

  onDestroy(() => {
    localP5.remove();
  });
</script>

<div bind:this={canvasParent}></div>