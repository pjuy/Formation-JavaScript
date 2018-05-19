# Operators
## equal
"==" and "!=" will compare if values are equal or not.
"===" and "!==" will compare if both values AND types are equal or not.
So when comparing 2 values, always use the "===" operator.

```javascript
//Exemples
var number = 5;
var text = "5";
number == text; //return true
number === text; //return false

//Some exceptions
null == undefined; //return true
null === undefined; //return false

NaN === NaN; //return false - NaN (not a number) is still a Number
```

## truthy / falsy
if(variable){}; //test if variable return true
if(!variable){}; //test if variable return false

## conditional
### And
if( && ){

}
### Or
if( || ){

}
### Superior
if( > ){

}
### Inferior
if( < ){

}