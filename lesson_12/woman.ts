import { Person } from "./abstractClass";

class Woman extends Person {
  constructor(name: string, lastName: string, age: number) {
    super(name, lastName, age);
  }


}

const woman: Woman = new Woman('Dasha', 'Ivanova', 18);
console.log(woman)