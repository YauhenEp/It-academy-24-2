class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  get #getName() {
    return this.name
  }

  printName () {
    return this.#getName
  }
  get getAge() {
    return this.age;
  }

  set setAge(age) {
    this.age = age;
  }
}

module.exports = { Person }