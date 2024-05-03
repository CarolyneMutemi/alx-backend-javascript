/* eslint-disable no-undef */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber tests', () => {
  it('Tests that it returns the right sum.', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
    assert.equal(calculateNumber('SUM', 1.1, 2), 3);
    assert.equal(calculateNumber('SUM', 1.7, 2.3), 4);
    assert.equal(calculateNumber('SUM', 1.1, -2.6), -2);
  });

  it('Tests that it returns the right difference.', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.equal(calculateNumber('SUBTRACT', 3, 2.1), 1);
    assert.equal(calculateNumber('SUBTRACT', -1.2, -2.3), 1);
  });

  it('Test that it returns the the right result after disivion.', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
  });

  it('Should return null if the type is not among the given three.', () => {
    assert.equal(calculateNumber('MULTIPLY', 1.2, 3, 5), null);
  });
});
