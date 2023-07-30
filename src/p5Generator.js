let p5code = `// Default p5.js code
    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background(220);
      ellipse(mouseX, mouseY, 80, 80);
    }`;

let blobUrl;

const generateIframeSrc = () => {
  const html = `
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    </head>
    <body>
      <script>
        ${p5code}
      </script>
    </body>
    </html>
  `;

  if (blobUrl) {
    URL.revokeObjectURL(blobUrl); // Clean up previous Blob URL
  }

  const blob = new Blob([html], { type: 'text/html' });
  blobUrl = URL.createObjectURL(blob);

  return blobUrl;
};

export { generateIframeSrc };
