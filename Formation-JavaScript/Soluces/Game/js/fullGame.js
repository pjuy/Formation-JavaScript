/***************
Game Construtors
****************/
//Reinitialize game environment
function reinitGameEnvironment() {
	try {
		document.getElementsByClassName("game-banner")[0].innerHTML = "";
		document.getElementById("game-container").innerHTML = "";
		if (newMemoryGame.timeUpdate) {
			clearInterval(newMemoryGame.timeUpdate);
		}
		if (newCasseBriqueGame.gameUpdate) {
			clearTimeout(newCasseBriqueGame.gameUpdate);
		}
	} catch (error) {
		console.log("An error occured in  : " + error.msg);
	}
}

//Banner
function bannerTitle(bannerContainer, game, gameClass) {
	try {
		let bannerTitleObject = document.createElement("div");
		let bannerTitleText = document.createTextNode(game);
		bannerTitleObject.setAttribute("id", "banner-title-" + gameClass);
		bannerTitleObject.setAttribute("class", "game-title");
		bannerTitleObject.appendChild(bannerTitleText);
		bannerContainer.appendChild(bannerTitleObject);
	} catch (error) {
		console.log("An error occured in bannerTitle : " + error.msg);
	}
}

function createBanner(game, gameClass) {
	try {
		const bannerContainer = document.getElementsByClassName("game-banner")[0];
		bannerContainer.setAttribute("id", "banner-" + gameClass);
		bannerTitle(bannerContainer, game, gameClass);
	} catch (error) {
		console.log("An error occured in createBanner : " + error.msg);
	}
}

//Game Interface
function setUpGame(game, gameClass, gameEnv) {
	try {
		const gameContainer = document.getElementById("game-container");
		let gameContainerInterface = document.createElement(gameEnv);
		gameContainerInterface.setAttribute("id", "interface-" + gameClass);
		gameContainerInterface.setAttribute("class", "game-interface");
		if (gameEnv === "canvas") {
			gameContainerInterface.setAttribute("width", "1160");
			gameContainerInterface.setAttribute("height", "600");
		}
		gameContainer.appendChild(gameContainerInterface);
		let gameInterfaceInformation = {
			gameCanvas: gameContainerInterface,
			gameInterfaceInfo: gameContainerInterface.getBoundingClientRect()
		}
		return gameInterfaceInformation;
	} catch (error) {
		console.log("An error occured in setUpGame : " + error.msg);
	}
}
let GameObject = function (gameCanvas, gameInfo) {
	this.id = gameCanvas.id;
	this.name = gameCanvas.name;
	this.divWidth = gameInfo.width;
	this.divHeight = gameInfo.height;
	this.width = gameCanvas.width;
	this.height = gameCanvas.height;
	this.top = gameInfo.top;
	this.right = gameInfo.right;
	this.bottom = gameInfo.bottom;
	this.left = gameInfo.left;
	this.gameCanvas = gameCanvas;
	this.score = 0;
	this.life = 1;
	this.time = 0;
	this.timeUpdate = "";
}

/***********
 * BOMBERMAN
 ***********/

let GameTest = function (gameCanvas, gameInfo) {
	//inherit from gameObject
	GameObject.call(this, gameCanvas, gameInfo);
	this.gameContext = gameCanvas.getContext("2d");
	this.x = 0;
	this.y = 0;
	this.blockWidth = 55;
	this.blockHeight = 55;
	this.bombs = [];
	this.mapping = [];
	this.level1 = [
		"WWWWWWWWWWWWWWWWWWWWW",
		"W__BBBBBBBBBBBBBBB__W",
		"W_WBWBWBWBWBWBWBWBW_W",
		"WBBBB__B_B_B_B__BBBBW",
		"WBWBW_W_W_W_W_W_WBWBW",
		"WBBBBB_B_B_B_B_BBBBBW",
		"WBWBW_W_W_W_W_W_WBWBW",
		"WBBBB__B_B_B_B__BBBBW",
		"W_WBWBWBWBWBWBWBWBW_W",
		"W__BBBBBBBBBBBBBBB__W",
		"WWWWWWWWWWWWWWWWWWWWW"
	];
};

let newTestGame = "";

