/***
MENU
****/
/*
CREATE MENU
- new menu item constructor
	> class
	> id
	> title
	> onclick event listener
- function to generate menu
- function call
*/

/***************
Game Construtors
****************/
/*
REINIT GAME INTERFACE
- remove banner
- remove game interface
- eventually clear timeout
- eventually clear interval
*/

/*
CRATE GAME BANNER
- game banner constructor
	> background
	> title
- function to generate banner

/*
CREATE GAME INTERFACE
- constructor for canvas game interface
	> only canvas board
- constructors for div game interface
	> div header
	> div board

- create game object constructor with games common properties and no methods
*/

/**********
MEMORY GAME
***********/
/*
MEMORY GAME OBJECT
- create memory game object
	> header
	> board
	> timer
	> score
	> cards list
	> pair number
	> cards number
	> flip time

- method draw header
- method draw score
- property timer
	> method draw
	> method start
	> method update
	> method stop

- method draw board
- property cards
	> method create
	> method draw
	> method select
	> method win
*/

/*
DRAW MEMORY GAME
- draw header
- draw score
- draw timer
- draw board
- draw cards
*/

/*
INIT MEMORY GAME
- reinit game environment
- draw banner
- create memory game object
- launch game
*/

/************
BREAKOUT GAME
*************/
/*
BREAKOUT GAME OBJECT
- create breakout game object
	> bricks
	> paddle
	> canvas context
	> life

- ball property
	> radius
	> move
	> ball methods :
		> draw

- paddle property
	> position
	> paddle methods :
		> draw
- add event listener on mouse
	> when mouse move, update paddle position

- bricks property
	> width
	> height
	> bricks methods :
		> init level
		> draw level
		> detect collisions

- method draw score
- method draw life
*/

/*
DRAW BREAKOUT GAME
- redraw canvas on a loop :
	> clear canvas
	> drawLevel
	> draw ball
	> draw paddle
	> draw score
	> draw life
	> detect bricks collision
	> detect wall collision
	> detect paddle collision
	> detect life losing or game over
	> update ball position
*/

/*
INIT BREAKOUT GAME
- reinit game environment
- draw banner
- create breakout game object
- init level
- launch canvas creation loop
*/