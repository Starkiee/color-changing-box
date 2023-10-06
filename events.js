
const colorBox = document.getElementById('color-box');
const redButton = document.getElementById('red-button');
const greenButton = document.getElementById('green-button');
const blueButton = document.getElementById('blue-button');

function changeColor(color) {
    colorBox.style.backgroundColor = color;
}

redButton.addEventListener('click', () => changeColor('red'));
greenButton.addEventListener('click', () => changeColor('green'));
blueButton.addEventListener('click', () => changeColor('blue'));
