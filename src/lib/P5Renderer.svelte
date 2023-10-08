<script lang="ts">
	import { isVisible } from '$lib/util/isVisible.js';
	import { onMount, afterUpdate } from 'svelte';
	import { generateIframeSrc } from './p5Generator.js';

	let iframe: any;
	let div: HTMLDivElement;
	let inView = false;

	export let title: string;
	export let sketch: string;
	export let width = 400;
	export let height = 400;
	export let seed = Math.random() * 100000;
	export let renderOffScreen = false;

	// Update the iframe src whenever p5code changes
	afterUpdate(() => {
		try {
			iframe.src = generateIframeSrc(sketch, seed);
		} catch (e) {
			// console.error(e);
		}
	});

	// Set the initial iframe src
	onMount(() => {
		try {
			iframe.src = generateIframeSrc(sketch, seed);
		} catch (e) {
			// console.error(e);
		}

		const handleVisible = (event: CustomEvent) => {
			if (renderOffScreen) {
				inView = true;
				return;
			}
			inView = event.detail.inView;
		};

		// Forgive me typescript gods
		(div as any).addEventListener('visible', handleVisible);

		return () => {
			(div as any).removeEventListener('visible', handleVisible);
		};
	});
</script>

<div use:isVisible={{ threshold: 0 }} bind:this={div}>
	{#if inView}
		<iframe
			{title}
			bind:this={iframe}
			style="overflow: hidden; border: none; width: {width}px; height: {height}px"
			sandbox="allow-scripts"
		/>
	{:else}
		<div
			style="width: {width}px; height: {height}px; background-color: #f0f0f0; border-radius: 10px;"
		/>
	{/if}
</div>
