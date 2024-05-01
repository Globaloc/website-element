$(document).ready(function () {
	$('.-click-1').click(function (event) {
		$('.cube-360').toggleClass('active');
	});
});

$(document).ready(function () {
	$('.-click-2').click(function (event) {
		$('.cube-360').toggleClass('transformation');
	});
});

$(document).ready(function () {
	$('.-click-3').click(function (event) {
		$('.cube-360').toggleClass('frame');
	});
});

$(document).ready(function () {
	$('.-click-3').click(function (event) {
		$('.model-5').toggleClass('crosshair');
	});
});

$(document).ready(function () {
	$('.-click-3').click(function (event) {
		$('.cube-360').toggleClass('cross');
	});
});

$(document).ready(function () {
	$('.-click-4').click(function (event) {
		$('.cube-360').toggleClass('color-fill');
	});
});
$(document).ready(function () {
	$('.block').click(function (event) {
		$('.model-2_text').toggleClass('perspective');
	});
});
$(document).ready(function () {
	$('.information').click(function (event) {
		$('.model-1_text').toggleClass('visible');
	});
});
$(document).ready(function () {
	$('.cube').click(function (event) {
		$('.model-3_text').toggleClass('visible');
	});
});
$(document).ready(function () {
	$('.btn1').click(function (event) {
		$('.model-4_text').toggleClass('visible');
	});
});
$(document).ready(function () {
	$('.square').click(function (event) {
		$('.model-5_text').toggleClass('visible');
	});
});


function rotateCube(e) {

	var cube = document.querySelectorAll(".cross");
	var x = e.clientX - window.innerWidth / 2;
	var y = e.clientY - window.innerHeight / 2;
	var q = 0.15;
	var i;

	x = x * q * 1.25;
	y = -y * q * 1.25;

	for (i = 0; i < cube.length; i++) {
		cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
	}
}
document.addEventListener("mousemove", rotateCube);




