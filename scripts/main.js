document.getElementById('nav-btn').addEventListener('click', function () {
	document.getElementById('main-section').classList.add('blur');
	document.getElementById('primary-nav').classList.add('overlay-active');
});

document.getElementById('nav-close-btn').addEventListener('click', function () {
	document.getElementById('main-section').classList.remove('blur');
	document.getElementById('primary-nav').classList.remove('overlay-active');
});
