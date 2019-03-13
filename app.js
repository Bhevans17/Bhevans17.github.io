$('#hamburger-icon').on('click', function(){
    $('#hamburger-icon').toggleClass('is-active');
    $('#nav-links-wrapper').fadeToggle();
    $("#body-wrapper").fadeToggle();
});

var i = 0;
var txt = 'Hi, im Brenden 🚀'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();