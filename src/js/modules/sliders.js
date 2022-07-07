var sliders = {
	init: function () {
		this.logos();
		this.team();
		this.blog();
		this.course();
		this.nav();
	},
	nav: function(){

		if (document.querySelector(".mainNavElSubArticleSlider.splide")) {
			easyEach(document.querySelectorAll(".mainNavElSubArticleSlider.splide"), function (el, i) {
				var w = 4;
				if( (el.parentNode).classList.contains("wide")) w = 5;
				new Splide(el, {
					type: 'loop',
					lazyLoad: 'nearby',
					preloadPages: w,
					perPage: w,
					perMove: w,
					pagination: false
				}).mount();
			})

		}
	},
	course: function () {

		if (document.querySelector(".courseSlider.splide")) {
			new Splide('.courseSlider.splide', {
				type: 'loop',
				lazyLoad: 'nearby',
				preloadPages: 6,
				perPage: 6,
				perMove: 6,
				pagination: false,
				breakpoints: {
					960: {
						preloadPages: 4,
						perPage: 4,
						perMove: 4,
					},
					768: {
						preloadPages: 3,
						perPage: 3,
						perMove: 3,
					},
					480: {
						preloadPages: 2,
						perPage: 2,
						perMove: 2,
					}
				}
			}).mount();
		}


	},
	logos: function () {

		if (document.querySelector(".logos.splide")) {
			new Splide('.logos.splide', {
				type: 'loop',
				lazyLoad: 'nearby',
				preloadPages: 5,
				perPage: 5,
				perMove: 5,
				pagination: false,
				breakpoints: {
					960: {
						preloadPages: 4,
						perPage: 4,
						perMove: 4,
					},
					768: {
						preloadPages: 3,
						perPage: 3,
						perMove: 3,
					},
				}
			}).mount();
		}


	},
	team: function () {
		if (document.querySelector(".team.splide")) {
			new Splide('.team.splide', {
				type: 'loop',
				lazyLoad: 'nearby',
				preloadPages: 1,
				pagination: false
			}).mount();
		}

	},
	blog: function () {
		if (document.querySelector(".blog.splide")) {
			new Splide('.blog.splide', {
				type: 'loop',
				lazyLoad: 'nearby',
				preloadPages: 1,
				pagination: false
			}).mount();
		}

	}
};


sliders.init();