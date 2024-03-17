/* eslint-disable class-methods-use-this */

export default class Building {
  constructor(sqft) {
    Building.verifyIsNumber(sqft, 'Square feet');
    this._sqft = sqft;
    this.constructor.ensureMethodIsOverridden();
  }

  static verifyIsNumber(attribute, attributeName) {
    if (typeof (attribute) !== 'number') {
      throw new Error(`TypeError: ${attributeName} must be a number`);
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    Building.verifyIsNumber(sqft, 'Square feet');
    this._sqft = sqft;
  }

  evacuationWarningMessage() {}

  static ensureMethodIsOverridden() {
    if (!Object.hasOwn(this.prototype, 'evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
