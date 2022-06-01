console.log('arrays')

const list = ['break', 'milk', 'orange'];

const array = [2, 3, 6, 7]

array.unshift(1);
// console.log(typeof array)

array.push(8)
// console.log(array)

array.splice(3, 0, 4, 5)
// console.log(array)


const grades = [110, 85, 99, 92, 89, 93, 91, 87]
grades.sort((a,b) => b - a)
console.log(grades)

const topFive = [...grades].splice(0, 5)
console.log(topFive)