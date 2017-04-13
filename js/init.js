// code from:http://materializecss.com/modals.html#!
// additional help from: http://stackoverflow.com/questions/41626343/materialized-modal-not-displaying
// parallax code from: http://materializecss.com/parallax.html
$(document).ready(function() {
  //initializing code goes here!
  $(".dropdown-button").dropdown({ hover: false });
  // this initializes all modals so they can be triggered
  $('.modal').modal();
  // parallax code from: http://materializecss.com/parallax.html
  $('.parallax').parallax();
});
