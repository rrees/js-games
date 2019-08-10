const canvas = document.getElementById('game');

const ctx = canvas.getContext('2d');

const game = {
	tileSize: 10,
	gridSize: 500,
	fps: 60,
};

const gameState = {
	playing: false,
	now: window.performance.now(),
	last: window.performance.now(),
	dt: 0,
};

const player = {
	x: 0,
	y: 50,
};

function render() {
	if(!gameState.playing) {
		ctx.font ='50px serif';
		ctx.fillText('Tiny Platformer', 100, game.gridSize /2, )
	}

}

function tick() {
	const now = window.performance.now();
	gameState.now = now;
	gameState.dt = Math.min(1, (now - gameState.last) / 1000);
	console.log(gameState.dt);
	const step = 1/game.fps;
	while(gameState.dt > step) {
		gameState.dt = gameState.dt - step;
	}

	render();

	gameState.last = now;

	window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);