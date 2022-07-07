var scrollTimeout;
window.addEventListener("scroll", windowScrollEvent);

function windowScrollEvent() {
	if (scrollTimeout) {
		document.querySelector("body").classList.add('disable-hover');
		clearTimeout(scrollTimeout);
		scrollTimeout = null;
	}

	scrollTimeout = setTimeout(function () {

		var scrollTop = document.documentElement.scrollTop;

		if (scrollTop > 200) {
			document.querySelector("body").classList.add("showFixedHeader");
		}
		else {
			document.querySelector("body").classList.remove("showFixedHeader");
		}

		animate.check();

		/*if (document.querySelector(".mainHeader")) {
			if(document.querySelector(".catalogPage")){
				// nothing
			}
			else if (scrollTop > 95) {
				document.querySelector("body").classList.add("showFixedHeader");
			} else {
				document.querySelector("body").classList.remove("showFixedHeader");
			}
		}
		else if (document.querySelector(".card")) {
			document.querySelector(".searchPopupToggle").classList.add("active");
		}*/

		/*
				if (typeof catalog != "undefined" && catalog.initialized && catalog.scrollPagination) {
					catalog.checkForVisible();
				}
				if (typeof catalog != "undefined" && catalog.initialized && catalog.scrollURL) {
					catalog.scroll();
				}

				if (typeof goTop != "undefined") {
					goTop.check();
				}*/

		document.querySelector("body").classList.remove('disable-hover');

	}, 50);

}

windowScrollEvent();

easyEach(document.querySelectorAll(".mainHeaderNav ul a"), function (el, i) {
	el.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(".mainHeaderNav").classList.remove("active");

		var hrefAttr = this.getAttribute("href");
		var goToEl = document.getElementById("" + hrefAttr.substr(1));
		var elTop = goToEl.offsetTop;

		if (hrefAttr.substr(1) == "contacts") {
			elTop -= 50;
		}

		window.scrollTo({
			top: elTop,
			behavior: 'smooth'
		});

		/*		var hrefAttr = this.getAttribute("href");

				var goToEl = document.getElementById(""+hrefAttr);
				var tOLeft = goToEl.offsetTop;

				window.scrollTo(tOLeft);*/

		/*		document.querySelector(".scrollUp").addEventListener('click', function () {
					window.scrollTo({
						top: 0,
						behavior: 'smooth'
					});
				});*/
	})
});