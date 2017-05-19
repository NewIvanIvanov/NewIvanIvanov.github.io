
'use strict';
(function() {
var promo = document.querySelector('.users');
var anchor = document.querySelector('.anchor_link');
var header = document.querySelector('header');

window.addEventListener('scroll', function() {
	clearTimeout(anchorTimeout);
	var anchorTimeout = setTimeout(function() {
		if (anchor.classList.contains('hidden')) {
		var picturesCoords = promo.getBoundingClientRect();
		var windowHeight = window.innerHeight;
		if(picturesCoords.top <= windowHeight) {
			anchor.classList.remove('hidden');
		}
	} else {
		var headerCoords = header.getBoundingClientRect();
		if(headerCoords.top === 0) {
			anchor.classList.add('hidden');
		}
	}}, 100);
});
})();

