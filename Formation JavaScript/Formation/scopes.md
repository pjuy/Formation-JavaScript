# Scope
## this
Be careful when using 'this' inside a function. Each function has its own 'this'.
```javascript
//Don't
function test(){
    this.attribute = 0;
    setTimeout(function test2(){
        //this doesn't refer to the previous this
        this.attribute++;
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