function createGameTestObject(testCanvas, testInfos) {
	newTestGame = new GameTest(testCanvas, testInfos);

	newTestGame.bomberman = {
		x: 85,
		y: 85,
		radius: 15,
		up: false,
		right: false,
		down: false,
		left: false,
		speedUp: 2,
		speedRight: 2,
		speedDown: 2,
		speedLeft: 2,
		draw: function () {
			newTestGame.gameContext.beginPath();
			newTestGame.gameContext.arc(newTestGame.bomberman.x, newTestGame.bomberman.y, newTestGame.bomberman.radius, 0, Math.PI * 2);
			newTestGame.gameContext.fillStyle = "white";
			newTestGame.gameContext.fill();
			newTestGame.gameContext.closePath();
		},
		move: function () {
			if (newTestGame.bomberman.up) {
				newTestGame.bomberman.y -= newTestGame.bomberman.speedUp;
			} else if (newTestGame.bomberman.right) {
				newTestGame.bomberman.x += newTestGame.bomberman.speedRight;
			} else if (newTestGame.bomberman.down) {
				newTestGame.bomberman.y += newTestGame.bomberman.speedDown;
			} else if (newTestGame.bomberman.left) {
				newTestGame.bomberman.x -= newTestGame.bomberman.speedLeft;
			}
		},
		collision: function () {
			for (let r = 0; r < newTestGame.mapping.length; r++) {
				for (let c = 0; c < newTestGame.mapping[r].length; c++) {
					let wall = newTestGame.mapping[r][c];
					let wallTop = wall.y;
					let wallRight = wall.x + newTestGame.blockWidth;
					let wallBottom = wall.y + newTestGame.blockHeight;
					let wallLeft = wall.x;

					let bombermanPos = newTestGame.bomberman;
					let bombermanTop = bombermanPos.y - bombermanPos.radius;
					let bombermanRight = bombermanPos.x + bombermanPos.radius;
					let bombermanBottom = bombermanPos.y + bombermanPos.radius;
					let bombermanLeft = bombermanPos.x - bombermanPos.radius;
					if (wall.status === 1) {
						if (bombermanTop < wallBottom && bombermanRight > wallLeft && bombermanBottom > wallTop && bombermanLeft < wallRight) {
							if (newTestGame.bomberman.up) {
								newTestGame.bomberman.speedUp = 0;
							} else if (newTestGame.bomberman.right) {
								newTestGame.bomberman.speedRight = 0;
							} else if (newTestGame.bomberman.down) {
								newTestGame.bomberman.speedDown = 0;
							} else if (newTestGame.bomberman.left) {
								newTestGame.bomberman.speedLeft = 0;
							}
						}
					}
				}
			}
		},
		bomb: {
			radius: 25,
			range: 1,
			stock: 1,
			launch: function (bombX, bombY) {
				if (newTestGame.bomberman.bomb.stock > 0) {
					newTestGame.bomberman.bomb.stock--;
					newTestGame.bombs.push({
						x: bombX,
						y: bombY,
						timer: 300
					});
				}
			},
			draw: function () {
				for (b = 0; b < newTestGame.bombs.length; b++) {
					newTestGame.bombs[b].timer--;
					if (newTestGame.bombs[b].timer > 0) {
						newTestGame.gameContext.beginPath();
						newTestGame.gameContext.arc(newTestGame.bombs[b].x, newTestGame.bombs[b].y, newTestGame.bomberman.bomb.radius, 0, Math.PI * 2);
						newTestGame.gameContext.fillStyle = "black";
						newTestGame.gameContext.fill();
						newTestGame.gameContext.closePath();
					} else {
						newTestGame.bomberman.bomb.explode(newTestGame.bombs[b]);
						break;
					}
				}
			},
			explode: function (bombItem) {
				console.log("BOOM!!!");
				let bombPosX = parseInt(bombItem.x / newTestGame.blockWidth);
				let bombPosY = parseInt(bombItem.y / newTestGame.blockHeight);
				for (r = 0; r < newTestGame.bomberman.bomb.range; r++) {
					let incrementBombPos = r + 1;
					//top
					if (newTestGame.mapping[bombPosY - incrementBombPos][bombPosX].block === "brick" && newTestGame.mapping[bombPosY - incrementBombPos][bombPosX].status === 1) {
						newTestGame.mapping[bombPosY - incrementBombPos][bombPosX].status = 0;
					}
					//right
					if (newTestGame.mapping[bombPosY][bombPosX + incrementBombPos].block === "brick" && newTestGame.mapping[bombPosY][bombPosX + incrementBombPos].status === 1) {
						newTestGame.mapping[bombPosY][bombPosX + incrementBombPos].status = 0;
					}
					//bottom
					if (newTestGame.mapping[bombPosY + incrementBombPos][bombPosX].block === "brick" && newTestGame.mapping[bombPosY + incrementBombPos][bombPosX].status === 1) {
						newTestGame.mapping[bombPosY + incrementBombPos][bombPosX].status = 0;
					}
					//left
					if (newTestGame.mapping[bombPosY][bombPosX - incrementBombPos].block === "brick" && newTestGame.mapping[bombPosY][bombPosX - incrementBombPos].status === 1) {
						newTestGame.mapping[bombPosY][bombPosX - incrementBombPos].status = 0;
					}
				}
				newTestGame.bombs.splice(bombItem, 1);
				newTestGame.bomberman.bomb.stock++;
			}
		}
	};

	newTestGame.bonus = {
		bag: ["bonusSpeedUp", "bonusPowerUp", "bonusStockUp"],
		bonusRate: 2,
		bonusArray: [],
		init: function () {
			for (b = 0; b < newTestGame.bonus.bonusRate; b++) {
				newTestGame.bonus.bonusArray = newTestGame.bonus.bonusArray.concat(newTestGame.bonus.bag);
			}
			newTestGame.bonus.bonusArray.sort(function () {
				return 0.5 - Math.random();
			});
			return newTestGame.bonus.bonusArray;
		},
		speedUp: function (character) {
			character.speedUp++;
			character.speedRight++;
			character.speedDown++;
			character.speedLeft++;
		},
		powerUp: function (character) {
			character.bomb.range++;
		},
		stockUp: function (character) {
			character.bomb.stock++;
		}
	};

	window.addEventListener("keydown", function (e) {
		if (e.keyCode === 38) {
			newTestGame.bomberman.up = true;
		}
		if (e.keyCode === 39) {
			newTestGame.bomberman.right = true;
		}
		if (e.keyCode === 40) {
			newTestGame.bomberman.down = true;
		}
		if (e.keyCode === 37) {
			newTestGame.bomberman.left = true;
		}
	});
	window.addEventListener("keyup", function (e) {
		if (e.keyCode === 38) {
			newTestGame.bomberman.up = false;
			newTestGame.bomberman.speedUp = 2;
		}
		if (e.keyCode === 39) {
			newTestGame.bomberman.right = false;
			newTestGame.bomberman.speedRight = 2;
		}
		if (e.keyCode === 40) {
			newTestGame.bomberman.down = false;
			newTestGame.bomberman.speedDown = 2;
		}
		if (e.keyCode === 37) {
			newTestGame.bomberman.left = false;
			newTestGame.bomberman.speedLeft = 2;
		}
		if (e.keyCode === 32) {
			newTestGame.bomberman.bomb.launch(newTestGame.bomberman.x, newTestGame.bomberman.y);
		}
	});

	newTestGame.level = {
		init: function (level) {
			for (let r = 0; r < level.length; r++) {
				newTestGame.mapping[r] = [];
				for (let c = 0; c < level[r].length; c++) {
					newTestGame.mapping[r][c] = {
						x: 0,
						y: 0
					}
					if (level[r][c] === "W") {
						newTestGame.mapping[r][c].block = "wall";
						newTestGame.mapping[r][c].status = 1;
					} else if (level[r][c] === "_") {
						newTestGame.mapping[r][c].block = "road";
						newTestGame.mapping[r][c].status = 0;
					} else if (level[r][c] === "B") {
						newTestGame.mapping[r][c].block = "brick";
						newTestGame.mapping[r][c].status = 1;
						if (newTestGame.bonus.bonusArray.length > 0 && Math.random() > 0.3333) {
							newTestGame.mapping[r][c].bonus = newTestGame.bonus.bonusArray[0];
							newTestGame.bonus.bonusArray.splice(0, 1);
						}
					}
				}
			}
		},
		draw: function (level) {
			for (let r = 0; r < level.length; r++) {
				for (let c = 0; c < level[r].length; c++) {
					let blockX = c * newTestGame.blockWidth;
					let blockY = r * newTestGame.blockHeight;
					newTestGame.mapping[r][c].x = blockX;
					newTestGame.mapping[r][c].y = blockY;
					newTestGame.gameContext.beginPath();
					if (newTestGame.mapping[r][c].block == "wall") {
						newTestGame.gameContext.rect(blockX, blockY, newTestGame.blockWidth, newTestGame.blockHeight);
						newTestGame.gameContext.fillStyle = "#808B96";
						newTestGame.gameContext.fill();
					} else if (newTestGame.mapping[r][c].block === "brick" && newTestGame.mapping[r][c].status === 1) {
						newTestGame.gameContext.rect(blockX, blockY, newTestGame.blockWidth, newTestGame.blockHeight);
						newTestGame.gameContext.fillStyle = "brown";
						newTestGame.gameContext.fill();
						newTestGame.gameContext.strokeStyle = "dark brown";
						newTestGame.gameContext.stroke();
					}
					newTestGame.gameContext.closePath();
				}
			}
		}
	};

	return newTestGame;
}

