// this is a module that defines an Airport class

export default class Airport {
  constructor(nameInput, codeInput) {
    this.name = nameInput;
    this.code = codeInput;
  }

  // sets the airport name
  set name(nameInput) {
    if (typeof nameInput !== 'string') throw TypeError('nameInput must be a string');
    this._name = nameInput;
  }

  // gets the airport name
  get name() {
    return this._name;
  }

  // sets the airport code
  set code(codeInput) {
    if (typeof codeInput !== 'string') throw TypeError('codeInput must be a string');
    this._code = codeInput;
  }

  // gets the airport code
  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
