const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi tests', () => {
  it('tests that the sendPaymentRequestToApi method uses the Utils.calculateNumber method.', () => {
    const calcStub = sinon.stub(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    calcStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(calcStub);
    expect(calcStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWith('The total is: 10')).to.be.true;
    calcStub.restore();
    consoleSpy.restore();
  });
});
