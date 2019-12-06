import CommonDevice from './commonDevice';

class AirConditioner extends CommonDevice {
  constructor(name, minTemperature, maxTemperature, step) {
    super(name);
    this._currentTemperature = 0;
    this._minTemperature = minTemperature;
    this._maxTemperature = maxTemperature;
    this._step = step;
  }

  increaseTemperature() {
    if (this._currentTemperature + this._step > this._maxTemperature) {
      this._currentTemperature = this._maxTemperature;
    } else {
      this._currentTemperature += this._step;
    }
  }

  decreaseTemperature() {
    if (this._currentTemperature - this._step < this._minTemperature) {
      this._currentTemperature = this._minTemperature;
    } else {
      this._currentTemperature -= this._step;
    }
  }

  get currentTemperature() {
    return this._currentTemperature;
  }
}

export default AirConditioner;
