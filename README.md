# Svelte p5js Renderer

## Description

THIS IS PROJECT IS STILL IN ALPHA. USE AT YOUR OWN RISK.

This is a Svelte component that allows you to easily render p5js sketches. It utilizes an iframe for embedding the p5js sketch and provides props for controlling the sketch's dimensions and initial seed.

## Features

- Seamless integration with Svelte projects
- Customizable width and height for the sketch
- Seed randomization for p5 sketches
- Simple API to manage sketches
- Doesn't render code off screen

## Installation

To install the component, run the following command:

```
npm install p5js-renderer-svelte

# or

yarn add p5js-renderer-svelte
```

## Usage

First, install the package and import it in your Svelte file:

```
<script>
  import P5Renderer from 'p5js-renderer-svelte';

  ...
</script>
```

You can now use the component in your Svelte file as follows:

```
<P5Renderer sketch={yourSketch} width={400} height={400} seed={someSeed} />
```

Here's what the props mean:

- `title`: The title of the sketch. This will be the title of the iframe.
- `sketch`: A string of the p5 sketch function that you want to render.
- `width`: The width of the sketch canvas. Default is 400.
- `height`: The height of the sketch canvas. Default is 400.

In the sketch when you create the canvas you should use window.innerWidth and window.innerHeight as seen bellow, this will make the sketch always fit to the component.

```
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ...
}
...
```

- `seed`: Seed for the sketch randomization. Default is a random number. The seed is a global `const` so you can use it in your p5 sketch as follows:

```
function setup() {
  ...
  randomSeed(seed);
  noiseSeed(seed);
}
...
```

Example

```
<script>
  import P5Renderer from 'p5js-renderer-svelte';

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

<P5Renderer {mySketch} width={400} height={400} seed={200} />
```

- `renderOffScreen`: If you want to render the sketch off screen, set this to true. Default is false so the sketch
  won't render off screen to prevent CPU.

- `killRunAwaySketches`: Experimental feature. If you want to kill sketches when the thread is running for too long, set this to true. Default is false.

## Contributing

We welcome contributions to this project. Here's how you can contribute:

- Fork the repository
- Create a new feature branch: git checkout -b new-feature
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin new-feature
- Submit a pull request

## License

This project is open-source and available under the MIT License.
