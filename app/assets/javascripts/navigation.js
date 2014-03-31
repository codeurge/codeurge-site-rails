/* NAVIGATION FUNCTIONS */
$(function() {
	applyClickEvent();
	function applyClickEvent() {
		$('a[href*=#]').click(function(e)
					{
						e.preventDefault();
						if( $( $.attr(this, 'href') ).length > 0 ) {
							$('html, body').animate({
								scrollTop: $( $.attr(this, 'href') ).offset().top
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
});
