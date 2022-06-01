'use strict'

const zoo = ['lion', 'eel', 'zebra', 'elephant', 'tiger', 'emu']

// the filter() method - creates a new array with all elements that pass the
// test implemented by the provided function

const condition = animal => animal.toLowerCase().startsWith('e');
const animals = zoo.filter(condition);
console.log(animals.join(', '))

//react example
// let newPosts = posts.filter(post => post.title.includes('react'))

//the map() method - creates a new array populated with the results of calling
// a provided function on every element in the callig array

const names = ['john', 'anthony', 'mary', 'patrick']
const capitalize = name => name[0].toUpperCase() + name.slice(1)
const capNames = names.map(capitalize)
console.log(capNames.join(', '));


//reduce method - takes a collection of items and reduces the down into one valve

const numbers = [11, 22, 33, 44, 55]
const reducer = (accumulator, element) => accumulator + element;

const total = numbers.reduce(reducer, 0)
console.log(total);

