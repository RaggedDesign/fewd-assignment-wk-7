$(document).ready(function() {
	$('#index-hamburger').on('click', function() {
		$('.landing-header nav').slideToggle();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 768 && !$('.landing-header nav').is(':visible')) {
			$('.landing-header nav').show();
		} else if ($(window).width() < 768 && $('.landing-header nav').is(':visible')) {
			$('.landing-header nav').hide();
		}
	});


	$('#blog-hamburger').on('click', function() {
		$('.main-header nav').slideToggle();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 768 && !$('.main-header nav').is(':visible')) {
			$('.main-header nav').show();
		} else if ($(window).width() < 768 && $('.main-header nav').is(':visible')) {
			$('.main-header nav').hide();
		}
	});
});