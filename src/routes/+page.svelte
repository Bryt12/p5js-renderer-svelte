<script lang="ts">
  import P5Renderer from "$lib/P5Renderer.svelte";

  let sketch = `
    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background(220);
      ellipse(mouseX, mouseY, 80, 80);
    }
  `;

</script>

<P5Renderer sketch={sketch} />