var opts = {
  dragClass: "drag",
  accept: /application\/pdf/,
  readAsDefault: 'ArrayBuffer',
  on: {
    error: function(e, file) {}, 
    loadend: function(e, file) {
      loadPdf(e.target.result);
    },
    abort: function(e, file) {},
  }
};

$(".droparea").fileReaderJS(opts);
