var i = 0;
var txt = 'Create Your Own Blog!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    $('#demo').append(txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 50);

$(function() {
            $('.social').hover(
                function() {
                    $(this).animate({marginTop: '-10px'}, 200);
                }, 
                function() {
                    $(this).animate({marginTop: '0px'}, 200);
                }
            );
        });

$(function() {
        $(".get-started").hover(
            function() {
                $(this).addClass("get-started-transition");
            }, 
            function() {
                $(this).removeClass("get-started-transition");
            }
        );
    });

$(function() {
        $(".default").hover(
            function() {
                $(this).addClass("title2");
            }, 
            function() {
                $(this).removeClass("title2");
            }
        );
    });