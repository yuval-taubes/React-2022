// JavaScript's arrays explained

// JavaScript's traditional 'arrays' aren't really arrays, in the usual computer
// science definition of a contiguos (all in a row) block of memory divided into
// fixed-size units. Instead, JS's traditional arrays are just objects, like all
// other objects, with special handling around property names that fit the spec's
// definition of an 'array index'

const numbers = [10, 20, 30, 40, 50 ]

for(let num of numbers){
    console.log(num)
}
for (let num in numbers){
    console.log(`${num}`)

}

const keys = Object.keys(numbers)
const values = Object.values(numbers)

console.log(keys, values)
