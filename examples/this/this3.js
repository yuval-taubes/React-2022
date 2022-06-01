'use strict';

const zooOne = {
    animals: ['giraffe', 'lion', 'panda', 'tiger'],
    print: function(delay = 1000){
        setTimeout(function() {
            //this is undefined here
            console.log(this.animals)
        })
    },
};

const zooTwo = {
    animals: ['giraffe', 'lion', 'panda', 'tiger'],
    print: function(delay = 1000){
        setTimeout(() => {
            console.log(this.animals.join(', '))
        })
    },
};
zooOne.print()
zooTwo.print()
