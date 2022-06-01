const numbers = [1, 2, 3,4, 5]
const [a, b, c, d, e] = numbers

console.log(a, c, e)



const names = ['george', 'paul', 'john' , 'ringo']
const [first, second, ...third] = names
console.log(first, second, third)