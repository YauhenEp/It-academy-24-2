const {  Carriage } = require('./carriage')

class PassengerCarriage extends Carriage {
  constructor(type, weight, carriageClass, maxNumberOfPassengers) {
    super(type, weight);
      this.maxNumberOfPassengers = maxNumberOfPassengers;
      this.carriageClass = carriageClass;
      this.numberOfPassengers = 0;
      this.numberOfLuggage = 0;
      this.weightOfLuggage = 0;
  }

  getMaxNumberOfPassengers() {
    return this.maxNumberOfPassengers;
  }

  getCarriageClass() {
    return this.carriageClass;
  }

  getNumberOfPassengers() {
    return this.numberOfPassengers;
  }

  getNumberOfLuggage() {
    return this.numberOfLuggage;
  }

  addPassengers() {
    this.numberOfPassengers++;
  }

  setPassengersNumber(numberOfPassengers) {
    this.numberOfPassengers += numberOfPassengers;
  }

  addLuggage() {
    this.numberOfLuggage++;
  }

  addLuggageWeight(luggageWeight) {
    this.weightOfLuggage += luggageWeight;
  }
}

module.exports = { PassengerCarriage };