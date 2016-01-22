//resize header

function init() {
    window.addEventListener("scroll", function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("circle_container");
        if (distanceY > shrinkOn) {
            classie.add(header,"-smaller");
        } else {
            if (classie.has(header,"-smaller")) {
                classie.remove(header,"-smaller");
            }
        }
    });
}
window.onload = init();




//scroll to target

$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    var locate =  $.attr(this, 'href').substr($.attr(this, 'href').indexOf('#')+1);
    $('html, body').stop().animate({
        scrollTop: $('[id="' + locate + '"]').offset().top
    }, 800, "swing");

    $(this).delay(800).queue(function(){ window.location.hash = locate; });
    e.preventDefault();
  });
});    
