var events = {
	init: function () {
		this.nav();
		this.navNew.init();
		this.search();
		this.filter();
		this.rating();
		this.sideTabs();
	},

	search:function(){
		if (document.querySelector(".mainHeaderSearchToggle")) {
			document.querySelector(".mainHeaderSearchToggle").addEventListener("click", function (e) {
				e.preventDefault();
				document.querySelector(".mainHeaderSearch").classList.toggle("active")
				document.body.classList.remove("showNav");
			});
		}
	},
	nav: function () {
		if(document.querySelector(".navMobile")) {
			document.querySelector(".navMobile").addEventListener("click", function (e) {
				e.preventDefault();
				document.body.classList.toggle("showNav");
			});
			document.querySelector(".navClose").addEventListener("click", function (e) {
				e.preventDefault();
				document.body.classList.toggle("showNav");
			});
		}
		if (document.querySelector(".navEl_sub > a")) {
			easyEach(document.querySelectorAll(".navEl_sub > a"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					this.parentNode.classList.toggle("active");
				});
			});
		}
		if (document.querySelector(".mainNavElToggle ")) {
			easyEach(document.querySelectorAll(".mainNavElToggle"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					this.parentNode.classList.toggle("active");
				});
			});
		}
	},

	filter: function () {
		if (document.querySelector(".filterToggle")) {
			document.querySelector(".filterToggle").addEventListener("click", function (e) {
				e.preventDefault();
				document.body.classList.toggle("showFilter");
			});
		}

		if (document.querySelector(".filterClose")) {
			document.querySelector(".filterClose").addEventListener("click", function (e) {
				e.preventDefault();
				document.body.classList.toggle("showFilter");
			});
		}

		if (document.querySelector(".filterBox:not(.fixed) .filterBoxTitle")) {
			easyEach(document.querySelectorAll(".filterBox:not(.fixed) .filterBoxTitle"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					this.parentNode.classList.toggle("active");
				});
			});
		}
	},

	rating: function () {
		if (document.querySelector(".writeReviewMarkList i")) {
			easyEach(document.querySelectorAll(".writeReviewMarkList i"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();
					var curIndex = i;
					easyEach(el.parentNode.querySelectorAll("i"), function (el, i) {
						if (i <= curIndex) {
							el.classList.add("on");
						}
						else {
							el.classList.remove("on");
						}
					});
				});
			});
		}
	},

	sideTabs: function () {
		if (document.querySelector(".sideTabs")) {
			easyEach(document.querySelectorAll(".sideTabsControls span"), function (el, i) {
				el.addEventListener('click', function (event) {
					event.preventDefault();

					document.querySelector(".sideTabsControls span.active").classList.remove("active");
					document.querySelector(".sideTabsPanel.active").classList.remove("active");

					document.querySelectorAll(".sideTabsControls span")[i].classList.add("active");
					document.querySelectorAll(".sideTabsPanel")[i].classList.add("active");
				});
			});
		}
	},
	navNew:  {
		init: function () {
			this.toggle();
			this.elToggle();
			this.sideNav();
		},
		sideNav: function () {
			if (document.querySelector(".sideNavListSubToggle")) {
				easyEach(document.querySelectorAll(".sideNavListSubToggle"), function (el, i) {
					el.addEventListener('click', function (event) {
						event.preventDefault();
						this.closest(".sideNavListSub").classList.toggle("active");
					});
				});
			}
		},
		toggle: function () {
			if (document.querySelector(".mainHeaderNavToggle")) {
				document.querySelector(".mainHeaderNavToggle").addEventListener("click", function (e) {
					e.preventDefault();
					document.body.classList.toggle("showNav");
					document.querySelector(".mainHeaderSearch").classList.remove("active");
				});
			}
			if (document.querySelector(".mainNavOverlay")) {
				document.querySelector(".mainNavOverlay").addEventListener("click", function (e) {
					e.preventDefault();
					document.body.classList.toggle("showNav");
					document.querySelector(".mainHeaderSearch").classList.remove("active");
				});
			}
			if (document.querySelector(".mainNavClose")) {
				document.querySelector(".mainNavClose").addEventListener("click", function (e) {
					e.preventDefault();
					document.body.classList.toggle("showNav");
					document.querySelector(".mainHeaderSearch").classList.remove("active");
				});
			}
		},
		elToggle: function () {
			if (document.querySelector(".mainNavMainElTitle")) {
				easyEach(document.querySelectorAll(".mainNavMainElTitle"), function (el, i) {
					el.addEventListener('click', function (event) {
						event.preventDefault();
						this.parentNode.classList.toggle("open");
					});
				});
			}

			if (document.querySelector(".mainNavMainElToggle")) {
				easyEach(document.querySelectorAll(".mainNavMainElToggle"), function (el, i) {
					el.addEventListener('click', function (event) {
						event.preventDefault();
						this.parentNode.classList.toggle("open");
					});
				});
			}



			if (document.querySelector(".mainNavMainElSubColTitle")) {
				easyEach(document.querySelectorAll(".mainNavMainElSubColTitle"), function (el, i) {
					el.addEventListener('click', function (event) {
						event.preventDefault();
						this.closest(".mainNavMainElSubCol").classList.toggle("open");
					});
				});
			}

			if (document.querySelector(".mainNavMainElSubColToggle")) {
				easyEach(document.querySelectorAll(".mainNavMainElSubColToggle"), function (el, i) {
					el.addEventListener('click', function (event) {
						event.preventDefault();
						this.closest(".mainNavMainElSubCol").classList.toggle("open");
					});
				});
			}

			if (document.querySelector(".mainNavOtherElToggle")) {
				easyEach(document.querySelectorAll(".mainNavOtherElToggle"), function (el, i) {
					el.addEventListener('click', function (event) {
						event.preventDefault();
						this.closest(".mainNavOtherEl ").classList.toggle("open");
					});
				});
			}
		}
	}
};


events.init();
