import Currency from './3-currency';

/* eslint-disable no-throw-literal */

export default class Pricing {
  constructor(amount, currency) {
    Pricing.verifyAmount(amount);
    Pricing.verifyCurrency(currency);
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    Pricing.verifyAmount(amount);
    this._amount = amount;
  }

  set currency(currency) {
    Pricing.verifyCurrency(currency);
    this._currency = currency;
  }

  static verifyAmount(amount) {
    if (typeof (amount) !== 'number') {
      throw ('TypeError: Amount must be a number');
    }
  }

  static verifyCurrency(currency) {
    if ((currency instanceof Currency) === false) {
      throw ('TypeError: Currency must be a currency');
    }
  }

  static verifyConversionRate(rate) {
    if (typeof (rate) !== 'number') {
      throw ('TypeError: Conversion rate must be a number');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    Pricing.verifyAmount(amount);
    Pricing.verifyConversionRate(conversionRate);
    return amount * conversionRate;
  }
}
