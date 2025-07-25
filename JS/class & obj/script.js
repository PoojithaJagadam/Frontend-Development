/* objects
let a = {
    "name" : "hello",
    "age" : "22"
}
console.log(a);

let animal = {
    eats: true
}
let rabbit = {
    walk: true
}
rabbit.__proto__ = animal;
console.log(rabbit.eats); */

//classes
//method overiding and inheritence
class Animal {
    constructor(name) {
        this.name=name;
        console.log("Object created");
    }
    eats() {
        console.log("ate ");
    }
    jumps() {
        console.log("Jumpss");
    }
}

class Lion extends Animal {
    eats() {
        super.eats();
        console.log("lion eats");
    }
}

let a=new Animal();
let l=new Lion("king");
console.log(l.name);
console.log(l.eats());

console.log(l instanceof Lion); //true
console.log(a instanceof Lion);//false
console.log(l instanceof Animal); //true

