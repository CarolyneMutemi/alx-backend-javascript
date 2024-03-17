import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    Building.verifyIsNumber(floors);
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    Building.verifyIsNumber(floors);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
