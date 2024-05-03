/* eslint-disable no-undef */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber test', () => {
  it('tests the output of two whole numbers', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });

  it('tetsts the output of one decimal number and a whole number', () => {
    assert.equal(calculateNumber(1.3, 2), 3);
  });

  it('tests the output of two decimal numbers, one of them with the decimal part >= 5', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 2.0), 4);
  });

  it('tests the output of two decimal numbers, both of them with the decimal part < 5', () => {
    assert.equal(calculateNumber(1.1, 2.1), 3);
  });
});
