/* eslint-disable class-methods-use-this */

export default class Building {
  constructor(sqft) {
    Building.verifyIsNumber(sqft, 'Square feet');
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  static verifyIsNumber(attribute, attributeName) {
    if (typeof (attribute) !== 'number') {
      throw new Error(`TypeError: ${attributeName} must be a number`);
    }
  }

  get sqft() {
    return this._sqft;
  }
}
