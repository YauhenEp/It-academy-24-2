class Carriage {
  constructor(type, weight) {
    this.type = type;
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }

  addWeight(itemWight) {
    this.weight += itemWight;
  }

  getCarriageType() {
    return this.type;
  }
}

module.exports = { Carriage };