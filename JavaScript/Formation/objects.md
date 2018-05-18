# Objects
const object = {
	key: value
};

## manage properties
const object = {
    property1: 1,
    property2: "2nd propery"
};

console.log(object);

object.property3 = {
        prop: ["1","2","3"]
}
console.log(object);
/*
object = {
    property1: 1,
    property2: "2nd propery",
	property3: {
        prop: ["1","2","3"]
	}
};
*/

## manage methods
object.property3.method = function(){
	return 3;
}
console.log(object);
/*
object = {
    property1: 1,
    property2: "2nd propery",
	property3: {
        prop: ["1","2","3"],
		method: function(){
			return 3;
		}
	}
};
*/

object["property4"] = true;
console.log(object);
/*
object = {
    property1: 1,
    property2: "2nd propery",
	property3: {
        prop: ["1","2","3"],
		method: function(){
			return 3;
		}
	},
	property4: true
};
*/

console.log(object.property1); // 1
console.log(object["property2"]); // "2nd property"
console.log(object.property3.method); // "function method()"
console.log( object.property3.method() ); // 3
console.log(Object.keys(object)); // ["property1","property2","property3","property4"]
console.log(Object.entries(object)); // [["property1","1"],["property2","2nd property"],["property3","{prop:["1","2","3"],method:function(){return 3;}}"],["property4","true"]];

delete object.property4;
console.log(object);
/*
object = {
    property1: 1,
    property2: "2nd propery",
	property3: {
        prop: ["1","2","3"],
		method: function(){
			return 3;
		}
	}
};
*/


## class
class = contructor ?

## prototypes
A prototype is the object from which an object is created.

let newOjbect = Object.create(object);
object is the prototype of newObject.
newObject and will always inherit all properties & methods from object.

console.log(newOjbect);
/*
__proto__ :
newObject = {
    property1: 1,
    property2: "2nd propery",
	property3: {
        prop: ["1","2","3"],
		method: function(){
			return 3;
		}
	}
};
*/

object.property5 = "newProperty";
console.log(newObject);
/*
__proto__ :
newObject = {
    property1: 1,
    property2: "2nd propery",
	property3: {
        prop: ["1","2","3"],
		method: function(){
			return 3;
		}
	},
	property5: "newProperty"
};
*/

## scope
object.property6 = this;
console.log(object.property6); // window