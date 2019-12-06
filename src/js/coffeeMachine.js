import CommonDevice from './commonDevice';

class CoffeeMachine extends CommonDevice {
  constructor(name, power) {
    super(name);
    this._power = power;
    this._modes = ['espresso', 'cappuchino', 'americano'];
    this._currentMode = 0;
    this._ready = false;
  }

  get mode() {
    return this._modes[this._currentMode];
  }

  nextMode() {
    if (this._currentMode === this._modes.length - 1) {
      this._currentMode = 0;
    } else {
      this._currentMode++;
    }
  }

  previousMode() {
    if (this._currentMode === 0) {
      this._currentMode = this._modes.length - 1;
    } else {
      this._currentMode--;
    }
  }

  makeCoffee() {
    if (this._state) {
      const p = new Promise((resolve, reject) => {
        const makeTime = 20 * this._power;
        setTimeout(() => {
          resolve();
        }, makeTime);
      });
      p.then(() => (this._ready = true));
      p.then(() =>
        console.log(`Your ${this._modes[this._currentMode]} is ready`)
      );
    }
  }

  get ready() {
    return this._ready;
  }
}

export default CoffeeMachine;
