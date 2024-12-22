// this is a module that defines a Car class

export default class Car {
  constructor(brandInput, motorInput, colorInput) {
    this.brand = brandInput;
    this.motor = motorInput;
    this.color = colorInput;
  }

  // sets the brand of the car
  set brand(brandInput) {
    // if (typeof brandInput !== 'string') throw TypeError('brandInput must be a string');
    this._brand = brandInput;
  }

  // gets the brand of the car
  get brand() {
    return this._brand;
  }

  // sets the motor of the car
  set motor(motorInput) {
    // if (typeof motorInput !== 'string') throw TypeError('motorInput must be a string');
    this._motor = motorInput;
  }

  // gets the motor of the car
  get motor() {
    return this._motor;
  }

  // sets the color of the car
  set color(colorInput) {
    // if (typeof colorInput !== 'string') throw TypeError('colorInput must be a string');
    this._color = colorInput;
  }

  // gets the color of the car
  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
