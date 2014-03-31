$(function() {
	$.each($('div.progress-bar'),function() {
		$(this).css('width', $(this).attr('valuetransitiongoal')+ '%');
	});
});
