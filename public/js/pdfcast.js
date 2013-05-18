
'use strict';

// display PDF file

var target = "pdf_canvas";
var pdfDoc = null;
var curPage = 1;

PDFJS.disableWorker = true;
//
// Fetch the PDF document from the URL using promices
//
function loadPdf(url) {
  PDFJS.getDocument(url).then(function(pdf) {
    pdfDoc = pdf;
    curPage = 1;
    bindPaging();
    renderPdf(curPage, send);
  });
}

function renderPdf(pageNum, completed) {
    $("#page_info").text(pageNum.toString() + " / " + pdfDoc.numPages.toString());
    // Using promise to fetch the page
    pdfDoc.getPage(pageNum).then(function(page) {
      var scale = 1.5;
      var viewport = page.getViewport(scale);

      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById(target);
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
      page.render(renderContext).then(completed);
    });
}

function send() {
  sendImage("page" + curPage, $("#pdf_canvas")[0].toDataURL());
}

function next() {
  if(!pdfDoc || curPage == pdfDoc.numPages) return;
  renderPdf(++curPage, send);
}

function prev() {
  if(!pdfDoc || curPage == 1) return;
  renderPdf(--curPage, send);
} 

function bindPaging() {
  $("#pdf_canvas").on("click", next);
};

function unbindPaging() {

};



// websocket 


// canvas to image

function copy() {
  $("#copy_img").attr("src", $("#pdf_canvas")[0].toDataURL());
  send();
}

