<script lang="ts">
	import P5Renderer from '$lib/P5Renderer.svelte';

	let sketch = `
    function setup() {
      createCanvas(window.innerWidth, window.innerHeight);

      randomSeed(seed);
    }

    function draw() {
      background(220);
      fill(random(255), random(255), random(255));
      ellipse(200, 200, 80, 80);
      noLoop();
    }
  `;
</script>

<P5Renderer {sketch} />
