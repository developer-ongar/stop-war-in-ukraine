var SWU__currentScript = document.currentScript || {};
var SWU__DOMReady = function(callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};
SWU__DOMReady(function() {
  const el = document.createElement('div');
  
  // Options
  const url = SWU__currentScript.getAttribute('url');
  const title = SWU__currentScript.getAttribute('title');
  const position = SWU__currentScript.getAttribute('position');
