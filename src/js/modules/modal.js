var modal = {
	init: function () {
		this.open();
		this.close();
	},
	open: function () {
		if(!document.querySelector(".showModal:not(.modalInit)")) return false;
		easyEach(document.querySelectorAll(".showModal:not(.modalInit)"), function (el, i) {
			el.classList.add("modalInit");
			el.addEventListener("click", function (e) {
				e.preventDefault();
				var modalAttr = this.getAttribute("data-modal");
				pageScroll.disable();
				document.querySelector("body").classList.add("modalOnPage");
				document.querySelector(".modal"+modalAttr).classList.add("active");
				// lazyLoad.init();
				if(document.querySelector(".modal"+modalAttr+ " iframe.lazy")){
					var src = document.querySelector(".modal"+modalAttr+ " iframe.lazy").getAttribute("data-src");
					document.querySelector(".modal"+modalAttr+ " iframe.lazy").setAttribute("src", src);
					// document.querySelector(".modal"+modalAttr+ " iframe.lazy").classList.add("loaded");
				}
			})
		});


	},
	close: function () {
		if(!document.querySelector(".modalOverlay")) return false;

		easyEach(document.querySelectorAll(".modalOverlay, .modalClose"), function (el, i) {
			el.addEventListener("click", function (e) {
				e.preventDefault();
				pageScroll.enable();
				document.querySelector("body").classList.remove("modalOnPage");
				el.closest(".modal").classList.remove("active");
				if(el.closest(".modal").querySelector("iframe.lazy")){
					el.closest(".modal").querySelector("iframe.lazy").setAttribute("src", "");
				}
			})
		});
	}
};


modal.init();

var pageScroll = {
	init: function () {
		this.scrollTop = 0;
		window.pageScroll = this;
	},
	isMobile: function () {
		var checkMobile = window.innerWidth < 1024;
		return checkMobile;
	},
	getScrollBarWidth: function () {
		return window.innerWidth - document.body.clientWidth;
	},
	disable: function () {
		var obj = this,
		scrollWidth = obj.getScrollBarWidth();
		this.scrollTop = window.pageYOffset;

		if (this.disabled) {
			return;
		}

		document.body.style.position = "fixed";
		document.body.style.marginTop = "-" + this.scrollTop + "px";
		document.body.style.width = '100%';
		document.body.style.paddingRight = scrollWidth + "px";
		document.body.style.overflowY = scrollWidth && !obj.isMobile() ? 'hidden' : '';
	},
	enable: function () {
		if (this.disabled) {
			return;
		}

		document.body.style.position = '';
		document.body.style.marginTop = '';
		document.body.style.width = '';
		document.body.style.paddingRight = '';
		document.body.style.overflowY = '';

		window.scroll(0, this.scrollTop);
	}
};