function gameTestLaunch(go) {
	go.gameContext.clearRect(0, 0, go.width, go.height);

	go.level.draw(go.level1);
	go.bomberman.draw();
	go.bomberman.bomb.draw();
	go.bomberman.move();
	go.bomberman.collision();

	go.gameUpdate = setTimeout(function () {
		gameTestLaunch(go);
	}, 10);
}


function testInit() {
	//try {
	reinitGameEnvironment();
	let banner = createBanner("Test", "test");
	let gameSetUpInfo = setUpGame("Test", "test", "canvas");
	let gameTestObject = createGameTestObject(gameSetUpInfo.gameCanvas, gameSetUpInfo.gameInterfaceInfo);
	gameTestObject.bonus.init();
	gameTestObject.level.init(gameTestObject.level1);

	gameTestLaunch(gameTestObject);
	//} catch (error) {
	//	console.log("An error occured in casseBriqueInit : " + error.msg);
	//}
}

/******
 * PONG
 ******/

let GamePong = function (gameCanvas, gameInfo) {
	//inherit from gameObject
	GameObject.call(this, gameCanvas, gameInfo);
	this.gameContext = gameCanvas.getContext("2d");
	this.x = this.width / 2;
	this.y = this.height - 30;
	this.paddleWidth = 15;
	this.paddleHeight = 100;
};

let newPongObject = "";

