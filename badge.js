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
  
  // Set custom title
  el.title = title || 'We stand with Ukraine';
  
  // Set custom URL
  if (url) {
    el.style.cursor = 'pointer'
    el.target = '_blank'
    el.addEventListener('click', function() {
      window.open(url, '_blank')
    })
  }
