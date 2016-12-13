/* globals flexibility: true;*/

'use strict';
(function() {
var pictures = document.querySelector('.pictures_box');
var anchor = document.querySelector('.header_anchor_link');
var header = document.querySelector('header');

window.addEventListener('scroll', function() {
	clearTimeout(anchorTimeout);
	var anchorTimeout = setTimeout(function() {
		if (anchor.classList.contains('hidden')) {
		var picturesCoords = pictures.getBoundingClientRect();
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

