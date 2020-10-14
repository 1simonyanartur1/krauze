(function ($) {
	$(document).ready(function () {

		setTimeout(function () {
			$('.crystal-wrap').addClass('active');
			setTimeout(function () {
				$('.crystal-wrap').removeClass('blink_on')
			}, 3000);
		}, 2000)

		var $scrollPos = 200;
		$(window).scroll(function () {
			var $st = $(this).scrollTop();
			if ($st > $scrollPos) {
				// Скролл Вниз
			} else {
				// Скролл Вверх
			}
			if ($st > 700) {
				$('.features-glue .bubbles').addClass('active');
			}
			$scrollPos = $st;
		});

		if ($(window).width() >= 1200) {
			if ($("#prlx1").length) {
				var scene1 = $('#prlx1').get(0);
				var parallaxInstance1 = new Parallax(scene1);
			} else {
				console.log('#prlx1 not found on this page');
			}
			if ($("#prlx2").length) {
				var scene2 = $('#prlx2').get(0);
				var parallaxInstance2 = new Parallax(scene2);
			} else {
				console.log('#prlx2 not found on this page');
			}
			if ($("#prlx3").length) {
				var scene3 = $('#prlx3').get(0);
				var parallaxInstance3 = new Parallax(scene3);
			} else {
				console.log('#prlx3 not found on this page');
			}
		} else {
			$('.universal-glue .images2').slick({
				dots: false,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 5000
			});
			
			$('.universal-glue .list li:first-child').addClass('active');

			$('.universal-glue .images2').on('init, afterChange', function (event, slick, currentSlide, nextSlide) {
				console.log(currentSlide);
				$('.universal-glue .list li').each(function (e) {
					if ($(this).data('slide') == currentSlide + 1) {
						$('.universal-glue .list li').removeClass('active');
						$(this).addClass('active');
					}
				});
			});

			$('.universal-glue .list li[data-slide]').on('click', function () {
				var slideno = $(this).data('slide');
				$('.universal-glue .images2').slick('slickGoTo', slideno - 1);
			});
		}

		$('.reviews .slider').slick({
			dots: true,
			arrows: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

		$('.blades').slick({
			dots: false,
			arrows: true,
			prevArrow: '<button class="left icon-right-open-mini"></button>',
			nextArrow: '<button class="right icon-right-open-mini"></button>',
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			// autoplaySpeed: 5000,
			adaptiveHeight: true
		});

		$('.new-clippers .slider').slick({
			dots: false,
			arrows: true,
			prevArrow: '<button class="left icon-right-open-mini"></button>',
			nextArrow: '<button class="right icon-right-open-mini"></button>',
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			// autoplaySpeed: 5000
		});

		if($(window).width() < 600) {
			$('.types-clippers .item__clipper').each(function() {
				var imgMobile = $(this).data('mobile');
				$(this).attr('src', imgMobile);
			});
		} else {}

		$(".tabs").tabs();

		// $('.types-clippers .item__clipper').on('mouseover', function () {
		// 	$('.types-clippers .item__clipper').css({
		// 		'opacity': '.5'
		// 	})
		// 	$(this).css({
		// 		'opacity': '1'
		// 	});
		// });


		var btn = $('.choose-folder .btns .btn1');
		var formats = $('.choose-folder .formats li.active');
		var colors = $('.choose-folder .colors li.active');
		var quantity = $('.choose-folder .quantity li.active');

		// console.log(formats.html());

		if (formats.hasClass('active')) {
			btn.attr('href', btn.attr('href') + formats.data('format'));
		} else {}
		if (colors.hasClass('active')) {
			btn.attr('href', btn.attr('href') + colors.data('color'));
		} else {}
		if (quantity.hasClass('active')) {
			btn.attr('href', btn.attr('href') + quantity.data('quantity'));
		} else {}

		btn.attr('href', btn.attr('href') + 'apply/');

		$(document).on('click', '.choose-folder .formats li', function () {
			$('.choose-folder .formats li').removeClass('active');
			$(this).addClass('active');
			formats = $(this);
			btn.attr('href', btn.attr('href').replace(btn.attr('href'), 'https://www.erichkrause.com/catalog/Tetradi_i_bloknoty_s_plastikovoy_oblozhkoy_418/filter/model_name-is-folderbook/' + $(this).data('format') + colors.data('color') + quantity.data('quantity') + 'apply/'));
		});
		$(document).on('click', '.choose-folder .colors li', function () {
			$('.choose-folder .colors li').removeClass('active');
			$(this).addClass('active');
			colors = $(this);
			btn.attr('href', btn.attr('href').replace(btn.attr('href'), 'https://www.erichkrause.com/catalog/Tetradi_i_bloknoty_s_plastikovoy_oblozhkoy_418/filter/model_name-is-folderbook/' + formats.data('format') + $(this).data('color') + quantity.data('quantity') + 'apply/'));

			if($(this).data('color') == 'uniq_props_covercolor-is-красный/') {
				$('.choose-folder__img').attr('src', '../img/folder-colors/img3.jpg');
			} else if($(this).data('color') == 'uniq_props_covercolor-is-зеленый/') {
				$('.choose-folder__img').attr('src', '../img/folder-colors/img2.jpg');
			} else if($(this).data('color') == 'uniq_props_covercolor-is-черный/') {
				$('.choose-folder__img').attr('src', '../img/folder-colors/img1.jpg');
			} else if($(this).data('color') == 'uniq_props_covercolor-is-синий/') {
				$('.choose-folder__img').attr('src', '../img/folder-colors/img4.jpg');
			}
		});
		$(document).on('click', '.choose-folder .quantity li', function () {
			$('.choose-folder .quantity li').removeClass('active');
			$(this).addClass('active');
			quantity = $(this);
			btn.attr('href', btn.attr('href').replace(btn.attr('href'), 'https://www.erichkrause.com/catalog/Tetradi_i_bloknoty_s_plastikovoy_oblozhkoy_418/filter/model_name-is-folderbook/' + formats.data('format') + colors.data('color') + $(this).data('quantity') + 'apply/'));
		});

	});

	setTimeout(function () {
		AOS.init({
			offset: 50,
			delay: 0,
			duration: 1000,
			once: true,
			disable: ''
		});
	}, 500);

})(jQuery);

// $(window).on('load', function(){
// });