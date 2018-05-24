# Data types
There are actually 8 data types in JavaScript divided in primitive data and complex data.

## Primitive Data
A primitive data is a data which is not an object and which have no method.
- Boolean
- Null
- Number
- String
- Symbol (ECMAScript 6)
- Undefined

## Complexe Data
- Function
- Object

All existing JavaScript values will have one of thee data types.
To test a data type :
- typeof myData; > will return the data type (exemple : typeof "text"; return string)
- myData === datatype; > will return true or false (exemple : null === null; return true)

## Boolean
let boolean = true;

### test
``` javascript
let boolean = true;
if(boolean){
	//do something...
}
```

## Null
When can we have a null ???
Difference between null and undefined ?

### test
**/!\ Exception : **
```javascript
let dataNull = null;
typeof dataNull; //return "object"
```

So always us :
dataNull === null;

## Number
let number = 100;

### Test
**/!\ Exception : **
JavaScript can some times return 'NaN' (Not a Number).
```javascript
//Exemple :
let number = 100; //return a number
let notNumber = parseFloat(""); //return NaN.

//Issue :
typeof number; //return number
typeof notNumber; //also return number...

//Solution :
Number.isNan(notNumber); //return true if NaN
Number.isNan(number); //return false if type is a number
```

## String
let text = "some text";

### Methods
#### Search
```javascript
let text = "some text";
text.search("t");
```

#### Replace
```javascript
let text = "some text";
text.replace("t","n");
```

### Test
``` javascript
let text = "some text";
if(typeof text){
	//do something...
}
```

## Symbols
Appear in ECMA Script 6.
What use for ?

## Undefined
Difference between null and undefined ?

### test
```javascript
let dataUndefined;
typeof dataUndefined; //return "undefined"
dataUndefined === undefined; //return true
```

## Typeof
To detect the type of a value, you can use the typeof method. But here again we have exceptions and need to be careful.

```javascript
//Exemples
typeof 5; //return "number"

let number = 5;
typeof number; //return "number"

let text = "5";
typeof text; //return "string"

let functionName = function(){};
typeof functionName; //return "function"
typeof Array; //return "function"
typeof Map; //return "function"

//Exceptions

typeof object; //return "object" too
//solution to test an object :
//Object(x) === x > return true only for objects;
let dataObject = {};
let dataNull = null;
Object(dataObject) === dataObject; //return true
Object(dataNull) === dataNull; //return false
//solution to test null :
let dataNull = null;
dataNull === null; //return true

typeof NaN; //return "number"
//solution to test if NaN :
let notNumber = NaN;
Number.isNan(notNumber); //return true
```

[typeof list](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof)
