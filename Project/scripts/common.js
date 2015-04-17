jQuery(document).ready(function(){

	var width = $(window).width();
	var time = 500;
	var show_some = function() {
		$('span.about_head').hide(time);
		$('p.quest_info').hide(time);
		$('span.some_head').toggle(time);
		$('p.alert_info').toggle(time);
		if ($(window).width() < 471) {
			$('.menu-block ul li').hide(time);
			$('.tag-cloud').hide(time);
		};
	};
	var show_about = function() {
		$(document).scrollTop();
		$('span.some_head').hide(time);
		$('p.alert_info').hide(time);
		$('span.about_head').toggle(time);
		$('p.quest_info').toggle(time);
		if ($(window).width() < 471) {
			$('.menu-block ul li').hide(time);
			$('.tag-cloud').hide(time);
		};
	};

	var show_menu = function() {
		$('span.some_head').hide(time);
		$('p.alert_info').hide(time);
		$('span.about_head').hide(time);
		$('p.quest_info').hide(time);
		$('.tag-cloud').hide(time);
		$('.menu-block ul li').toggle(time);
	};

	var show_tags = function() {
		$('.menu-block ul li').hide(time);
		$('span.about_head').hide(time);
		$('p.quest_info').hide(time);
		$('span.some_head').hide(time);
		$('p.alert_info').hide(time);
		$('.tag-cloud').toggle(time);
	};

	$('span.some').bind('click', function(){
		show_some();
	});

	$('span.about').bind('click', function(){
		show_about();
	});

	$('span.menu_icon').bind('click', function(){
		show_menu();
	});

	$('.tags span').bind('click', function(){
		show_tags();
	});

	$(document).scroll(function() {

		var scroll = $(window).scrollTop();

		if(scroll > 87 ) {
			$('body').addClass('fixed');
			if ($(window).width() >= 864 ) 
				{
					$('.logo_menu').show(time);
					$('.logo_menu').on('click', function() {
						$('html, body').animate( {scrollTop:0}, 1000);
						return false;
					});
				};
			if ($(window).width() < 863) {
				$('span.about').on('click', function() {
					$('body').scrollTop(0);
				});
				$('span.some').on('click', function() {
					$('body').scrollTop(0);
				});
				
			};
			if ($(window).width() < 471) 
				{
					$('.logo_menu_phone').show(time);
					$('.tags span').on('click', function() {
					$('body').scrollTop(0);
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