function createGamePongObject(pongCanvas, pongInfos) {
	newPongGame = new GamePong(pongCanvas, pongInfos);

	newPongGame.ball = {
		radius: 10,
		moveX: 5,
		moveY: -5,
		draw: function () {
			newPongGame.gameContext.beginPath();
			let ballImage = new Image();
			ballImage.src = "images/breakout-ball.png";
			newPongGame.gameContext.drawImage(ballImage, newPongGame.x, newPongGame.y, newPongGame.ball.radius * 2, newPongGame.ball.radius * 2);
			newPongGame.gameContext.closePath();
		}
	};

	newPongGame.player1 = {
		life: 5,
		score: 0,
		up: false,
		down: false,
		paddle: {
			x: newPongGame.paddleWidth * 3,
			y: newPongGame.height - (newPongGame.paddleHeight * 3),
			draw: function () {
				newPongGame.gameContext.beginPath();
				newPongGame.gameContext.rect(newPongGame.player1.paddle.x, newPongGame.player1.paddle.y, newPongGame.paddleWidth, newPongGame.paddleHeight);
				newPongGame.gameContext.fillStyle = "#00a2ff";
				newPongGame.gameContext.fill();
				newPongGame.gameContext.closePath();
			},
			move: function () {
				if (newPongGame.player1.up && newPongGame.player1.paddle.y > 0) {
					newPongGame.player1.paddle.y -= 7;
				} else if (newPongGame.player1.down && newPongGame.player1.paddle.y + newPongGame.paddleHeight < newPongGame.height) {
					newPongGame.player1.paddle.y += 7;
				}
			},
			collision: function () {
				if (newPongGame.y > newPongGame.player1.paddle.y && newPongGame.y - newPongGame.ball.radius < newPongGame.player1.paddle.y + newPongGame.paddleHeight && newPongGame.x - newPongGame.ball.radius < newPongGame.player1.paddle.x + newPongGame.paddleWidth) {
					newPongGame.ball.moveX = -(newPongGame.ball.moveX);
				}
			}
		},
		drawScore: function () {
			newPongGame.gameContext.font = "16px Arial";
			newPongGame.gameContext.fillStyle = "#0095DD";
			newPongGame.gameContext.fillText("Score: " + newPongGame.player1.score, 10, 20);
		},
		drawLife: function () {
			newPongGame.gameContext.font = "16px Arial";
			newPongGame.gameContext.fillStyle = "#0095DD";
			newPongGame.gameContext.fillText("Lives: " + newPongGame.player1.life, 85, 20);
		}
	};

	newPongGame.player2 = {
		life: 5,
		score: 0,
		up: false,
		down: false,
		paddle: {
			x: newPongGame.width - (newPongGame.paddleWidth * 3),
			y: newPongGame.height - (newPongGame.paddleHeight * 3),
			draw: function () {
				newPongGame.gameContext.beginPath();
				newPongGame.gameContext.rect(newPongGame.player2.paddle.x, newPongGame.player2.paddle.y, newPongGame.paddleWidth, newPongGame.paddleHeight);
				newPongGame.gameContext.fillStyle = "#00a2ff";
				newPongGame.gameContext.fill();
				newPongGame.gameContext.closePath();
			},
			move: function () {
				if (newPongGame.player2.up && newPongGame.player2.paddle.y > 0) {
					newPongGame.player2.paddle.y -= 7;
				} else if (newPongGame.player2.down && newPongGame.player2.paddle.y + newPongGame.paddleHeight < newPongGame.height) {
					newPongGame.player2.paddle.y += 7;
				}
			},
			collision: function () {
				if (newPongGame.y > newPongGame.player2.paddle.y && newPongGame.y - newPongGame.ball.radius < newPongGame.player2.paddle.y + newPongGame.paddleHeight && newPongGame.x + newPongGame.ball.radius > newPongGame.player2.paddle.x - newPongGame.paddleWidth) {
					newPongGame.ball.moveX = -(newPongGame.ball.moveX);
				}
			}
		},
		drawScore: function () {
			newPongGame.gameContext.font = "16px Arial";
			newPongGame.gameContext.fillStyle = "#0095DD";
			newPongGame.gameContext.fillText("Score: " + newPongGame.player2.score, newPongGame.width - 80, 20);
		},
		drawLife: function () {
			newPongGame.gameContext.font = "16px Arial";
			newPongGame.gameContext.fillStyle = "#0095DD";
			newPongGame.gameContext.fillText("Lives: " + newPongGame.player2.life, newPongGame.width - 150, 20);
		}
	};

	newPongGame.wallCollision = function () {
		if (newPongGame.x + newPongGame.ball.moveX > newPongGame.width - newPongGame.ball.radius) {
			newPongGame.player2.life--;
			if (newPongGame.player2.life <= 0) {
				newPongGame.player1.score += 100;
				alert("Player 1 win !");
				clearInterval(newPongGame.gameUpdate);
				pongInit();
			} else {
				newPongGame.player1.score += 10;
				newPongGame.x = newPongGame.width / 2;
				newPongGame.y = newPongGame.height - 30;
				newPongGame.ball.moveX = -5;
				newPongGame.ball.moveY = -5;
			}
		} else if (newPongGame.x + newPongGame.ball.moveX < newPongGame.ball.radius) {
			newPongGame.player1.life--;
			if (newPongGame.player1.life <= 0) {
				newPongGame.player2.score += 100;
				alert("Player 2 win !");
				clearInterval(newPongGame.gameUpdate);
				pongInit();
			} else {
				newPongGame.player2.score += 10;
				newPongGame.x = newPongGame.width / 2;
				newPongGame.y = newPongGame.height - 30;
				newPongGame.ball.moveX = 5;
				newPongGame.ball.moveY = -5;
			}
		} else if (newPongGame.y + newPongGame.ball.moveY < newPongGame.ball.radius || newPongGame.y + newPongGame.ball.moveY > newPongGame.height - newPongGame.ball.radius) {
			newPongGame.ball.moveY = -(newPongGame.ball.moveY);
		}
	};

	function keyDownHandler(e) {

		//Player 1
		if (e.keyCode == 90) {
			newPongGame.player1.up = true;
		} else if (e.keyCode == 83) {
			newPongGame.player1.down = true;
		}

		//Player 2
		if (e.keyCode == 38) {
			newPongGame.player2.up = true;
		} else if (e.keyCode == 40) {
			newPongGame.player2.down = true;
		}

	}

	function keyUpHandler(e) {

		//Player 1
		if (e.keyCode == 90) {
			newPongGame.player1.up = false;
		} else if (e.keyCode == 83) {
			newPongGame.player1.down = false;
		}

		//Player 2
		if (e.keyCode == 38) {
			newPongGame.player2.up = false;
		} else if (e.keyCode == 40) {
			newPongGame.player2.down = false;
		}
	}

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	return newPongGame;
}

