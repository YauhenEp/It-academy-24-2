function printName(name, greet = 'Hi') {
  return `${greet}, ${name}!`;
}

console.log(printName('Anna', 'hello'));

function add(num1, num2) {
  let s = 0;
  for(let i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}

// add(1, 3, 10, 10, 40, 50, 70)

console.log(add(1, 3, 10, 10, 40, 50, 70))
console.log(add(1, 2))

function add1(num1, num2, ...rest) {
  return rest.reduce((prev, cur) => cur + prev, num1 + num2);
}

console.log(add1(11, 11, 14, 15, 19, 10));

const arr = [10, 20, 30, 40]

const newArr = arr.reduce((prev, cur) => cur + prev, 15);
console.log(newArr);

const filterArray = arr.filter(num => num > 20)
console.log(filterArray);

let a;
function returnValue() {
  a = 10;
  return a;
}
returnValue();
console.log(a);

console.log(printName('Anton'));
console.log(printName('Gena', 'Bye'));