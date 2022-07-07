if(document.querySelector(".accordionToggleBtn")) {
	accordion(document.querySelectorAll(".accordionToggleBtn"));
}

if(document.querySelector(".accordionTitleToggle")) {
	accordion(document.querySelectorAll(".accordionTitleToggle"));
}

function accordion(elements) {
	easyEach(elements, function (el, i) {
		el.addEventListener('click', function (event) {
			event.preventDefault();
			el.closest("li").classList.toggle("active");
			return false;
		});
	});
}