function gamePongLaunch(go) {
	go.gameContext.clearRect(0, 0, go.width, go.height);
	go.ball.draw();
	go.player1.paddle.draw();
	go.player1.drawScore();
	go.player1.drawLife();
	go.player2.paddle.draw();
	go.player2.drawScore();
	go.player2.drawLife();
	go.wallCollision();
	go.player1.paddle.move();
	go.player2.paddle.move();
	go.player1.paddle.collision();
	go.player2.paddle.collision();

	go.x += go.ball.moveX;
	go.y += go.ball.moveY;
	//requestAnimationFrame(gameCasseBriqueLaunch(go));
	go.gameUpdate = setTimeout(function () {
		gamePongLaunch(go);
	}, 10);
}

function pongInit() {
	//try {
	reinitGameEnvironment();
	let banner = createBanner("Pong", "pong");
	let gameSetUpInfo = setUpGame("Pong", "pong", "canvas");
	let gamePongObject = createGamePongObject(gameSetUpInfo.gameCanvas, gameSetUpInfo.gameInterfaceInfo);
	gamePongLaunch(gamePongObject);
	//} catch (error) {
	//	console.log("An error occured in casseBriqueInit : " + error.msg);
	//}
}

/******************
 * CASSE BRIQUE GAME
 *******************/

let GameCasseBrique = function (gameCanvas, gameInfo) {
	//inherit from gameObject
	GameObject.call(this, gameCanvas, gameInfo);
	this.bricks = [];
	this.life = 3;
	this.gameContext = gameCanvas.getContext("2d");
	this.x = this.width / 2;
	this.y = this.height - 30;
	this.paddleWidth = 100;
	this.paddleHeight = 15;
	this.rightPressed = false;
	this.leftPressed = false;
}

//GameCasseBrique.prototype = Object.create(GameObject.prototype);
//GameCasseBrique.prototype.constructor = GameCasseBrique;
let newCasseBriqueGame = "";

