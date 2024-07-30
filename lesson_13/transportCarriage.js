const { Carriage } = require('./carriage')

class TransportCarriage extends Carriage {
  constructor(type, weight, transportCarriageType, maxCargoWeight) {
    super(type, weight);
    this.carriageType = transportCarriageType;
    this.maxCargoWeight = maxCargoWeight;
  }
}

module.exports = { TransportCarriage };