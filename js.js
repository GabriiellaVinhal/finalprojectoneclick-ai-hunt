const chip = document.querySelector('.chip');
const pipe = document.querySelector('.pipe');



const jump = () => {

chip.classList.add('salto')
setTimeout(() => {

    chip.classList.remove('salto') 

}, 500);

}

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft;
const chipPosition = +window.getComputedStyle(chip).bottom.replace('px', '');

if (pipePosition <= 25 && pipePosition > 0  && chipPosition < 150 ) {

pipe.style.animation= "none";
pipe.style.left = `${pipePosition}px`;

chip.style.animation= "none";
chip.style.bottom = `${pipePosition}px`;

}

}, 10)

document.addEventListener('keydown', jump)
