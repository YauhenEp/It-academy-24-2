function Person(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

const person = new Person('Yauhen', 'B', 35)
console.log(person)