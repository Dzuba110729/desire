$(function () {
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close')
	});
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close')
	});

	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open')
	});

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	});

	$('.contact-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 10,
		slidesToScroll: 10,
		responsive: [
			{
			   breakpoint: 1750,
			   settings: {
				   slidesToShow: 8,
				   slidesToScroll: 8
			  }
			},
			{
			   breakpoint: 1520,
			   settings: {
				   slidesToShow: 6,
				   slidesToScroll: 6
			  }
			},
			{
			   breakpoint: 1200,
			   settings: {
				   slidesToShow: 4,
				   slidesToScroll: 4
			  }
			},
			{
				breakpoint: 845,
				settings: {
				   slidesToShow: 3,
				   slidesToScroll: 3
				}
			},
			{
				breakpoint: 560,
				settings: {
				   slidesToShow: 2,
				   slidesToScroll: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
				   slidesToShow: 1,
				   slidesToScroll: 1
				}
			}
		]
	});

	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.png" alt=""></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrownext"><img src="images/arrow-slide-right.svg" alt=""></button>'
	});

	let mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});
})