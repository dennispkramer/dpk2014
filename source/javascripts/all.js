//= require_tree .

$(document).ready(function() {

  leadHeight($('#master'), $('#child1'), $('#child2'));

  // When the window is resized the height might
  // change depending on content. So to be safe
  // we rerun the function
  $(window).resize(function() {
      leadHeight($('#master'), $('#child1'), $('#child2'));      
  });

});

function leadHeight(elem1, elem2, elem3) {
  var height = elem1.height() + 120
  var doubleheight = 2 * height
  // sets height of element 2 equal to the height of element 1
  elem2.css('height', height);
  // sets height of element 3 equal to 2X the height of element 1
  elem3.css('min-height', doubleheight);
}


// sets height equal to width of 1/4 of browser
// var galleryWidth = $('#gallery').width();
// $('#gallery').css('height', galleryWidth);

$(document).ready(function() {

  galleryHeight($('#gallery'));

  // When the window is resized the height might
  // change depending on content. So to be safe
  // we rerun the function
  $(window).resize(function() {
      galleryHeight($('#gallery'));      
  });

});

function galleryHeight(elem1) {
  var width = elem1.width() / 4
  // sets height equal to width of 1/4 of browser
  elem1.css('height', width);
}