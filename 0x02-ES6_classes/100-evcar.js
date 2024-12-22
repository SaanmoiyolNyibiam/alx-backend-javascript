/* eslint-disable class-methods-use-this */
import Car from './10-car';
// this is a module that defines an EVCar class

export default class EVCar extends Car {
  constructor(brandInput, motorInput, colorInput, rangeInput) {
    super(brandInput, motorInput, colorInput);
    this._range = rangeInput;
  }

  // overrides the clone method for the base class
  cloneCar() {
    return new Car();
  }
}
