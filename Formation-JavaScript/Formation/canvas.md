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
```
