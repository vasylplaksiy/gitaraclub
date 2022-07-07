var course = {
	init: function () {
		this.questions();
	},
	questions: function () {
		if (document.querySelector(".courseBoxQuestionsElRd input")) {
			easyEach(document.querySelectorAll(".courseBoxQuestionsElRd input"), function (el, i) {
				el.addEventListener('change', function (event) {
					var elId = parseInt(this.closest(".courseBoxQuestionsEl").getAttribute("data-id"));
					var counterEl = document.querySelectorAll(".courseBoxQuestionsEl").length;
					document.querySelector(".courseBoxQuestionsPosition i[data-id='" + elId + "']").classList.add("ok");
					var counterElActive = document.querySelectorAll(".courseBoxQuestionsPosition .ok").length;
					if(counterEl == counterElActive) {
						document.querySelector(".courseBoxQuestions").classList.add("ready");
					}
				});
			});
		}

		if (document.querySelector(".courseBoxQuestionsNext")) {
			easyEach(document.querySelectorAll(".courseBoxQuestionsNext"), function (el, i) {
				el.addEventListener('click', function (event) {
					var counterEl = document.querySelectorAll(".courseBoxQuestionsEl").length;
					var elId = parseInt(document.querySelector(".courseBoxQuestionsEl.active").getAttribute("data-id"));
					document.querySelector(".courseBoxQuestionsEl.active").classList.remove("active");
					document.querySelector(".courseBoxQuestionsPosition .current").classList.remove("current");
					var nextActive = 1;
					if (elId + 1 <= counterEl) {
						nextActive = elId + 1;
					}
					document.querySelector(".courseBoxQuestionsEl[data-id='" + nextActive + "']").classList.add("active");
					document.querySelector(".courseBoxQuestionsPosition i[data-id='" + nextActive + "']").classList.add("current");
					return false;
				});
			});
		}


		if (document.querySelector(".courseBoxQuestionsPrev")) {
			easyEach(document.querySelectorAll(".courseBoxQuestionsPrev"), function (el, i) {
				el.addEventListener('click', function (event) {
					var counterEl = document.querySelectorAll(".courseBoxQuestionsEl").length;
					var elId = parseInt(document.querySelector(".courseBoxQuestionsEl.active").getAttribute("data-id"));
					document.querySelector(".courseBoxQuestionsEl.active").classList.remove("active");
					document.querySelector(".courseBoxQuestionsPosition .current").classList.remove("current");
					var nextActive = counterEl;
					if (elId >= 2) {
						nextActive = elId - 1;
					}
					document.querySelector(".courseBoxQuestionsEl[data-id='" + nextActive + "']").classList.add("active");
					document.querySelector(".courseBoxQuestionsPosition i[data-id='" + nextActive + "']").classList.add("current");
				});
			});
		}

		if (document.querySelector(".courseBoxQuestionsElSkip")) {
			easyEach(document.querySelectorAll(".courseBoxQuestionsElSkip"), function (el, i) {
				el.addEventListener('click', function (event) {
					document.querySelector(".courseBoxQuestionsNext").click();
				});
			});
		}
	}
};
document.addEventListener('DOMContentLoaded', function(){
	course.init();
});
