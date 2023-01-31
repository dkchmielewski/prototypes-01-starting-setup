// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     name = 'Max';

//     constructor() {
//         super();
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hello my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

// const person = new Person();
// person.greet();

function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function() {
        console.log('Hello my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

const person = new Person();
person.greet();

Person.prototype.printAge = function() {
        console.log(this.age);
};

console.dir(Person);
const p = new Person();
p.greet();
p.printAge();
console.log(p.length);
console.log(p.toString());
console.log(p.__proto__);
const p2 = new p.__proto__.constructor();
console.dir(Object.prototype.__proto__);