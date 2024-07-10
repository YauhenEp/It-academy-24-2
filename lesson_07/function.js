console.log(multiply(130, 54))

function multiply(num, num1) {
  return num * num1;
}

console.log(multiply(10, 20));

// console.log(divide(100, 20));
let divide = function (divider, div) {
  return divider / div;
}

console.log(divide(100, 20));

(function () {
  console.log('Im self-Invoked')
})();

// ()();

const arr = [20, 30, 40, 50];

const newArr = arr.map(num => num * 2)
const newArr3 = arr.map((num, i) => {
  // some code
  return num * 2
})
const newArr2 = arr.map(function (num) {
  return num * 2
})
console.log(newArr)
console.log(newArr2)

let newArr1= [];
arr.forEach(function (num) {
  newArr1.push(num * 2);
})
console.log(newArr1);

function Person(name, lastname, age) {
  this.name = name;
  this.lastName= lastname;
  this.age = age;
}

let person = {
  name: 'Yauhen',
  printName: function () {
    console.log(`Name is ${this.name}`)
  },
  printInformation: function (one, two, three) {
    console.log(`${this.name} ${one} ${two} ${three}`)
  }
}

let person1 = {
  name: 'Dasha',
  getName: () => {
    console.log(`Name is ${this.name}`)
  }
}

let person2 = {
  name: 'Egor'
}

person.printName();
person1.getName();

person.printName.call(person2, null)
person.printInformation.call(person2, 'first time', 'second time', 'now');
person.printInformation.apply(person2, ['first time', 'second time', 'now']);
const callFunction = person.printInformation.bind(person2, 'first time', 'second time', 'now');

callFunction();
callFunction();
callFunction();

person.printName(person2.name);



