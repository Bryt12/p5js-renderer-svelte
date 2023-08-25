let blobUrl;

const generateIframeSrc = (sketch) => {
	const html = `
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
      <style>
        /* CSS Reset */
        body {
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      <script>
        ${sketch}
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
