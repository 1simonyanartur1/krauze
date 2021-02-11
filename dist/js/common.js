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

		if ($(window).width() <= 1200) {
			$('.types-clippers .item').removeAttr('data-fancybox');
		} else {
			$('.types-clippers .item').on('mouseover', function () {
				$('.types-clippers .item').find('.item__clipper').css('opacity', '.3');
				$(this).find('.item__clipper').css('opacity', '1');
			});
			$('.types-clippers .items').on('mouseleave', function () {
				$('.types-clippers .item').find('.item__clipper').css('opacity', '1');
				$('.window').hide()
			});
			$('.types-clippers .item').on('mouseover', function () {
				$('.window').hide()
				$(this).find('.window').show();
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



		// $('.blades').slick({
		// 	dots: false,
		// 	arrows: true,
		// 	prevArrow: '<button class="left icon-right-open-mini"></button>',
		// 	nextArrow: '<button class="right icon-right-open-mini"></button>',
		// 	infinite: true,
		// 	speed: 300,
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	// autoplay: true,
		// 	// autoplaySpeed: 5000,
		// 	adaptiveHeight: true
		// });

		$('.new-clippers .slider').slick({
			dots: false,
			arrows: true,
			prevArrow: '<button class="left icon-right-open-mini"></button>',
			nextArrow: '<button class="right icon-right-open-mini"></button>',
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		// if ($(window).width() < 600) {
		// 	$('.types-clippers .item__clipper').each(function () {
		// 		var imgMobile = $(this).data('mobile');
		// 		$(this).attr('src', imgMobile);
		// 	});
		// } else {}

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
		var formats = '';
		var colors = '';
		var quantity = '';

		var imgFormat = 'a5';
		var imgColor = 'black';
		var imgSize = '96';
		var f = 'А5+';
		var c = 'classic';
		var q = '48';
		// Исходная ссылка
		var startLink = 'https://www.erichkrause.com/catalog/Tetradi_i_bloknoty_s_plastikovoy_oblozhkoy_418/filter/model_name-is-folderbook/';

		// Выделяем формат тетради
		$(document).on('click', '.choose-folder .formats li', function () {
			$('.choose-folder .formats li').removeClass('active');
			$(this).addClass('active');

			// У акцента и постеля нету а4, это проверка на это условие
			if ($('.formats li:first-child').hasClass('active')) {
				$('.colors.pastel, .colors.accent').addClass('disabled');

				if ($('.colors.pastel li, .colors.accent li').hasClass('active')) {
					$('.colors.pastel li, .colors.accent li').removeClass('active');
					$('.colors.classic li:first-child').addClass('active');
					// $('.choose-folder__img').attr('src', '../img/choose-folder/classic-black-a4-48.png');
					btn.attr('href', ``);
					formats = 'uniq_props_format-is-a4/';
					colors = 'item_collect_name-is-classic/uniq_props_covercolor-is-черный/';
					changeUrl();

					imgFormat = 'a4';
					imgColor = 'black';
					imgSize = '96';
					f = 'А5+';
					c = 'classic';
					q = '2х48';
					$('.choose-folder__img').attr('src', 'img/choose-folder/' + `${c}-${imgColor}-${imgFormat}-${imgSize}` + '.png');
				} else {}

			} else {
				$('.colors.pastel, .colors.accent').removeClass('disabled');
			}

			formats = $(this).data('format');
			changeUrl();
		});
		// Выделяем активный элемент цвета
		$(document).on('click', '.choose-folder .colors li', function () {
			$('.choose-folder .colors li').removeClass('active');
			$(this).addClass('active');
			colors = $(this).data('color');
			changeUrl();
		});
		// Выделяем активный элемент кол-ва листов
		$(document).on('click', '.choose-folder .quantity li', function () {
			$('.choose-folder .quantity li').removeClass('active');
			$(this).addClass('active');
			quantity = $(this).data('quantity');
			changeUrl();
		});

		function changeUrl() {
			btn.attr('href', `${startLink}${formats}${colors}${quantity}apply/`);
		}

		function changeImg() {
			// проверка отмечен ли формат
			$('.choose-folder .formats li').on('click', function () {
				f = $(this).text();
				if (f == 'А4') {
					imgFormat = 'a4'
				} else if (f == 'А5+') {
					imgFormat = 'a5'
				}
			});
			// проверка отмечен ли цвет
			$('.choose-folder .colors li').on('click', function () {
				imgColor = $(this).attr('class');
				if ($(this).parents('.colors').hasClass('classic')) {
					c = 'classic';
				} else if ($(this).parents('.colors').hasClass('accent')) {
					c = 'accent';
				} else if ($(this).parents('.colors').hasClass('pastel')) {
					c = 'pastel';
				}
			});
			// проверка отмечен ли количество листов
			$('.choose-folder .quantity li').on('click', function () {
				q = $(this).text();
				if (q == '48') {
					imgSize = '48'
				} else if (q == '2х48') {
					imgSize = '96'
				}
			});
			$('.choose-folder-block li').on('click', function () {
				if (imgFormat.length != 0 && imgColor.length != 0 && imgSize.length != 0 && c.length != 0) {
					$('.choose-folder__img').attr('src', 'img/choose-folder/' + `${c}-${imgColor}-${imgFormat}-${imgSize}` + '.png');
				} else {}
			});

		}

		changeImg();

		// Больше одного клика по активному элементу обработать

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