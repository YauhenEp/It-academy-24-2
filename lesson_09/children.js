const { Person } = require('./obj')

class Children extends Person {
  constructor(name, age, lastname) {
    super(name, age);
    this.lastname = lastname;
  }

  toString() {
    return `${this.name} ${this.age}`
  }
}


const child = new Children('Dasha', 18, 'Ivanova')
// console.log(child);
//
// console.log(child.printName());
//
// console.log(Object.keys(child));
// console.log(Object.values(child));
// console.log(Object.entries(child));

Object.defineProperty(child, 'car', {
  value: 'Toyota',
  writable: false,
  configurable: false,
  enumerable: false
})

console.log(child.car);
child.car = 'Audi';
console.log(child.car);
console.log(child);
for(let key in child) {
  console.log(child[key])
}

delete child.car;
console.log(child);
console.log(child.car);

console.log(Object.isFrozen(child))
Object.freeze(child)
console.log(Object.isFrozen(child))
Object.freeze(child)
console.log(Object.isFrozen(child))