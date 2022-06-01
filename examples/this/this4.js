'use strict'

const user = {
    name: 'eddie smith',
    print: function() {
        console.log(this.name)
        let self = this
        function innerFunction(){
            console.log(self.name)
        }
        innerFunction()
    }
};

user.print();

const user2 = {
    name: 'patrick smith',
    print: function() {
        console.log(this.name)
        const innerFunction = () => {
            console.log(this.name)
        }
        innerFunction()
    }
};

user2.print();