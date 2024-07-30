const { PassengerCarriage } = require('./passengerCarriage')

class Train {
  constructor() {
    this.train = [];
  }

  addCarriage(carriage) {
    this.train.push(carriage);
  }

  getPassengersNumber() {
    return this.train.reduce((acc, next) => acc.numberOfPassengers + next.numberOfPassengers)
  }
}

const train = new Train();
const carriageNumberOne = new PassengerCarriage('passengers', 2000, 'Cupe', 96);
carriageNumberOne.setPassengersNumber(80)
const carriageNumberTwo = new PassengerCarriage('passengers', 2000, 'Platzkart', 78);
carriageNumberTwo.setPassengersNumber(54)
train.addCarriage(carriageNumberOne);
train.addCarriage(carriageNumberTwo);


console.log(train.getPassengersNumber())