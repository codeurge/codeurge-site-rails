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
});
