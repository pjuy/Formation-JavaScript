# Functions
```javascript
//best practice, useful if function return some value
let myFunction = function(){
	//code here...
};

//classic way, hard to retrieve returned values
function myFunction(){
	//code here...
}

//global way, function accessible from anywhere
window.myFunction = function(){
	//code here...
};
```

## 1 action, 1 function
A function should only do one action to easily understand and update the code afterwards.
Instead of using complex functions doing multiple tasks, create several small functions doing one task.
``` JavaScript
// Don’t :
window.calculateControleAndPasteFieldValue = function(calculField1, calculField2, resultField){
	//Controle field value
	//code here...

	//Calculate Fields
	//code here...

	//Paste calcul value
	//code here...
};
calculateControleAndPasteFieldValue();

// Do :
window.calculateFieldValue = function(calculField1, calculField2){
	//code here...
};
window.controleFieldValue = function(fieldValue){
    //code here...
};
window.pasteFieldValue = function(fieldValue, pasteField){
    //code here...
};
```

## Errors and Controls
Basically, all controls should be done inside the function and not outside.
If something prevents the function from working properly, it should still return an error message.

If it is purely technical it should be transparent for the user (displayed in the console for example).
``` JavaScript
// Exemple :
//test if fields exists
if(field){
	//Do Something
}else{
	console.log("function name - field not found");
}
```

You can enter different kind of messages in the console with a slightly different look.
``` javascript
console.log("this is a classic error message");
console.warn("This is an important message");
console.info("This is an informative message");
```

If it is a functional issue it should warn the user with an alert.
``` JavaScript
// Exemple :

//test field value
if(field.getValue() < 1000 ){
	alert("field value can't be inferior than 1000");
}else{
	//Do something
}
```

Also make sure to use a clear message which indicates which function and which part of it failed.

## Make your functions global
We never know when a function will be useful in other cases.
When you create a function, make sure this function is generic and accepts arguments which make it reusable rather than creating static variables inside.
``` JavaScript
// Don’t :
let calculateField3 = function(){
    //declare variables
	let field1 = document.getElementById("input1");
	let field2 = document.getElementById("input2");
	let field3 = document.getElementById("input3");
    if(field1.value !== “” && field2.value !== “”){
        field3.value = field1.value+field2.value;
    }
};
calculateField3();

// Do :
window.calculateFields = function(field1,field2,fieldResult){
    if(fieldCalc1.value !== “” && fieldCalc2.value !== “”){
        fieldResult.value = field1.value+field2.value;
    }
};
calculateFields(document.getElementById("input1"),document.getElementById("input2"),document.getElementById("input3"));
```

## Avoid comments
If you need to insert commentary, it might be that your code is not clear enough.
So make sure your variable and functions name are logical and precise.
```javascript
//Don't
/* Function to calculate annual Salary */
let newFunction = function(field1,field2){
    //test if 'monthly salary' & 'number of months' exists
    if(field1 && field2){
        //calculate annual Salary
        var result = parseFloat(field1.value)*parseFloat(field2.value);

        //return annual Salary if the result is a number
        return Number.isNaN(result) ? "" : result;
    }
};

//Do
let calculateAnnualSalary = function(monthlySalary,workingMonthsNumber){

	if(monthlySalary && workingMonthsNumber){
		let annualSalary = parseFloat(monthlySalary.value)*parseFloat(workingMonthsNumber.value);
		return Number.isNaN(total) ? "" : total;
	}

};
```

## The perfect function
``` JavaScript
// Exemple :
const testField = function(){

	for(let a=0; a<arguments.length; a++){
		if(!arguments[a]){
			console.warn("field doesn't exists");
			return false;
		}
	}
	return true;
};

const testIfValueIsNumber = function(){

	for(let a=0; a<arguments.length; a++){

		if(arguments[a].value === ""){
			console.log("field "+arguments[a].name+" is empty");
			return false;
		}else{
			let fieldValue = parseFloat(arguments[a].value);
			if(Number.isNaN(fieldValue) === true){
				console.log("field "+arguments[a].name+" value is not a number");
				return false;
			}
		}
		return true;
	}

};

const additionFields = function(){

	let total = 0;

	for(let a=0;a<arguments.length;a++){

		if(testField(arguments[a]) && testIfValueIsNumber(arguments[a])){
			total += parseFloat(arguments[a].value);
		}

	}

	return Number.isNaN(total) ? "" : total;
};

```