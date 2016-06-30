// JavaScript Document
$(document).ready(function() {
    //Set options
	var speed = 500; // Fade speed
	var autoswitch = true; // Auto slider options
	var autoswitch_speed = 4000; // Auto switch speed
	
	//Add initial active class
	$('.slide').first().addClass('active');
	
	$('.slide').hide();
	
	$('.active').show();
	
	//Next Handler
	$('#next').on('click', nextSlide);
	
	//Prev Handler
	$('#prev').on('click', prevSlide);
	
	//Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide, autoswitch_speed);
	}
	
	//Switch to next slide function
	function nextSlide(){
		
		$('.active').removeClass('active').addClass('oldActive');
		
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	//Switch to prev slide function
	function prevSlide(){
		
		$('.active').removeClass('active').addClass('oldActive');
		
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
			
});