function createGameCasseBriqueObject(casseBriqueCanvas, casseBriqueInfos) {
	newCasseBriqueGame = new GameCasseBrique(casseBriqueCanvas, casseBriqueInfos);

	newCasseBriqueGame.ball = {
		radius: 10,
		moveX: 5,
		moveY: -5,
		draw: function () {
			newCasseBriqueGame.gameContext.beginPath();
			let ballImage = new Image();
			ballImage.src = "images/breakout-ball.png";
			newCasseBriqueGame.gameContext.drawImage(ballImage, newCasseBriqueGame.x, newCasseBriqueGame.y, newCasseBriqueGame.ball.radius * 2, newCasseBriqueGame.ball.radius * 2);
			//newCasseBriqueGame.gameContext.arc(newCasseBriqueGame.x, newCasseBriqueGame.y, newCasseBriqueGame.ball.radius, 0, Math.PI * 2);
			//newCasseBriqueGame.gameContext.fillStyle = "#ff0000";
			//newCasseBriqueGame.gameContext.fill();
			newCasseBriqueGame.gameContext.closePath();
		}
	};

	newCasseBriqueGame.paddle = {
		x: (newCasseBriqueGame.width - newCasseBriqueGame.paddleWidth) / 2,
		draw: function () {
			newCasseBriqueGame.gameContext.beginPath();
			newCasseBriqueGame.gameContext.rect(newCasseBriqueGame.paddle.x, newCasseBriqueGame.height - (newCasseBriqueGame.paddleHeight * 3), newCasseBriqueGame.paddleWidth, newCasseBriqueGame.paddleHeight);
			newCasseBriqueGame.gameContext.fillStyle = "#00a2ff";
			newCasseBriqueGame.gameContext.fill();
			newCasseBriqueGame.gameContext.closePath();
		}
	};

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	document.addEventListener("mousemove", mouseMoveHandler, false);

	function keyDownHandler(e) {
		if (e.keyCode == 39) {
			newCasseBriqueGame.rightPressed = true;
		} else if (e.keyCode == 37) {
			newCasseBriqueGame.leftPressed = true;
		}
	}

	function keyUpHandler(e) {
		if (e.keyCode == 39) {
			newCasseBriqueGame.rightPressed = false;
		} else if (e.keyCode == 37) {
			newCasseBriqueGame.leftPressed = false;
		}
	}

	function mouseMoveHandler(e) {
		var relativeX = e.clientX - newCasseBriqueGame.left;
		if (relativeX > 0 && relativeX < newCasseBriqueGame.width) {
			newCasseBriqueGame.paddle.x = relativeX - newCasseBriqueGame.paddleWidth / 2;
		}
	}

	newCasseBriqueGame.brick = {
		width: 100,
		height: 40,
		initLevel: function (brickRowNumber, brickColNumber) {
			for (var c = 0; c < brickColNumber; c++) {
				newCasseBriqueGame.bricks[c] = [];
				for (var r = 0; r < brickRowNumber; r++) {
					newCasseBriqueGame.bricks[c][r] = {
						x: 0,
						y: 0,
						status: 1
					};
				}
			}
		},
		drawLevel: function (brickRowNumber, brickColNumber) {
			for (var c = 0; c < brickColNumber; c++) {
				for (var r = 0; r < brickRowNumber; r++) {
					if (newCasseBriqueGame.bricks[c][r].status == 1) {
						let brickX = (r * newCasseBriqueGame.brick.width) + (newCasseBriqueGame.brick.width * 2);
						let brickY = (c * newCasseBriqueGame.brick.height) + newCasseBriqueGame.brick.height;
						newCasseBriqueGame.bricks[c][r].x = brickX;
						newCasseBriqueGame.bricks[c][r].y = brickY;
						newCasseBriqueGame.gameContext.beginPath();
						newCasseBriqueGame.gameContext.rect(brickX, brickY, newCasseBriqueGame.brick.width, newCasseBriqueGame.brick.height);
						newCasseBriqueGame.gameContext.lineWidth = "1";
						newCasseBriqueGame.gameContext.fillStyle = "#236a8c";
						newCasseBriqueGame.gameContext.fill();
						newCasseBriqueGame.gameContext.strokeStyle = "#1a536f";
						newCasseBriqueGame.gameContext.stroke();
						newCasseBriqueGame.gameContext.closePath();
					}
				}
			}
		},
		collisionDetection: function (brickRowNumber, brickColNumber) {
			let levelFinish = true;
			for (var c = 0; c < brickColNumber; c++) {
				for (var r = 0; r < brickRowNumber; r++) {
					let b = newCasseBriqueGame.bricks[c][r];
					if (b.status == 1) {
						levelFinish = false;
						//Ball
						let ballSize = newCasseBriqueGame.ball.radius * 2;
						let ballCenter = newCasseBriqueGame.ball.radius;
						let ballLeftX = newCasseBriqueGame.x;
						let ballRightX = newCasseBriqueGame.x + ballSize;
						let ballTopY = newCasseBriqueGame.y;
						let ballBottomY = newCasseBriqueGame.y + ballSize;

						//Brick
						let brickLeftX = b.x;
						let brickRightX = b.x + newCasseBriqueGame.brick.width;
						let brickTopY = b.y;
						let brickBottomY = b.y + newCasseBriqueGame.brick.height;

						if (ballRightX > brickLeftX && ballLeftX < brickRightX && ballBottomY > brickTopY && ballTopY < brickBottomY) {
							if (newCasseBriqueGame.ball.moveY < 0) {
								if ((ballTopY + ballCenter) < brickBottomY) {
									newCasseBriqueGame.ball.moveX = -(newCasseBriqueGame.ball.moveX);
								} else {
									newCasseBriqueGame.ball.moveY = -(newCasseBriqueGame.ball.moveY);
								}
							} else {
								if ((ballTopY + ballCenter) > brickTopY) {
									newCasseBriqueGame.ball.moveX = -(newCasseBriqueGame.ball.moveX);
								} else {
									newCasseBriqueGame.ball.moveY = -(newCasseBriqueGame.ball.moveY);
								}
							}
							b.status = 0;
							newCasseBriqueGame.score += 100;
						}
					}
				}
			}
			if (levelFinish === true) {
				alert("YOU WIN, CONGRATS!");
				//document.location.reload();
			}
		}
	};

	newCasseBriqueGame.drawScore = function () {
		newCasseBriqueGame.gameContext.font = "16px Arial";
		newCasseBriqueGame.gameContext.fillStyle = "#0095DD";
		newCasseBriqueGame.gameContext.fillText("Score: " + newCasseBriqueGame.score, 8, 20);
	};

	newCasseBriqueGame.drawLife = function () {
		newCasseBriqueGame.gameContext.font = "16px Arial";
		newCasseBriqueGame.gameContext.fillStyle = "#0095DD";
		newCasseBriqueGame.gameContext.fillText("Lives: " + newCasseBriqueGame.life, newCasseBriqueGame.width - 65, 20);
	};

	return newCasseBriqueGame;
}

