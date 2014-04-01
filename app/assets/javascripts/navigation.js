/* NAVIGATION FUNCTIONS */

$(function() {
	applyClickEvent();
	applyScrollSpy();
	applyStickyNavigation();
});

$(window).scroll(function() {
	if(($(window).scrollTop()) > 80){
		$('#gototop').css({
			opacity : 1
		});
	} else {
		$('#gototop').css({
			opacity : 0
		});
	}
});

function applyClickEvent() {
	$('a[href*=#]').click(function(e)	{
		e.preventDefault();
		if( $( $.attr(this, 'href') ).length > 0 ) {
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, "slow");
		}	else {
			$('html, body').animate({
				scrollTop: 0
			}, "slow");
		}
		return false;
	});
}

function applyScrollSpy() {
	$('#nav').on('activate.bs.scrollspy', function() {
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

function applyStickyNavigation() {
	lnStickyNavigation = $('#hero').offset().top + 20;	
	$(window).on('scroll', function() {  
		stickyNavigation();  
	});  
	stickyNavigation();
}

function stickyNavigation()
{         
	if($(window).scrollTop() > lnStickyNavigation) {   
		$('#nav').addClass('navbar-fixed-top');  
	} else {  
		$('#nav').removeClass('navbar-fixed-top');   
	}  
}


