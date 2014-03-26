/* NAVIGATION FUNCTIONS */
$(function() {
function applyClickEvent()
{
		$('a[href*=#]').click(function(e)
					{
						e.preventDefault();
						if( $( $.attr(this, 'href') ).length > 0 ) {
							$('html, body').animate({
								scrollTop: $( $.attr(this, 'href') ).offset().top - 109
							}, "slow");
						}
						else {
							$('html, body').animate({
								scrollTop: 0
							}, "slow");
						}
						return false;
					});
}

function applyStickyNavigation()
{
		lnStickyNavigation = $('aside#logo').offset().top + 20;
		lnProfileSection = $('section#profile').offset().top + 20;
	
			$(window).on('scroll', function() 
						{  
									stickyNavigation();  
									darkNavigation();
										});  
				
				stickyNavigation();
				darkNavigation();
}

function stickyNavigation()
{         
		if($(window).scrollTop() > lnStickyNavigation) 
				{   
							$('body').addClass('fixed');  
								} 
			else 
					{  
								$('body').removeClass('fixed');   
									}  
}

function darkNavigation()
{
	if($(window).scrollTop() > lnProfileSection)
	{
		$('nav').addClass('dark');
	}
	else
	{
		$('nav').removeClass('dark');
	}
}

		applyClickEvent();
		applyStickyNavigation();

		});
