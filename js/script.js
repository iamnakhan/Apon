
				
$('.banner-slider').slick({
  dots: true,
	arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
	autoplay:true,
});
				
$(document).ready(function(){
    $('.venobox').venobox(); 
});

$('.screenshot-slider').slick({
  dots: false,
	arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
	autoplay:true,
});

$('.team-slider').slick({
  dots: false,
	arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
	autoplay:true,
});



$('.text-slider').slick({
  dots: false,
	arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
	autoplay:true,
	 asNavFor: ".feedback-img"
});

$('.feedback-img').slick({
  dots: false,
arrows:false,
   infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
	autoplay:true,
	 asNavFor: ".text-slider",
	centerMode:true,
	centerPadding:"0",
});


