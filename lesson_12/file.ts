function add(num: number, numTwo: number): number {
  return num + numTwo;
}

console.log(add(20, 30));

let num: number | string = 20;
num = 's';

let arr: [number, boolean, string] = [10, false, 'str'];
let arr1: any[] = [10, false, 'str'];

const obj: object = {};

interface Car {
  color: string,
  numberOfWheels: number,
  numberOfPasagers: number,
  engine: string,
  tuning?: boolean
}

const car: Car = {
  color: 'blue',
  numberOfPasagers: 4,
  numberOfWheels: 4,
  engine: 'V6',
  tuning: false
}