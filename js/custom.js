jQuery(document).ready(function($){
	
	"use strict";
	
	/*==========================*/	
	/******** Preloader ******/	
	/*==========================*/
	$('.preloader').delay(350).fadeOut('slow');

	/*==========================*/	
	/***** Smooth Scrolling *****/	
	/*==========================*/
	// Add smooth scrolling to all links in navbar + Section Links and the Slider
	$(".navbar a.internal, section a.internal, .amber-slider a.internal, .right-column a.internal").on('click', function(event) {
		// Prevent default anchor click behavior
		event.preventDefault();
	
		// Store hash
		var hash = this.hash;
	
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (1500) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1500, function(){
		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	});

	/*==========================*/	
	/********* Waypoints ********/	
	/*==========================*/
	var scrolling = false;
	function onScrollInit( items, trigger ) {
		items.each( function() {
		var osElement = $(this),
		osAnimationClass = osElement.attr('data-os-animation'),
		osAnimationDuration = osElement.attr('data-os-animation-duration');
	
		osElement.css({
			'-webkit-animation-duration':  osAnimationDuration,
			'-moz-animation-duration':     osAnimationDuration,
			'animation-duration':          osAnimationDuration
		});
	
		var osTrigger = ( trigger ) ? trigger : osElement;
			
		osTrigger.waypoint(function() {
			osElement.addClass('animated').addClass(osAnimationClass);
		},{
			triggerOnce: true,
			offset: '95%'
			});
		});
	}
	
	$(window).on('scroll', function(){
		if(!scrolling){
			onScrollInit( $('.os-animation') );
			scrolling = true;
		}
	});
	
	onScrollInit( $('.os-animation') );
	onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	
	/*==========================*/	
	/********* Main Slider ******/	
	/*==========================*/
	$('.amber-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 1,
		adaptiveHeight: false,
		fade:false,
	});
	
	/*==========================*/	
	/***** About Us Slider ******/	
	/*==========================*/
	$('.about-us-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 1,
		adaptiveHeight: false,
		fade:false,
	});
	
	/*==========================*/	
	/***** Our Experts Slider ***/	
	/*==========================*/
	$('.experts_content').slick({
		dots:false,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 4,
		adaptiveHeight: false,
		fade:false,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true
			}
		},
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},
		{
			breakpoint: 650,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	/*==========================*/	
	/**** Testimonial Manager ***/	
	/*==========================*/
	$('.testimonial_manager_text').slick({
		dots: false,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 2,
		adaptiveHeight: false,
		fade:false,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true
			}
		},
		{
			breakpoint: 750,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
	  ]
	});
	
	/*=================================================================*/	
	/********** Fix Placeholder Issue in IE9 and other browsers ********/	
	/*=================================================================*/
	$('input, textarea').placeholder();

	/*==========================*/	
	/******** Back To Top *******/	
	/*==========================*/
	var offset = 220;
	var duration = 1500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
					
	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
	
	
});	
	