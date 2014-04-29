//= require_tree .

$(document).ready(function() {

  setHeight($('#master'), $('#child1'), $('#child2'));

  // When the window is resized the height might
  // change depending on content. So to be safe
  // we rerun the function
  $(window).on(resize, function() {
      setHeight($('#master'), $('#child1'), $('#child2'));      
  });

});

function setHeight(elem1, elem2, elem3) {
  var height = elem1.height() + 120
  var doubleheight = 2 * height
  // sets height of element 2 equal to the height of element 1
  elem2.css('height', height);
  // sets height of element 3 equal to 2X the height of element 1
  elem3.css('height', doubleheight);
}