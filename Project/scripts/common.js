jQuery(document).ready(function(){
	var width = $(document).width();
	var time = 500;
	if( width < 863) {
		$('aside h3').on('click',function(){
			
			$('aside p').hide();
			$('aside h3 span').hide();
			$(this).find('span').toggle(time);
			$(this).next().toggle(time);
		});
	}
	if (width < 471) {
		$('.tags span').on('click', function(){
			$('.tag-cloud').toggle(time);
		});
		$('menu span.fa').on('click', function(){
			$('.menu-block ul li').toggle(time);
		});
	};

	$(document).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll>87 ) {
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