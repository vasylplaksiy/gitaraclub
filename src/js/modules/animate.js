/*document.querySelector(".pageTitle").classList.add("animate");
document.querySelector(".projects").classList.add("animate");
document.querySelector(".features").classList.add("animate");
document.querySelector(".services").classList.add("animate");
document.querySelector(".inNews").classList.add("animate");
document.querySelector(".partners").classList.add("animate");
document.querySelector(".contacts").classList.add("animate");
document.querySelector(".writeUs").classList.add("animate");
document.querySelector(".about").classList.add("animate");
document.querySelector(".aboutText").classList.add("animate");
document.querySelector(".aboutPerson").classList.add("animate");
document.querySelector(".aboutTeam").classList.add("animate");
document.querySelector(".mainFooter").classList.add("animate");*/


/*var animateList = document.querySelectorAll(
	".pageTitle:not(.animate)," +
	".projects:not(.animate)," +
	".features:not(.animate)," +
	".services:not(.animate)," +
	".inNews:not(.animate)," +
	".partners:not(.animate)," +
	".contacts:not(.animate)," +
	".writeUs:not(.animate)," +
	".about:not(.animate)," +
	".aboutText:not(.animate)," +
	".aboutPerson:not(.animate)," +
	".aboutTeam:not(.animate)," +
	".mainFooter:not(.animate)"
);*/

var animate = {
	list: document.querySelectorAll(
		".pageTitle:not(.animate)," +
		".projects:not(.animate)," +
		".features:not(.animate)," +
		".services:not(.animate)," +
		".inNews:not(.animate)," +
		".partners:not(.animate)," +
		".contacts:not(.animate)," +
		".writeUs:not(.animate)," +
		".about:not(.animate)," +
		".aboutText:not(.animate)," +
		".aboutPerson:not(.animate)," +
		".aboutTeam:not(.animate)," +
		".mainFooter:not(.animate)"
	),

	minH: 170,

	check: function () {
		var obj = this;
		var scrollTop = document.documentElement.scrollTop,
			docHeight = document.documentElement.offsetHeight,
			windowHeight = window.innerHeight;

		easyEach(obj.list, function (el, i) {
			var box = el,
				boxH = parseInt(box.offsetHeight),
				boxOT = box.offsetTop,
				boxStart = boxOT,
				boxFinish = boxStart + boxH,
				minH = obj.minH;

			if (el.classList.contains("writeUs") || el.classList.contains("mainFooter")) {
				minH = 0;
			}

			boxStart += minH;
			boxFinish -= minH;

			if (boxStart <= scrollTop + windowHeight && boxFinish > scrollTop) {
				box.classList.add("animate");
			}
		});
	}
}

animate.check();
