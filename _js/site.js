$(document).ready(function() {
	// open external links in new window
	$('a[href^="http://"]').attr('target','_blank');
	
	//position resources panel on screen
	$('#resources').show().delay(500).animate({ left : '-48em' }, 250).animate({left:'-51em'},250);
	
	// resources panel
	$('.open').toggle(
		function() {
			$(this).text('-');
			$('#resources').animate({
				left : 0
			}, 250); // end animate
		},
		function() {
			$(this).text('+');
			$('#resources').animate({
				left : '-51em'
			}, 250); // end animate
		}
	);
}); // end ready