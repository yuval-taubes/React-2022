const number = [17, 34, 23, 45, 49]

Object.freeze(numbers)

if(!Object.isFrozen(number)){
    numbers.splce(0, 8, 2, 5, 6, 7 )
}