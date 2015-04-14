jQuery(document).ready(function(){

	var width = $(window).width();
	var time = 500;
	if( width < 863 && width >= 471) {

		$('aside h3.alert').on('click',function(){
			$('h3.quest span').hide(time);
			$('aside p.quest_info').hide(time);
			$('h3.alert span').toggle(time);
			$('aside p.alert_info').toggle(time);
		});

		$('aside h3.quest').on('click',function(){
			$('h3.alert span').hide(time);
			$('aside p.alert_info').hide(time);
			$('h3.quest span').toggle(time);
			$('aside p.quest_info').toggle(time);
		});
	};

	if (width < 471) {
		$('aside h3.alert').on('click',function(){
			$('.menu-block ul li').hide(time);
			$('h3.quest span').hide(time);
			$('aside p.quest_info').hide(time);
			$('.tag-cloud').hide(time);
			$('aside p.alert_info').toggle(time);
			$('h3.alert span').toggle(time);
		});

		$('.tags span').on('click', function(){
			$('.tag-cloud').toggle(time);
			$('.menu-block ul li').hide(time);
			$('h3.quest span').hide(time);
			$('aside p.quest_info').hide(time);
			$('h3.alert span').hide(time);
			$('aside p.alert_info').hide(time);


		});

		$('menu span.menu_icon').on('click', function(){
			$('.menu-block ul li').toggle(time);
			$('h3.quest span').hide(time);
			$('aside p.quest_info').hide(time);
			$('h3.alert span').hide(time);
			$('aside p.alert_info').hide(time);
			$('.tag-cloud').hide(time);
		});

		$('aside h3.quest').on('click',function(){
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