import Building from './5-building';
// this is a module that defines a skyHighBuilding class

export default class SkyHighBuilding extends Building {
  constructor(sqftInput, floorsInput) {
    super(sqftInput);
    this.floors = floorsInput;
  }

  // sets the number of floors
  set floors(floorsInput) {
    if (typeof floorsInput !== 'number') throw TypeError('floorsInput must be a number');
    this._floors = floorsInput;
  }

  // gets the number of floors
  get floors() {
    return this._floors;
  }

  // overides the original function in the base class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
