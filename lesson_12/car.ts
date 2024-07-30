class Car {
  private color: string;
  private readonly model: string;
  constructor(color: string, model: string) {
    this.color = color;
    this.model = model;
  }

  public getColor(): string {
    return this.color;
  }

  protected setColor(color: string): void {
    this.color = color;
  }

  // protected setModel(model: string): void {
  //   this.model = model;
  // }
}

const car: Car = new Car('white', 'rav4')
// console.log(car.color);
console.log(car.getColor());

// console.log(car.setColor())


export { Car };