function gameCasseBriqueLaunch(go) {
	go.gameContext.clearRect(0, 0, go.width, go.height);
	go.brick.drawLevel(8, 5);
	go.ball.draw();
	go.paddle.draw();
	go.drawScore();
	go.drawLife();
	go.brick.collisionDetection(8, 5);

	if (go.x + go.ball.moveX > go.width - go.ball.radius || go.x + go.ball.moveX < go.ball.radius) {
		go.ball.moveX = -(go.ball.moveX);
	}
	if (go.y + go.ball.moveY < go.ball.radius) {
		go.ball.moveY = -(go.ball.moveY);
	}
	if ((go.x > go.paddle.x && go.x < go.paddle.x + go.paddleWidth) && (go.y + go.ball.moveY > go.height - go.ball.radius - (go.paddleHeight * 3))) {
		go.ball.moveY = -(go.ball.moveY);
	} else if (go.y + go.ball.moveY > go.height - go.ball.radius) {
		go.life--;
		if (!go.life) {
			alert("GAME OVER");
			document.location.reload();
		} else {
			go.x = go.width / 2;
			go.y = go.height - (go.paddleHeight * 3);
			go.ball.moveX = 5;
			go.ball.moveY = -5;
			go.paddle.x = (go.width - go.paddleWidth) / 2;
		}
	}

	if (go.rightPressed && go.paddle.x < go.width - go.paddle.width) {
		go.paddle.x += 7;
	} else if (go.leftPressed && go.paddle.x > 0) {
		go.paddle.x -= 7;
	}

	go.x += go.ball.moveX;
	go.y += go.ball.moveY;
	//requestAnimationFrame(gameCasseBriqueLaunch(go));
	go.gameUpdate = setTimeout(function () {
		gameCasseBriqueLaunch(go)
	}, 10);
}

function casseBriqueInit() {
	//try {
	reinitGameEnvironment();
	let banner = createBanner("Casse Brique", "casse-brique");
	let gameSetUpInfo = setUpGame("Casse Brique", "casse-brique", "canvas");
	let gameCasseBriqueObject = createGameCasseBriqueObject(gameSetUpInfo.gameCanvas, gameSetUpInfo.gameInterfaceInfo);
	gameCasseBriqueObject.brick.initLevel(8, 5);
	gameCasseBriqueLaunch(gameCasseBriqueObject);
	//} catch (error) {
	//	console.log("An error occured in casseBriqueInit : " + error.msg);
	//}
}

/******************
 * MEMORY GAME
 *******************/
let GameMemory = function (gameCanvas, gameInfo) {
	//inherit from gameObject
	GameObject.call(this, gameCanvas, gameInfo);
	this.header = "";
	this.board = "";
	this.timerBox = "";
	this.scoreBox = "";
	this.cards = [
		"card_amaterasu",
		"card_anima",
		"card_bahamut",
		"card_hashmal",
		"card_ifrit",
		"card_mateus",
		"card_nosferatu",
		"card_phoenix"
	];
	this.pairCount = 8;
	this.cardCount = this.pairCount * 2;
	this.flipTime = 1000;
	this.scoreIncrease = 100;
}

let newMemoryGame = "";

