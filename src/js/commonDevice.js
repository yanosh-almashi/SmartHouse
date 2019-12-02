class CommonDevice {
  constructor(name) {
    this._name = name;
    this._state = false;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  on() {
    this._state = true;
  }

  off() {
    this._state = false;
  }

  get state() {
    return this._state;
  }
}

export default CommonDevice;
