const str = 'string';
const str1 = "string1";
const str2 = `string2`;

function sayHi(name, surname, addition) {
  console.log('Hello, ' + name + ' ' + surname + '! ' + 'How are you? ' + addition);
}

sayHi('Dasha', 'Petrova', 'I love you!')

function sayHiBackSticks(name, surname, addition) {
  console.log(`Hello, ${name} ${surname}! How are you? ${addition}`);
}

sayHiBackSticks('Dasha', 'Petrova', 'I love you!')

const num = 123;
const num1 = 123.34324;
const bigNum = 48328343209843289423094320943943948934394893485542545454n;

console.log(bigNum);

const bool = true;
const bool2 = false;

let und;
let und1 = undefined;

console.log('und - ', und)
console.log('und1 - ', und1)

const n = null;

const symb = Symbol('asd');
const symb1 = Symbol('asd');

console.log('symb === symb1 ', symb === symb1);

const symb2 = Symbol.for('aaa');
const symb3 = Symbol.for('aaa');

console.log('symb2 === symb3 ', symb2 === symb3);

const obj = {
  name: 'Yauhen',
  surname: 'Bialetski',
  age: 35,
};


console.log(typeof str);
console.log(typeof symb);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof obj);
console.log(typeof num);
console.log(typeof bigNum);

console.log('null - ', typeof n);

console.log('str1.endsWith(\'ng\') --- ', str1.endsWith('ng1'))