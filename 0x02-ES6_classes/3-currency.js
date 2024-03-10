/* eslint-disable no-throw-literal */

export default class Currency {
  constructor(code, name) {
    Currency.verifyCode(code);
    Currency.verifyName(name);
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  set code(code) {
    this._code = code;
  }

  static verifyCode(code) {
    if (typeof (code) !== 'string') {
      throw ('TypeError: Code must be a string');
    }
  }

  static verifyName(name) {
    if (typeof (name) !== 'string') {
      throw ('TypeError: Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
