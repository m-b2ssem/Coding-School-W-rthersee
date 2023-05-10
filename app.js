// JavaScript code for popup

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

window.addEventListener('load', function() {
  var headers = document.querySelectorAll('h1, h2');
  
  headers.forEach(function(header) {
    
    if (header.offsetTop < window.pageYOffset + window.innerHeight) {
     
      setTimeout(function() {
        header.style.opacity = 1;
        header.style.left = '0';
      }, 300);
    }
  });
  

  headers.forEach(function(header) {
    header.style.opacity = 0;
    header.style.position = 'relative';
    header.style.left = '-100px';
  });
});