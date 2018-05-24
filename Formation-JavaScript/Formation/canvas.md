# Canvas
Canvas will allow you to draw simple forms on the canvas specific context.
Canvas is static.
To give illusion of movement, use a loop to :
- clear the canvas content
- redraw elements

## Context
```javascript
const canvasContext = document.getElementById("myCanvas").getContext("2d");
```

## Draw elements
3 steps to follow :
- init the creation of a specific element
- draw the element
- close
```javascript
const canvasContext = document.getElementById("myCanvas").getContext("2d");

//1-INIT DRAW
canvasContext.beginPath();

//2-DRAW ELEMENTS
//rectangle
canvasContext.rect(positionX, positionY, width, height);
canvasContext.fillStyle = "#ff0000"; //define style
canvasContext.fill(); //apply style

//circle
canvasContext.arc(centerPositionX, centerPositionY, radius, 0, Math.PI * 2);
canvasContext.fillStyle = "#ff0000"; //define style
canvasContext.fill(); //apply style

//images
let ballImage = new Image(); //create an image object in Javacript
ballImage.src = "images/breakout-ball.png"; //set image path
canvasContext.drawImage(ballImage, positionX, positionY, width, height);

//3-END DRAW
canvasContext.closePath();

//EXEMPLE Draw rectangle :
canvasContext.beginPath(); //start draw on canvas
canvasContext.rect(100, 100, 50, 20); //define position and size
canvasContext.fillStyle = "#ff0000"; //define style
canvasContext.fill(); //apply style
canvasContext.closePath(); //end draw on canvas
```

## Clear Canvas
Will remove ALL drawn elements in this rect.
```javascript
canvasContext.clearRect(positionX, positionY, width, height)
```

## déplacement
let canvasObject {
	x : 
	ball :{
		moveX : 5
	}
};
const drawCanvas = function(canvasObject){
	canvasObject.ball.draw();
	canvasObject.x += canvasObject.ball.moveX;
};
canvasUpdate = setTimeout(function () {
	drawCanvas();
}, 10);

## Update Canvas
canvasUpdate = setTimeout(function () {
	drawCanvas();
}, 10);

- drawCanvas

	- clearRect

	- draw bricks

	- draw player

	- draw ball

	- draw score

	- draw life

	- détecter collisions

		- avec les bricks

			- inverser déplacement ball

			- supprimer brick

			- Si dernière brick : you win !

		- avec les murs

			- inverser déplacement ball

			- si mur du bas, perdre 1 vie

				- si plus de vie : game over !

		- avec le player

			- inverser déplacement ball
