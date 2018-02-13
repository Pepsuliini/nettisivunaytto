$(document).ready(function(){
  $(".navlink").on('click', function(event) {
    if (this.hash !== "")
    {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      }, 900, function(){

        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function()
  {
    $(".slideanim").each(function()
    {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

window.onload = function()
{
 setTimeout (function ()
 {
  scrollTo(0,0);
 });
}

$(function()
{
  $(".navlink").click(function()
  {
    location.replace(this.href);
    return false;
  });
});

// Owl Carousel

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    //margin: 15,
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: false,
    responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },

      700:{
          items:2
      },

      800:{
          items:3
      },

       1080:{
          items:4
       },
       /*1080:{
           items:4
       }*/
     }
  })
});

// Modals

$(document).ready(function(){
    $(".amir").click(function(){
        $("#amir").modal();
    });
    $(".joni").click(function(){
        $("#joni").modal();
    });
    $(".joonas").click(function(){
        $("#joonas").modal();
    });
    $(".akrenius").click(function(){
        $("#akrenius").modal();
    });
    $(".marko").click(function(){
        $("#marko").modal();
    });
    $(".hanna").click(function(){
        $("#hanna").modal();
    });
});


// Navigation

/*$(document).ready(function($){

  $('body').scrollspy({target: ".vertNav", offset: 50});

  var sectionPosition = [];
  $('.section').each(function() {
    sectionPosition.push($(this).offset().top);
  });

  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
  });

  $('.dot').removeClass('active');
       $('.dot:eq('+index+')').addClass('active');


  $('.dot').on('click', function() {
    $('.dot.active').removeClass('active');
    $(this).addClass('active');
  });
});*/

$(document).ready(function($){
          var parPosition = [];
        $('.section').each(function() {
            parPosition.push($(this).offset().top);
        });

		$('.dot').click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1000);
			return false;
		});

        	$('.dot').click(function () {
			$('.dot').removeClass('active');
				$(this).addClass('active');
		});

    $(document).scroll(function(){
      var position = $(document).scrollTop(),
      index;
      for (var i=0; i<parPosition.length; i++) {
        if (position <= parPosition[i]) {
          index = i;
          break;
        }
      }
      $('.dot').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        });

        	$('.dot').click(function () {
			$('.dot').removeClass('active');
				$(this).addClass('active');
		});
	});
