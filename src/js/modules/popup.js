var popup = {
	init: function () {
		this.click();
		this.dots();
		this.controls();
		this.close();
		this.swipe();
	},
	swipe: function () {

		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchmove', handleTouchMove, false);

		var xDown = null;
		var yDown = null;

		function getTouches(evt) {
			return evt.touches ||             // browser API
				evt.originalEvent.touches; // jQuery
		}

		function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
		};

		function handleTouchMove(evt) {
			if (!xDown || !yDown) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
				if (xDiff > 0) {
					/* left swipe */
					if (document.querySelector("body").classList.contains("popupActive")) {
						// alert("left swipe")
						document.querySelector(".servicesPopupNext").click();
					}
				} else {
					/* right swipe */
					if (document.querySelector("body").classList.contains("popupActive")) {
						// alert("left swipe")
						document.querySelector(".servicesPopupPrev").click();
					}
				}
			} else {
				if (yDiff > 0) {
					/* up swipe */
				} else {
					/* down swipe */
				}
			}
			/* reset values */
			xDown = null;
			yDown = null;
		};
	},
	click: function () {
		var obj = this;
		easyEach(document.querySelectorAll(".servicesEl"), function (el, i) {
			el.addEventListener("click", function (e) {
				e.preventDefault();
				var attrId = this.getAttribute("data-id");
				obj.open(attrId);
			})
		});
		easyEach(document.querySelectorAll(".servicesPopupElClose"), function (el, i) {
			el.addEventListener("click", function (e) {
				e.preventDefault();
				document.querySelector("body").classList.remove("popupActive");
				document.querySelector(".servicesPopup").classList.remove("active");
			})
		});
	},
	dots: function () {
		var obj = this;
		easyEach(document.querySelectorAll(".servicesPopupDots i"), function (el, i) {
			el.addEventListener("click", function (e) {
				e.preventDefault();
				var attrId = this.getAttribute("data-id");
				obj.changeEl(attrId);
			})
		});
	},
	controls: function () {
		var obj = this;

		document.querySelector(".servicesPopupPrev").addEventListener("click", function (e) {
			var current = document.querySelector('.servicesPopupDots i.active'),
				next = current.previousElementSibling;
			console.log(next)
			if (!next) {
				var countLi = document.querySelectorAll('.servicesPopupDots i').length,
					next = document.querySelectorAll('.servicesPopupDots i')[countLi - 1]
			}

			var attrId = next.getAttribute("data-id");
			obj.changeEl(attrId);
		});

		document.querySelector(".servicesPopupNext").addEventListener("click", function (e) {
			e.preventDefault();
			var current = document.querySelector('.servicesPopupDots i.active'),
				next = current.nextElementSibling;
			console.log(next)

			if (!next) {
				next = document.querySelector('.servicesPopupDots i')
			}

			var attrId = next.getAttribute("data-id");
			obj.changeEl(attrId);
		});

	},
	changeEl: function (id) {
		document.querySelector(".servicesPopupEl.active").classList.remove("active");
		document.querySelector(".servicesPopupDots .active").classList.remove("active");
		document.querySelector(".servicesPopupEl[data-id='" + id + "']").classList.add("active");
		document.querySelector(".servicesPopupDots i[data-id='" + id + "']").classList.add("active");
		var img;

		if (document.querySelector(".servicesPopupEl.active .servicesPopupElImg img")) {
			img = document.querySelector(".servicesPopupEl.active .servicesPopupElImg img");

			if (!img.classList.contains("loaded")) {
				var src = img.getAttribute("data-src");
				img.setAttribute("src", src);
				img.classList.add("loaded");
			}
		}

	},
	open: function (id) {
		var obj = this;
		document.querySelector("body").classList.add("popupActive");
		document.querySelector(".servicesPopup").classList.add("active");
		obj.changeEl(id);
	},
	close: function () {
		document.querySelector(".servicesPopupClose").addEventListener("click", function (e) {
			document.querySelector("body").classList.remove("popupActive");
			document.querySelector(".servicesPopup").classList.remove("active");
		});
	}
};


popup.init();