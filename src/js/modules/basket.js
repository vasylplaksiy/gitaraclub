var basket = {
	initialized: false,
	init: function () {
		if (!document.querySelector(".basketList")) return false;
		this.initialized = true;
		this.recount();
		this.productQnt();
	},
	recount: function () {
		if (!document.querySelector(".basketEl")) {
			window.location.reload();
		}

		var sum = 0,
			itemsCounter = 0;

		easyEach(document.querySelectorAll(".basketEl"), function (el, i) {
			var $input = el.querySelector(".qntVal"),
				$totalSpan = el.querySelector(".basketElTotalSum span"),
				price = parseFloat($input.getAttribute("data-price")),
				qnt = parseInt($input.value),
				total = price * qnt;

			itemsCounter += qnt;

			$totalSpan.innerHTML = numberWithSpaces(total);

			sum += total;
		});

		document.querySelector(".basketTotalSum span").innerHTML = numberWithSpaces(sum);
	},
	productQnt: function () {
		var obj = this;

		easyEach(document.querySelectorAll(".basketEl .qnt"), function (el, i) {
			el.querySelector(".qntVal").addEventListener('keypress', function (event) {
				validateNumbersInteger(event);
			});
			el.querySelector(".qntVal").addEventListener('keydown', function (event) {
				keydown(event);
			});
			el.querySelector(".qntVal").addEventListener('change', function (event) {
				if (this.value == "" || this.value == 0) {
					this.value = 1;
				}
				if (this.hasAttribute("data-max")) {
					const elMax = parseInt(this.getAttribute("data-max"));
					if (parseInt(this.value) > elMax) {
						this.value = elMax;
					}
				}
				obj.recount();
			});
			el.querySelector(".qntMinus").addEventListener('click', function (event) {
				const inputEl = this.parentNode.querySelector(".qntVal");
				if (parseInt(inputEl.value) > 1) {
					inputEl.value = parseInt(inputEl.value) - 1;
				}
				triggerEvent(inputEl, "change")
			});
			el.querySelector(".qntPlus").addEventListener('click', function (event) {
				const inputEl = this.parentNode.querySelector(".qntVal");
				inputEl.value = parseInt(inputEl.value) + 1;
				triggerEvent(inputEl, "change")
			});
		});

		// $(".basketListEl .qntBoxInput").onlyNumbers();
		// $(".basketListEl .qntBoxInput").blurOnEnter();
		// $(".basketListEl .qntBoxInput").checkZeroAndMax();
		//$(".basketItem").on("change", ".qntBoxInput", function(){
		/*		$(".basketListEl .qntBoxInput:not(.init)").change(function () {
					obj.recount();
				});*/
		// $(".basketListEl .basketListElQntPlus").plusOneAndCheckMax({changeInput: true});
		// $(".basketListEl .basketListElQntMinus").minusOneAndCheckPositive({changeInput: true});

		easyEach(document.querySelectorAll(".basketElRemoveBtn"), function (el, i) {
			el.addEventListener('click', function (event) {
				el.closest(".basketEl").remove();
				obj.recount();
			});
		});

		/*		$(".basketListElRemoveLink").click(function (e) {
					e.preventDefault();
					$(this).closest(".basketListEl").slideUp(function () {
						$(this).remove();
						obj.recount();
					})
				})*/
	}
};

basket.init();
