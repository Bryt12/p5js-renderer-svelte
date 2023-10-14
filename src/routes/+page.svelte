<script lang="ts">
	import P5Renderer from '$lib/P5Renderer.svelte';

	let sketch = `
    function setup() {
      createCanvas(window.innerWidth, window.innerHeight);

      randomSeed(seed);
    }

    function draw() {
      background(220);
      for (var i = 0; i < 10; i++) {
        fill(random(255), random(255), random(255));
        ellipse(random(400), random(400), 80, 80);
      }
      noLoop();
    }
  `;

	let sketch2 = `
    function setup() {
      createCanvas(window.innerWidth, window.innerHeight);

      randomSeed(seed);
    }

    function draw() {
      background(220);
      for (var i = 0; i < 10; i++) {
        fill(random(255), random(255), random(255));
        ellipse(random(400), random(400), 80, 80);
      }
      noLoop();
    }
  `;
</script>

<div class="container">
	<P5Renderer {sketch} title="123" />
	<P5Renderer sketch={sketch2} title="123" renderOffScreen={true} />
</div>

<style>
	.container {
		min-height: 2000px;
	}
</style>
