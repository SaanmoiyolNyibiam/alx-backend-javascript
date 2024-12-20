// this is a module that defines a Currency class

export default class Currency {
  constructor(codeInput, nameInput) {
    this.code = codeInput;
    this.name = nameInput;
  }

  // sets the currency code
  set code(codeValue) {
    this._code = codeValue;
  }

  // gets the currency code
  get code() {
    return this._code;
  }

  // sets the currency name
  set name(nameValue) {
    this._name = nameValue;
  }

  // gets the currency name
  get name() {
    return this._name;
  }

  // return the attributes in the following format name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
