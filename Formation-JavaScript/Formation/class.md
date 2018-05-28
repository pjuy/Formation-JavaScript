# Objects
Object = Collection of properties (key : value) and methods (functions).

```javascript
const object = {
	key: value, //property
	method: function(){} //method
};
object.key; //return key value
object.method(); //will call the method. Return method result.
```

## use class
Class always start with a caps.

```javascript
class ClassName {
	constructor(firstName, birthDate){
		this.firstName = firstName;
		this.birthDate = birthDate;
	}
};
```

## methods
```javascript
class ClassName {
	constructor(firstName, birthDate){
		this.firstName = firstName;
		this.birthDate = birthDate;

		method(){
			return "method";
		}
	}
};
console.log(ClassName.method()); //return "method"
```

## get/set
Allow to call methods witout '()'.
get accept no argument.
set accept only 1 argument.
```javascript
class ClassName {
	constructor(firstName, birthDate){
		this.firstName = firstName;
		this.birthDate = birthDate;

		get getter(){
			return "getter";
		}
		set setter(argument){
			return "setter";
		}
	}
};
console.log(ClassName.getter); //return "getter"
console.log(ClassName.setter); //return "setter"
```

## add methods after initiation
```javascript
ClassName.prototype.newMethod = function(){};

Object.defineProperty(ClassName.prototype, "newPrototypeGetter",{
	get: function(){
		return "new prototype getter";
	}
});
```
