<script>
	import { onMount, onDestroy } from 'svelte';

	let interval;
	let lastCheckTime = performance.now();
	let durationBuffer = [];
	const bufferSize = 20;
	const performanceThreshold = 230;
	const rendererId = Math.random() * 100000;

	export let handlePerformanceIssue;

	onMount(() => {
		interval = setInterval(() => {
			const currentTime = performance.now();
			const duration = currentTime - lastCheckTime;
			lastCheckTime = currentTime;

			durationBuffer.push(duration);
			if (durationBuffer.length > bufferSize) {
				durationBuffer.shift();
			}

			const avgDuration = durationBuffer.reduce((a, b) => a + b) / durationBuffer.length;
			if (avgDuration > performanceThreshold) {
				handlePerformanceIssue();
			}
			console.log(avgDuration);
		}, 200);

		const checkEvent = new CustomEvent('check', {
			detail: {
				rendererId
			}
		});

		window.addEventListener('check', (event) => {
			if (event.detail.rendererId === rendererId) {
				window.dispatchEvent(checkEvent);
			}
		});
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div />
