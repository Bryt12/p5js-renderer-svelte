<script lang="ts">
	import P5Renderer from '$lib/P5Renderer.svelte';

	let sketch = `
    function setup() {
      createCanvas(400, 400);

      randomSeed(seed);
    }

    function draw() {
      background(220);
      fill(random(255), random(255), random(255));
      ellipse(mouseX, mouseY, 80, 80);
      noLoop();
    }
  `;
</script>

<P5Renderer {sketch} />
