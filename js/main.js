document.addEventListener(`DOMContentLoaded`, function () {
	const nav = document.querySelector(`.navbar`);
	const link = document.querySelectorAll(`.nav-link`);
	const show = document.querySelector(`.navbar-collapse`);

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add(`shadow-bg`);
		} else {
			nav.classList.remove(`shadow-bg`);
		}
	}
	link.forEach((item) =>
		item.addEventListener(`click`, () => show.classList.remove(`show`))
	);

	window.addEventListener(`scroll`, addShadow); //nasłuchujemy na scrolowanie. Jak będzziemy scrolować to odpalimy funkcję addshadow.
});
