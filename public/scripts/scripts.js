var main = function() {
	$('article').hide();
	$('.second').hide();
//	$('.first').show();
	$('.first').click(function() {
		$(this).hide();
		$('.second').fadeIn(500);
		$('article').fadeIn(500);
	});
	$('.second').click(function() {
		$(this).slideUp(500);
		$('.walledgarden').animate({opacity: 1}, 500);
	});
}

$(document).ready(main)