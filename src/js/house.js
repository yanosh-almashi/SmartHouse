class House {
  constructor(name) {
    this._name = name;
    this._deviceList = new Map();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  _isUnique(name) {
    return !this._deviceList.has(name);
  }

  addDevice(device) {
    if (this._isUnique(device.name)) {
      this._deviceList.set(device.name, device);
    } else console.log(`name's already taken`);
  }

  get devices() {
    return this._deviceList;
  }

  getDeviceByName(name) {
    return this._deviceList.get(name);
  }

  onAll() {
    for (const value of this._deviceList.values()) {
      value.on();
    }
  }

  offAll() {
    for (const value of this._deviceList.values()) {
      value.off();
    }
  }

  deleteAllDevices() {
    this._deviceList.clear();
  }

  deleteDeviceByName(name) {
    this._deviceList.delete(name);
  }
}

export default House;
