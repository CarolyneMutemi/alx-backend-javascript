/* eslint-disable no-undef */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber tests', () => {
  it('Tests that it returns the right sum.', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    expect(calculateNumber('SUM', 1.1, 2)).to.equal(3);
    expect(calculateNumber('SUM', 1.7, 2.3)).to.equal(4);
    expect(calculateNumber('SUM', 1.1, -2.6)).to.equal(-2);
  });

  it('Tests that it returns the right difference.', () => {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 3, 2.1)).to.equal(1);
    expect(calculateNumber('SUBTRACT', -1.2, -2.3)).to.equal(1);
  });

  it('Test that it returns the the right result after disivion.', () => {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
  });

  it('Should return null if the type is not among the given three.', () => {
    expect(calculateNumber('MULTIPLY', 1.2, 3.5)).to.equal(null);
  });
});
