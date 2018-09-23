/*(function ($) {
	"use strict";


/*---------------
Top menu stick
-----------------
$(window).on('scroll', function() {
	if($(this).scrollTop()>30) {
		$('#sticky-header').addClass("sticky");
	}
	else {
		$('#sticky-header').removeClass("sticky");
	}
});


/*----------------------------
 TOP Menu Stick-2
------------------------------ 
$(window).on('scroll',function() {
if ($(this).scrollTop() > 40){  
    $('#sticky-header-2').addClass("sticky");
  }
  else{
    $('#sticky-header-2').removeClass("sticky");
  }
}); 

/*-------------------
tooltip
---------------------
$('[data-toggle="tooltip"]').tooltip({
	animated: 'fade',
	container: 'body'
});


/*-------------------
 jquery meanmenu
 -------------------
 jQuery('#mobile-menu-active').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ 
 new WOW().init();
 
 /*----------------------------
 nivoSlider
------------------------------ 
 $("#slider").nivoSlider({
 	effect: 'fold',          //specify sets like :fade, fold, sliceicons
 	slices: 15,              //for slice animations
 	boxCols: 8,				 //for box animation
 	boxRows: 4,              //for box animation  
 	animSpeed: 500,           //slidetransition speed
 	pauseTime: 3000,          //how long each slide will show
 	startSlide: 0,            //set starting slide(0 index)
 	directionNav: true,       //next and previous navigation
 	controlNav: true,         //1,2,3...navigation
 	controlNavThumbs: false,  //use thumbnails for control nav
 	pauseOnHover : true,      //stop animaio while hovering
 	manualAdvance : true,     //force manual transitions
 	prevText: '<i class="fa fa-angle-left"></i>',  //prev directionNav text
 	nextText: '<i class="fa fa-angle-right"></i>',  //next directionNav text
 	randomStart: true,       //start on a random slide
 	beforeChange: function(){},   //triggers before a slide transition
 	afterChange: function(){},     //triggers after a slide transition
 	slideshowEnd: function(){},    //triggers after all slides have been shown
 	lastSlide: function(){},       //triggers when last slide is shown
 	afterLoad: function(){}        //trigger when slider has ended
 });*/

 /*-----------------------------
 showing and hiding search bar and menu bar on clicking
 ----------------------------------*/
$(document).ready(function() {
	$("#show-search").click(function() {
		$(".search-content").fadeToggle();
		$(".close").click(function() {
			$(".search-content").fadeToggle();
		})
	});

	$("#show-cart").click(function() {
		$(".shapping-area").fadeToggle();
	});
});

/////////////////////////////
//owl carousal for slider afeter nav
	 $(function() {
 	$(".slider.owl-carousel").owlCarousel({
 		loop: true,
 		margin: 10,
 		nav: true, 
 		autoplay: true,
 		responsive: {
 			0: {
 				items:1
 			},
 			600: {
 				items: 1
 			}
 		}
 	});
 });


///////////////////////////
//owl carousel for featured products
 $(function() {
 	$(".product-active.owl-carousel").owlCarousel({
 		loop: true,
 		margin: 10,
 		nav: true, 
 		autoplay: true,
 		responsive: {
 			0: {
 				items:1
 			},
 			600: {
 				items: 2
 			},
 			1000: {
 				items: 4
 			}
 		}
 	});
 });



///////////////////////////
//owl carousel for testimonial area
 $(function() {
 	$(".testimonial-active.owl-carousel").owlCarousel({
 		loop: true,
 		margin: 10,
 		nav: true, 
 		autoplay: true,
 		responsive: {
 			0: {
 				items:1
 			}
 		}
 	});
 });


//owl carousel for featured products
 $(function() {
 	$(".blog-active.owl-carousel").owlCarousel({
 		loop: true,
 		margin: 10,
 		nav: true, 
 		autoplay: true,
 		responsive: {
 			0: {
 				items:1
 			},
 			600: {
 				items: 2
 			},
 			1000: {
 				items: 3
 			}
 		}
 	});
 });

// counter 
$('.counter').counterUp({
	delay: 10,
	time: 1000
});

/* google map
function myMap() {
	var mapOptions= {
		center: new google.maps.LatLng(51.5, -0.12),
		zoom: 10,
		mapTypeId: google.maps.mapTypeId.HYBRID
	}
	var googleMap = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
}*/

////////////////////////////////////
//for related products
$(function() {
 	$(".product-active.owl-carousel").owlCarousel({
 		loop: true,
 		margin: 10,
 		nav: true, 
 		autoplay: true,
 		responsive: {
 			0: {
 				items:1
 			},
 			600: {
 				items: 2
 			},
 			1000: {
 				items: 4
 			}
 		}
 	});
 });

 /////////////////////////////////////////////
 // price-slider active 
 $("#slider-range").slider({
 	range:true,
 	min:40,
 	max:600,
 	values: [60,570],
 	slide: function( event, ui ) {
 		$("#amount").val("$" + ui.values[0] + "-$" + ui.values[1] );
 	}
 });
 $("#amount").val("$" + $("#slider-range").slider( "values", 0 ) + "-$" + $("#slider-range").slider("values", 1 ) );

 //////////////////////////////////////////////////
 // scroll up 
 $.scrollUp({
 	scrollText: '<i class="fa fa-angle-up"></i>',
 	easingType: 'linear',
 	scrollSpeed: 900,
 	animation:'fade'
 });
/*});*/