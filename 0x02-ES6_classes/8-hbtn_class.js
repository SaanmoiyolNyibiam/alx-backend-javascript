// this is a module that defines an ALXClass class

export default class ALXClass {
  constructor(sizeInput, locationInput) {
    this.size = sizeInput;
    this.location = locationInput;
  }

  // sets the alxclass size
  set size(sizeInput) {
    if (typeof sizeInput !== 'number') throw TypeError('sizeInput must be a number');
    this._size = sizeInput;
  }

  // gets the alxclass size
  get size() {
    return this._size;
  }

  // sets the alxclass location
  set location(locationInput) {
    if (typeof locationInput !== 'string') throw TypeError('locationInput must be a strung');
    this._location = locationInput;
  }

  // gets the alxclass location
  get location() {
    return this._location;
  }

  // override the toString method of the class
  toString() {
    return this._location;
  }

  // override the valueOf method of the class
  valueOf() {
    return this._size;
  }
}
