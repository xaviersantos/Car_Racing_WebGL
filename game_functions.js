
var gameSpeed = 0;
var score = 0;
var carSpeed = 0;

var xxPos = [-0.5, 0.0, 0.5];

var playerCar = sceneModels[1];
var obstacle1 = sceneModels[2];
var obstacle2 = sceneModels[3];

function startGame() {
	if(gameSpeed == 0){
		if(obstacle1.tz >= 0 || obstacle2.tz >= 0){
			obstacle1.tz = -30;
			obstacle2.tz = -30;
		}
		gameSpeed = 0.15;
		playerCar.rotYYOn = false;
		playerCar.rotAngleYY = 180;
	}
	score = 0;
	document.getElementById('score').innerHTML = 'SCORE: ' + score;
	carSpeed = Math.floor(gameSpeed * 1000 - 100);
	document.getElementById('car_speed').innerHTML = 'SPEED: ' + carSpeed + ' KPH';
}

function turn (direction) {
	switch (direction){
		case 'left':
			if (playerCar.tx > -0.5)
				playerCar.tx -= 0.5;
			
			break;

		case 'right':
			if (playerCar.tx < 0.5)
				playerCar.tx += 0.5;
			
			break;
	}
}

function obstaclesMove ( speed ) {
	obstacle1.tz = obstacle2.tz += speed

	if (obstacle1.tz >= 0 || obstacle2.tz >= 0) {
		checkColision();
	}

	if (obstacle1.tz >= 1 || obstacle2.tz >= 1){
		resetObstacles();
		if(gameSpeed < 0.50){
			gameSpeed += 0.01;
			carSpeed = Math.floor(gameSpeed * 1000 - 100);
			document.getElementById('car_speed').innerHTML = 'SPEED: ' + carSpeed + ' KPH';
			score += gameSpeed * 1000;
			document.getElementById('score').innerHTML = 'SCORE: ' + score;
		}
	}
}

function resetObstacles () {
	obstacle1.tz = obstacle2.tz = -30;
	obstacle1.tx = xxPos[Math.floor(Math.random() * 3)];
	obstacle2.tx = xxPos[Math.floor(Math.random() * 3)];
}

function checkColision () {
	if (playerCar.tx == obstacle1.tx || playerCar.tx == obstacle2.tx){
		playerCar.rotYYOn = true;
		gameSpeed = 0;
	}
}