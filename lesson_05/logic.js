const age = 41

if(age >= 18 && age <= 40) {
  console.log('Everything is good')
} else if (age > 40 ) {
  console.log('more than 40')
} else {
  console.log('less than 18')
}

age > 18 ? console.log('OK we can go walk') : console.log('Sorry its too late');

// function Person(name, lastname, age) {
//   this.name = name;
//   this.lastName= lastname;
//   this.age = age;
// }
//
// const person = new Person('Dasha', 'Petrova', 18)
// console.log(person)
const month = 3;
switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break
  case 4:
    console.log('April');
    break;
  default:
    console.log('there no month number ' + month + ' please input another number')
    break;
}