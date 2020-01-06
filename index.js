const duration = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const circle = document.querySelector('circle');

let perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let dur;
let originalTime;
const timer = new Timer(duration, startBtn, pauseBtn, {
	onStart (totalDuration) {
		originalTime = duration.value;
		dur = totalDuration;
	},
	onTick (timeRemaining) {
		const perm = perimeter * timeRemaining / dur - perimeter;
		if (duration.value < originalTime / 4) {
			circle.setAttribute('stroke', 'red');
		}
		circle.setAttribute('stroke-dashoffset', perm);
	},
	onComplete () {
		console.log('timer is completed');
	}
});
