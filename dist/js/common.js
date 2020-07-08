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
				$('.features-glue .bubbles').addClass('active');
			} else {
				// Скролл Вверх
			}
			if ($st == 0) {
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
			$('.universal-glue .images').slick({
				dots: false,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000
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

		$(".tabs").tabs();

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