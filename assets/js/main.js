/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		wide: ['1281px', '1680px'],
		normal: ['981px', '1280px'],
		narrow: ['841px', '980px'],
		narrower: ['737px', '840px'],
		mobile: ['481px', '736px'],
		mobilep: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

})(jQuery);

// // UI 함수
// var drawCounter = function () {
// 	document.getElementById('counter').innerHTML = store.counter
// }

// var bindEvents = function () {
// 	document.getElementById('increase').addEventListener('click', function () {
// 		increase()
// 		drawCounter()
// 	})
// 	document.getElementById('decrease').addEventListener('click', function () {
// 		decrease()
// 		drawCounter()
// 	})
// }


// // 카운터 상태 (데이터)
// var store = {
// 	counter: 0
// }

// // 데이터 조작 함수
// var increase = function () {
// 	store.counter++
// }

// var decrease = function () {
// 	store.counter--
// }

// // 앱 실행 함수
// var init = function () {
// 	bindEvents()
// 	drawCounter()
// }

// init()

// --------------------------------------------------------
//------------------------------------------------------------


function incrementValue(id) {
	var value = parseInt(document.getElementById(id).value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById(id).value = value;
}

// Example Html



