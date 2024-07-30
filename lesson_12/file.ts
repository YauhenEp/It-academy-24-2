import {Person} from "./abstractClass";

function add(num: number, numTwo: number): number {
  return num + numTwo;
}

console.log(add(20, 30));

let num: number | string = 20;
num = 's';

let arr: [number, boolean, string] = [10, false, 'str'];
let arr1: any[] = [10, false, 'str'];

const obj: object = {};

interface ICar {
  readonly color: string,
  numberOfWheels: number,
  numberOfPasagers: number,
  engine: string,
  tuning?: boolean,
  transmission: ITransmission,
  move: (speed: number, hour: number) => void,
}

const car: ICar = {
  color: 'blue',
  numberOfPasagers: 4,
  numberOfWheels: 4,
  engine: 'V6',
  tuning: false,
  transmission: {
    auto: true,
    type: 'super',
    numberOfGear: 7
  },
  move: (speed: number, hour: number) => {
    console.log(speed * hour)
  }
}

interface ITransmission {
  auto: boolean,
  type: string,
  numberOfGear: number
}

interface ISedan extends ICar {
  lamp: string
}

const sedan: ISedan = {
  color: 'blue',
  numberOfPasagers: 4,
  numberOfWheels: 4,
  engine: 'V6',
  tuning: false,
  transmission: {
    auto: true,
    type: 'super',
    numberOfGear: 7
  },
  lamp: 'svetodeod',
  move: (speed: number, hour: number) => {
    console.log(speed * hour)
  }
}

type Person = {
  name: string,
  surname: string,
  age: number
}

type Admin = {
  name: string,
  surname: string,
  access: boolean
}

type User = Person | Admin;

const user: User = {
  name: 'string',
  surname: 'string',
  // age: 32,
  access: true
}