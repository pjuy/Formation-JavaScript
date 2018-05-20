# Events
n.addEventListener(type, listener, options)
monElement.addEventListener('click', function(){
    console.log('yo');
})

## type
change
click/dblclick
keypress/keyup/keydown
input
load
mousedown/mouseup
scroll

### options
once : If true, the listener would be automatically removed when invoked.
element.addEventListener(type, listener, {once: true});

passive: if true, the listener will never call preventDefault();
element.addEventListener(type, listener, {passive: true});
