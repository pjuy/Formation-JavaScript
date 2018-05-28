# array
Numbered indexes.

## declare new array
```javascript
//empty
let array = []; //Good practice
let array = new Array();
//with values
let array = ["string",10,object{},otherArray[];
let array = new Array("string",10,object{},otherArray[]);
```

## loop
```javascript
for(let a=0; a<array.length; a++>){
	array[a];
}
```

## Methods
### add values
```javascript
//text
let textArray = ["ananas","banane","cerise"];
textArray.push("date"); //return ["ananas","banane","cerise","date"]
textArray[textArray.length] = "fraise"; //return ["ananas","banane","cerise","date","fraise"]

let numberArray = [0,10,100];
textArray.push(20,200); //return [0,10,100,20,200]
textArray[textArray.length] = 1000; //return [0,10,100,20,200,1000]
```

### sort
Basically convert datas in string, and use unicode index to sort array.
```javascript
let textArray = ["banane","ananas","fraise","date","cerise"];
textArray.sort(); //return ["ananas","banane","cerise","date","fraise"]

let numberArray = [0,10,100,20,200,1000];
numberArray.sort(); //return [0,10,100,1000,20,200]
```

To properly sort numbers, use an anonymous sorting function.
```javascript
let numberArray = [0,10,100,20,200,1000];
numberArray.sort(function(a,b){
	return a-b;
}); //return [0,10,20,100,200,1000]

numberArray.sort(function(a,b){
	return b-a;
}); //return [1000,200,100,20,10,0]
```

## test
typeof array; //return object
Array.isArray(array); //return true
