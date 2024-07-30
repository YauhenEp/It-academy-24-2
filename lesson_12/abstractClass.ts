export abstract class Person {
  private name: string;
  private lastName: string;
  private age: number;
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`
  }

  set newAge(age) {
    this.age = age;
  }

  abstract sayHi(): string;
}
