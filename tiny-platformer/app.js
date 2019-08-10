const canvas = document.getElementById('game');

const ctx = canvas.getContext('2d');

const game = {
	tileSize: 10,
	playerSize: 5,
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
	y: 49,
};

function clearScreen(ctx) {
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,game.gridSize, game.gridSize);
}

function drawTitlePage(ctx) {
	ctx.fillStyle = 'white';
	ctx.font ='50px serif';
	ctx.fillText('Tiny Platformer', 50, game.gridSize /2);
	ctx.font = '25px serif';
	ctx.fillText('Press p to play', 150, (game.gridSize /4) * 3);
}

function render() {
	clearScreen(ctx);

	if(!gameState.playing) {
		drawTitlePage(ctx);
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

	if(gameState.playing) {
		window.requestAnimationFrame(tick);
	}
}

//window.requestAnimationFrame(tick);

clearScreen(ctx);
drawTitlePage(ctx);

function startGame(gameState) {
	gameState.playing = true;
}

function stopGame(gameState) {
	gameState.playing = false;
}

function handleKeyPress(event, keyCode, up) {
	switch(keyCode) {
		case 'p':
			console.log('p');
			startGame(gameState);
			window.requestAnimationFrame(tick);
			break;
		case 'q':
			console.log('q');
			stopGame(gameState);
			break;
	}
}

function keyUpHandler(event) {
	handleKeyPress(event, event.key, true);
}

document.addEventListener('keyup', keyUpHandler, false);