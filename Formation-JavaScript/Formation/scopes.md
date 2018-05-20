# Scope

## functions
let globalVariable = "global";
let scopeOutside = function(){
	let outsideVariable = "outside";
	let scopeInside = function(){
		let insideVariable = "inside";
		console.log(globalVariable); //return "global"
		console.log(outsideVariable); //return "outside"
		console.log(insideVariable); //return "inside"
	}
	scopeInside();
	console.log(globalVariable); //return "global"
	console.log(outsideVariable); //return "outside"
	console.log(insideVariable); //throw an error "insideVariable is not defined"
}
scopeOutside();

## variables
let superHero = "SuperMan"; //variable global
let callHelp = function(heroName){
	return function(){
		//heroName = superHero at the time the function is stored in a variable
		console.log("It's " + heroName);
	}
}
let callSuperHero = callHelp(superHero);
callSuperHero(); //return "It's SuperMan"

superHero = "JavaScript Man"; //update global variable
callSuperHero(); //still return "It's SuperMan"
callHelp(superHero); //return "It's JavaScript Man"

## asynchronous
let superHero = "SuperMan"; //variable global

setTimeout(function(){
	console.log(superHero); // will not return "SuperMan"
},1000);

superHero = "JavaScript Man";


## this
Be careful when using 'this' inside a function. Each function has its own 'this'.
```javascript
//Don't
function test(){
	this.attribute = 0; //'this' refer to test()
	setTimeout(function test2(){
		this.attribute++; //'this' refer to test2() and attribute doesn't exists
	},100);
}

//Do
function test(){
	var thisContext = this;
	thisContext.attribute = 0;
	setTimeout(function test2(){
		//thisContext is what you expect
		thisContext.attribute++;
	},100);
}
```