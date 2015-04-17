jQuery(document).ready(function(){

	var time = 500;
	var $width = $(window).width();
	var show_some = function() {
		$('.some-info').removeClass('show_about');
		$('.some-info').toggleClass('show_some');
		if ($width < 453) {
			$('.menu-block ul').removeClass('show_menu');
			$('.tag-cloud').removeClass('show_tags');
		};
	};
	var show_about = function() {
		$('.some-info').removeClass('show_some');
		$('.some-info').toggleClass('show_about');
		if ($width < 453) {
			$('.menu-block ul').removeClass('show_menu');
			$('.tag-cloud').removeClass('show_tags');
		};
	};

	var show_menu = function() {
		$('.some-info').removeClass('show_about');
		$('.some-info').removeClass('show_some');
		$('.tag-cloud').removeClass('show_tags');
		$('.menu-block ul').toggleClass('show_menu');
	};

	var show_tags = function() {
		$('.menu-block ul').removeClass('show_menu');
		$('.some-info').removeClass('show_about');
		$('.some-info').removeClass('show_some');
		$('.tag-cloud').toggleClass('show_tags');
	};

	$(window).resize(function(){
		$width = $(window).width();
	});

	$('span.some').bind('click', function(){
		show_some();
	});

	$('span.about').bind('click', function(){
		show_about();
	});

	$('span.menu_icon').bind('click', function(){
		show_menu();
	});

	$('span.tag_icon').bind('click', function(){
		show_tags();
	});

	$(document).scroll(function() {

		var $scroll = $(document).scrollTop();

		if( $scroll > 87 ) {
			$('body').addClass('fixed');
			if ($width >= 847) {
				$('.logo_menu').show(time);
			};
			if ($width < 847) {
				$('span.about').on('click', function() {
					$('body').scrollTop(0);
				});
				$('span.some').on('click', function() {
					$('body').scrollTop(0);
				});
				$('span.tag_icon').on('click', function() {
					$('body').scrollTop(0);
				});
			};
			if ($width < 453) {
				$('.logo_menu_phone').show(time);
				$('.tags span').on('click', function() {
				$('body').scrollTop();
				});
			};
		}
		else {
			$('body').removeClass('fixed');
			$('.logo_menu').hide(time);
			$('.logo_menu_phone').hide(time);
		}
	});
});