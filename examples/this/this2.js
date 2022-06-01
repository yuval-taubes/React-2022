'use strict'

const person = {
    name:'Samantha Quinn',
    message: function() {
        return `welcome, ${this.name}`
    }
};

//this refer to the person object
console.log(person.message())

const employee = {
    name: 'john smith',
    message: () => {
        return `Welcome, ${this.name}`
    }
}

/*
    this in regular function always refers to teh conext of the function beign called.
    However, in the arrow function, this has nothing to do with the caller of the funtion. 
    It refers to the sceope where the unction (the encolosing context) is present. That why the output
    is undefined
*/
console.log(employee.message())