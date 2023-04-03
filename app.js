// JavaScript code for popup

function popupImage(src) {
  var popup = window.open("", "Popup", "width=800,height=600");
  popup.document.write("<img src='" + src + "' style='width:100%;' />");
}



$(document).ready(function() {
    $(window).ready(function() {
      $("h1,h2").each(function() {
        // Check if the header is visible in the viewport
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
          // Animate the header to fade in and slide in from the left
          $(this).delay(300).animate({
            opacity: 1,
            left: '0'
          }, 1000);
        }
      });
    });
  
    // Set the initial position of the headers to the left of the viewport
    $('h1,h2').css({
      'opacity': 0,
      'position': 'relative',
      'left': '-100px'
    });
  });

