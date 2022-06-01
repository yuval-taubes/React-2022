'use strict';

/*
    this represents an object that executes the current function. In short this 
    is defined by the function eecution context
*/

function regular() {
    console.log(this)
}
// in strict mode this is undefined
//normally this represents the 'global/window' object
regular()

//arrow function
// arrow functions inherit this from the parent scope
const arrow = () => {
    console.log(this)
}

arrow()