const rangeY = document.getElementById('range-y');
const rangeX = document.getElementById('range-x');
const cube = document.getElementById('cube');
const btnRollingTheDice = document.getElementById('btn-rolling');
const btnReset = document.getElementById('btn-reset');
const rangeValueX = document.getElementById('range-value-x');
const rangeValueY = document.getElementById('range-value-y');
const arrayDegY = [
	360, 270, 180, 90, 0
];
const arrayDegX = [
	0, 90, 180, 270, 360
];
const nbRandomY = Math.floor(Math.random() * arrayDegY.length);
const nbRandomX = Math.floor(Math.random() * arrayDegX.length);

let rangeValues = document.getElementsByClassName('range-value');

rangeY.addEventListener('input', function(e) {
	e.preventDefault()
	cube.style.transform = 'rotateY('+rangeY.value+'deg) rotateX('+rangeX.value+'deg)';
	rangeValueY.innerHTML = rangeY.value + '°';
});


rangeX.addEventListener('input', function(e) {
	e.preventDefault()
	cube.style.transform = 'rotateX('+rangeX.value+'deg) rotateY('+rangeY.value+'deg)';
	rangeValueX.innerHTML = rangeX.value + '°';
});

let getRotateRandom = () => {
	btnReset.style.display = 'block';
	btnRollingTheDice.remove();
	rangeY.value = arrayDegY[nbRandomY];
	rangeX.value = arrayDegX[nbRandomX];
	rangeValueY.innerHTML = rangeY.value + '°';
	rangeValueX.innerHTML = rangeX.value + '°';

	return cube.style.transform = 'rotateX('+arrayDegX[nbRandomX]+'deg) rotateY('+arrayDegY[nbRandomY]+'deg)';
}

let reset = () => {
	location.reload();
}

btnReset.style.display = 'none';
btnReset.addEventListener('click', reset);
btnRollingTheDice.addEventListener('click', getRotateRandom);

