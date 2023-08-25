<script>
	import { onMount, afterUpdate } from 'svelte';
	import { generateIframeSrc } from './p5Generator.js';

	let iframe;

	export let sketch;
	export let width = 400;
	export let height = 400;

	// Update the iframe src whenever p5code changes
	afterUpdate(() => {
		iframe.src = generateIframeSrc(sketch, width, height);
	});

	// Set the initial iframe src
	onMount(() => {
		iframe.src = generateIframeSrc(sketch, width, height);
	});
</script>

<iframe
	bind:this={iframe}
	style="overflow: hidden; border: none; width: {width}px; height: {height}px"
/>
