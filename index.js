const duration = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let dur;
const timer = new Timer(duration, startBtn, pauseBtn, {
	onStart (totalDuration) {
		dur = totalDuration;
	},
	onTick (timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / dur - perimeter);
	},
	onComplete () {
		console.log('timer is completed');
	}
});
