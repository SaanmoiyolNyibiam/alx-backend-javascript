// this is a module that defines a building class

export default class Building {
  constructor(sqftInput) {
    if ((this.constructor !== Building) && (
      this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqftInput;
  }

  // sets sqft
  set sqft(sqftInput) {
    if (typeof sqftInput !== 'number') throw TypeError('sqft must be a number');
    this._sqft = sqftInput;
  }

  // gets sqft
  get sqft() {
    return this._sqft;
  }

  // an abstract method
  evacuationWarningMessage() {
    this._message = 'This method must always be overidden';
    return this._message;
  }
}
