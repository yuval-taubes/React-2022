const person = {
    name:'Jerry Doyle',
    age:45,
    city: 'winnipeg'


}

console.log(person)

const {name1, age, city} = person;

const library = {
    render: () => console.log('Rendered'),
    save: () => console.log('saved'),
    push: () => console.log('pushed')

}

const {render, push : notify} = library
render()
notify()