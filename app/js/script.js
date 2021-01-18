const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');

header.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElements.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} else {
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElements.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});
