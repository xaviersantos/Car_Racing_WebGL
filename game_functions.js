
var score = 0;
var carSpeed = 0;

var xxPos = [-0.5, 0.0, 0.5];   

function turn (direction) {
	switch (direction){
		case 'left':
			if (sceneModels[1].tx > -0.5)
				sceneModels[1].tx -= 0.5;
			
			break;

		case 'right':
			if (sceneModels[1].tx < 0.5)
				sceneModels[1].tx += 0.5;
			
			break;
	}
}

function obstaclesMove ( speed ) {
	sceneModels[2].tz = sceneModels[3].tz += speed

	if (sceneModels[2].tz >= 0 || sceneModels[3].tz >= 0) {
		checkColision();
	}

	if (sceneModels[2].tz >= 1 || sceneModels[3].tz >= 1){
		sceneModels[2].tz = sceneModels[3].tz = -15;
		randomXXPos();
		if(gameSpeed < 0.35){
			gameSpeed += 0.01;
			carSpeed = Math.floor(gameSpeed * 1000 - 100);
			document.getElementById('car_speed').innerHTML = 'SPEED: ' + carSpeed + ' KPH';
			score += gameSpeed * 1000;
			document.getElementById('score').innerHTML = 'SCORE: ' + score;
		}
	}
}

function randomXXPos () {
	sceneModels[2].tx = xxPos[Math.floor(Math.random() * 3)];
	sceneModels[3].tx = xxPos[Math.floor(Math.random() * 3)];
}

function checkColision () {
	if (sceneModels[1].tx == sceneModels[2].tx || sceneModels[1].tx == sceneModels[3].tx){
		sceneModels[1].rotYYOn = true;
		gameSpeed = 0;
	}
}