class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      'Hello my name is ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

// const person = new Person();
// person.greet();

// function Person() {
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function() {
//         console.log('Hello my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

// const person = new Person();
// person.greet();

// Person.prototype.printAge = function() {
//         console.log(this.age);
// };

// console.dir(Person);
// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// console.log(p.__proto__);
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

const course = {
  //new Object()
  title: 'JS Guide',
  rating: 5,
};
console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
});

student.printProgress();

console.log(student);

course.printRating();
