import confetti from "canvas-confetti";

let end = Date.now() + 15 * 1000;
// let colors = ["#ff0883", "#83ff08", "#ff8308", "#ff8308", "#ff8308", "#08ff83"];
let skew = 1;
skew = Math.max(0.8, skew - 0.001);

function fireConfetti() {
	confetti({
		particleCount: 1,
		startVelocity: 1,
		angle: 270,
		spread: 110,
		origin: {
			x: Math.random(),
			y: Math.random() * skew - 0.2,
		},
		colors: ["#ff0883"],
		ticks: 200,
		gravity: 0.5,
		shapes: ["circle"],
	});
	confetti({
		particleCount: 1,
		startVelocity: 0,
		angle: 270,
		spread: 120,
		origin: {
			x: Math.random() * skew - 0.2,
			y: Math.random(),
		},
		colors: ["#8308ff"],
		gravity: 1,
		shapes: ["square"],
	});
	confetti({
		particleCount: 1,
		startVelocity: 1,
		angle: 270,
		spread: 130,
		origin: {
			x: Math.random(),
			y: Math.random() * skew - 0.2,
		},
		colors: ["#ff8308"],
		ticks: 200,
		gravity: 0.5,
		shapes: ["circle"],
	});
	confetti({
		particleCount: 1,
		startVelocity: 1,
		angle: 270,
		spread: 140,
		origin: {
			x: Math.random(),
			y: Math.random() * skew - 0.2,
		},
		colors: ["#08ff83"],
		ticks: 200,
		gravity: 1,
		shapes: ["square"],
	});
	confetti({
		particleCount: 1,
		startVelocity: 1,
		angle: 270,
		spread: 150,
		origin: {
			x: Math.random() * skew - 0.2,
			y: Math.random(),
		},
		colors: ["#0883ff"],
		ticks: 200,
		gravity: 0.5,
		shapes: ["square"],
	});

	if (Date.now() < end) {
		requestAnimationFrame(fireConfetti);
	}
}
export default fireConfetti;
