// class Person {
//     name = 'Max';

//     constructor() {
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

Person.prototype = {
    printAge() {
        console.log(this.age);
    }
};

console.dir(Person);
const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__ === Person.prototype);