const numbers = [10, 15, 25]

function add(x, y, z) {
    return x + y + z
}

console.log(`total: ${add(...numbers)}`);

const end = [4, 5, 6]
const all = [1, 2, 3, ...end]
console.log(all)

function print(first, second, ...rest){
    console.log(`${first}, ${second}`)
    console.log(rest)
}
print(1, 2, 3, 4, 5, 6, 7, 8, 9)