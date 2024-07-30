import { Car } from './car';
class Sedan extends Car {
  constructor(color: string, model: string) {
    super(color, model);
  }

  // private setColor(color: string): void {
  //   this.color = color;
  // }
  public setNewColor(color: string): void {
    this.setColor(color)
  }
}

// console.log(Sedan.color)
const sedan: Sedan = new Sedan('yellow', 'camry');
// console.log(sedan.color)

console.log(sedan.getColor())
sedan.setNewColor('black');
console.log(sedan.getColor())