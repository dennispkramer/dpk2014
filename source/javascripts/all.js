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


// Scroll and reveal toTop

jQuery(document).ready(function() {
    var offset = 200;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#toTop').css({ bottom: 0 });
        } else {
            jQuery('#toTop').css({ bottom: -60 });
        }
    });
    
    jQuery('#toTop').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});