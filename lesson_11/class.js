class Car {
  add() {
    return 1 + 2;
  }

  static minus() {
    return 2 - 1;
  }
}

const str = 'hello';

const car = new Car();
console.log(car.add());

console.log(Car.minus());