function createGameMemoryObject(memoryCanvas, memoryInfos) {
	newMemoryGame = new GameMemory(memoryCanvas, memoryInfos);

	newMemoryGame.drawHeader = function () {
		let memoryHeader = document.createElement("div");
		memoryHeader.setAttribute("class", "game-header");
		memoryHeader.setAttribute("id", "memory-header");
		newMemoryGame.gameCanvas.appendChild(memoryHeader);
		newMemoryGame.header = memoryHeader;
	};

	newMemoryGame.drawScore = function () {
		let memoryScore = document.createElement("div");
		memoryScore.setAttribute("class", "game-score");
		memoryScore.setAttribute("id", "memory-score");

		let memoryScoreLabel = document.createElement("span");
		memoryScoreLabel.setAttribute("class", "score-label");
		memoryScoreLabel.innerHTML = "Score : ";
		memoryScore.appendChild(memoryScoreLabel);

		let memoryScoreCounter = document.createElement("span");
		memoryScoreCounter.setAttribute("class", "score-counter");
		memoryScoreCounter.innerHTML = newMemoryGame.score;
		memoryScore.appendChild(memoryScoreCounter);

		newMemoryGame.header.appendChild(memoryScore);
		newMemoryGame.scoreBox = memoryScoreCounter;
	};

	newMemoryGame.timer = {
		count: 100,
		draw: function () {
			let memoryTimer = document.createElement("div");
			memoryTimer.setAttribute("class", "game-timer");
			memoryTimer.setAttribute("id", "memory-timer");

			let memoryTimerLabel = document.createElement("span");
			memoryTimerLabel.setAttribute("class", "timer-label");
			memoryTimerLabel.innerHTML = "Time : ";
			memoryTimer.appendChild(memoryTimerLabel);

			let memoryTimerCounter = document.createElement("span");
			memoryTimerCounter.setAttribute("class", "timer-counter");
			memoryTimerCounter.innerHTML = newMemoryGame.time;
			memoryTimer.appendChild(memoryTimerCounter);

			newMemoryGame.header.appendChild(memoryTimer);
			newMemoryGame.timerBox = memoryTimerCounter;
		},
		start: function () {
			newMemoryGame.timeUpdate = setInterval(newMemoryGame.timer.update, newMemoryGame.timer.count);
		},
		update: function () {
			if (newMemoryGame.time === 0) {
				newMemoryGame.time = new Date(newMemoryGame.time);
			}
			newMemoryGame.time.setTime(newMemoryGame.time.getTime() + newMemoryGame.timer.count);
			newMemoryGame.timerBox.innerHTML = newMemoryGame.time.getMinutes() + ":" + newMemoryGame.time.getSeconds() + ":" + newMemoryGame.time.getMilliseconds();
		},
		stop: function () {
			clearInterval(newMemoryGame.timeUpdate);
		}
	};

	newMemoryGame.drawBoard = function () {
		let memoryBoard = document.createElement("div");
		memoryBoard.setAttribute("class", "game-board");
		memoryBoard.setAttribute("id", "memory-board");
		newMemoryGame.gameCanvas.appendChild(memoryBoard);
		newMemoryGame.board = memoryBoard;
	};

	newMemoryGame.card = {
		selectedCard: "",
		selectedCardName: "",
		create: function (cardName) {
			let cardImageSrc = "./images/" + cardName + ".jpg";

			let memoryCard = document.createElement("div");
			memoryCard.setAttribute("class", "memory-card");

			let memoryCardImg = document.createElement("img");
			memoryCardImg.setAttribute("name", cardName);
			memoryCardImg.setAttribute("class", "unflip");
			memoryCardImg.dataset.src = cardImageSrc;
			memoryCardImg.src = "./images/card_back.jpg";
			memoryCardImg.dataset.click = "newMemoryGame.card.selected(this)";
			memoryCardImg.setAttribute("onclick", "newMemoryGame.card.selected(this)");
			memoryCard.appendChild(memoryCardImg);

			newMemoryGame.board.appendChild(memoryCard);
		},
		draw: function () {
			let cardsArray = newMemoryGame.cards.splice(0, newMemoryGame.pairCount);
			let pairArray = cardsArray.concat(cardsArray);
			let sortArray = pairArray.sort(function () {
				return 0.5 - Math.random();
			});

			for (c = 0; c < sortArray.length; c++) {
				newMemoryGame.card.create(sortArray[c]);
			}
		},
		winCondition: function () {
			let allCards = document.getElementsByClassName("memory-card");
			for (c = 0; c < allCards.length; c++) {
				let allCardsImg = allCards[c].getElementsByTagName("img")[0];
				if (allCardsImg.className === "unflip") {
					return false;
				}
			}
			return true;
		},
		selected: function (flippedCard) {
			if (newMemoryGame.time === 0) {
				newMemoryGame.timer.start();
			}
			flippedCard.setAttribute("onclick", "");
			flippedCard.src = flippedCard.dataset.src;
			flippedCard.setAttribute("class", "flip");
			if (newMemoryGame.card.selectedCardName === "") {
				newMemoryGame.card.selectedCard = flippedCard;
				newMemoryGame.card.selectedCardName = flippedCard.name;
			} else {
				if (newMemoryGame.card.selectedCardName === flippedCard.name) {
					newMemoryGame.score += newMemoryGame.scoreIncrease;
					newMemoryGame.scoreBox.innerHTML = newMemoryGame.score;

					let win = newMemoryGame.card.winCondition();
					if (win === true) {
						newMemoryGame.timer.stop();
						alert("Congratulation !");
					}

				} else {
					let thisCard = flippedCard;
					let firstCard = newMemoryGame.card.selectedCard;
					setTimeout(function () {
						thisCard.setAttribute("class", "unflip");
						thisCard.setAttribute("onclick", thisCard.dataset.click);
						thisCard.src = "./images/card_back.jpg";
						firstCard.setAttribute("class", "unflip");
						firstCard.setAttribute("onclick", firstCard.dataset.click);
						firstCard.src = "./images/card_back.jpg";
					}, newMemoryGame.flipTime);
				}
				newMemoryGame.card.selectedCardName = "";
				newMemoryGame.card.selectedCard = "";
				flippedCard = "";
			}
		}
	};


	return newMemoryGame;
}

function gameMemoryLaunch(go) {
	go.drawHeader();
	go.drawScore();
	go.timer.draw();
	go.drawBoard();
	go.card.draw();
}

function memoryInit() {
	//try {
	reinitGameEnvironment();
	let banner = createBanner("Memory", "memory");
	let gameSetUpInfo = setUpGame("Memory", "memory", "div");
	let gameMemoryObject = createGameMemoryObject(gameSetUpInfo.gameCanvas, gameSetUpInfo.gameInterfaceInfo);
	gameMemoryLaunch(gameMemoryObject);
	//} catch (error) {
	//	console.log("An error occured in casseBriqueInit : " + error.msg);
	//}
}

/**********************
Set up Game Environment
***********************/
function addMenuElement(name, gameInitFunction) {
	try {
		const menuContainer = document.getElementById("game-nav-id").getElementsByTagName("ul")[0];
		let menuClass = name.replace(/ /g, "-").toLowerCase();
		let menuObject = document.createElement("li");
		let menuObjectText = document.createTextNode(name);
		menuObject.appendChild(menuObjectText);
		menuObject.setAttribute("id", menuClass);
		menuObject.setAttribute("onclick", gameInitFunction);
		menuContainer.appendChild(menuObject);
	} catch (error) {
		console.log("An error occured in addMenuElement : " + error.msg);
	}
}

function createMenu() {
	try {
		addMenuElement("Casse Brique", "casseBriqueInit()");
		addMenuElement("Memory", "memoryInit()");
		addMenuElement("Pong", "pongInit()");
		addMenuElement("Test", "testInit()");
	} catch (error) {
		console.log("An error occured in createMenu : " + error.msg);
	}
}

function setUpGameEnvironment() {
	try {
		createMenu();
	} catch (error) {
		console.log("An error occured in setUpGameEnvironment : " + error.msg);
	}
}

//launch javascript when page is ready
/*
DISABLE WHILE WORKING OUT OF CONNECTION
$(document).ready(function () {
	setUpGameEnvironment();
});
*/
setUpGameEnvironment();