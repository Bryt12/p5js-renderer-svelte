<script>
	import { onMount, afterUpdate } from 'svelte';
	import { generateIframeSrc } from './p5Generator.js';

	let iframe;

	export let title;
	export let sketch;
	export let width = 400;
	export let height = 400;
	export let seed = Math.random() * 100000;

	// Update the iframe src whenever p5code changes
	afterUpdate(() => {
		iframe.src = generateIframeSrc(sketch, seed);
	});

	// Set the initial iframe src
	onMount(() => {
		iframe.src = generateIframeSrc(sketch, seed);
	});
</script>

<iframe
	{title}
	bind:this={iframe}
	style="overflow: hidden; border: none; width: {width}px; height: {height}px"
/>
