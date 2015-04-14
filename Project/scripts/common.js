jQuery(document).ready(function(){

	var width = $(window).width();
	var time = 500;
	var show_alert = function() {
		$('span.some').on('click',function(){
			$('span.about_head').hide(time);
			$('p.quest_info').hide(time);
			$('span.some_head').toggle(time);
			$('p.alert_info').toggle(time);
		});
	};
	var show_about = function() {
		$('span.about').on('click',function(){
			$(document).scrollTop();
			$('span.some_head').hide(time);
			$('p.alert_info').hide(time);
			$('span.about_head').toggle(time);
			$('p.quest_info').toggle(time);
		});
	};

	var show_menu = function() {
			$('menu span.menu_icon').on('click', function(){
			$('.menu-block ul li').toggle(time);
			$('h3.quest span').hide(time);
			$('aside p.quest_info').hide(time);
			$('h3.alert span').hide(time);
			$('aside p.alert_info').hide(time);
			$('.tag-cloud').hide(time);
		});
	};

	var show_tags = function() {
		$('.tags span').on('click', function(){
			$('.tag-cloud').toggle(time);
			$('.menu-block ul li').hide(time);
			$('span.about_head').hide(time);
			$('p.quest_info').hide(time);
			$('span.some_head').hide(time);
			$('p.alert_info').hide(time);
		});
	}

	if( width < 863 && width >= 471) {
		show_about();
		show_alert();
	};

	if (width < 471) {
		$('span.some').on('click',function(){
			$('.menu-block ul li').hide(time);
			$('h3.quest span').hide(time);
			$('aside p.quest_info').hide(time);
			$('.tag-cloud').hide(time);
			$('aside p.alert_info').toggle(time);
			$('h3.alert span').toggle(time);
		});
		show_menu();
		show_tags();
		$('span.about').on('click',function(){
			$('.menu-block ul li').hide(time);
			$('.tag-cloud').hide(time);
			$('h3.alert span').hide(time);
			$('aside p.alert_info').hide(time);
			$('aside p.quest_info').toggle(time);
			$('h3.quest span').toggle(time);
		});
	};

	$(document).scroll(function() {

		var scroll = $(window).scrollTop();
		var width = $(document).width();

		if(scroll > 87 ) {
			$('body').addClass('fixed');
			if (width > 863) 
				{
					$('.logo_menu').show(time);
				};
			if (width < 863) {
				$('span.about').on('click', function() {
					$('body').scrollTop(0);
				});
				$('span.some').on('click', function() {
					$('body').scrollTop(0);
				});
				$('.tags span').on('click', function() {
					$('body').scrollTop(0);
				});
			};
			if (width < 471) 
				{
					$('.logo_menu_phone').show(time);
				};
		}
		else {
			$('body').removeClass('fixed');
			$('.logo_menu').hide(time);
			$('.logo_menu_phone').hide(time);
		}
	});
});