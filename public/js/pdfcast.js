
'use strict';

// display PDF file

PDFJS.disableWorker = true;
//
// Fetch the PDF document from the URL using promices
//
function loadPdf(url) {
  PDFJS.getDocument(url).then(function(pdf) {
    // Using promise to fetch the page
    pdf.getPage(1).then(function(page) {
      var scale = 1.5;
      var viewport = page.getViewport(scale);

      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById('pdf_canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      //
      // Render PDF page into canvas context
      //
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });
}


// websocket 


// canvas to image

function copy() {
  $("#copy_img").attr("src", $("#pdf_canvas")[0].toDataURL());
}
