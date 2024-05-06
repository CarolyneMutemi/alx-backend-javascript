const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('tests the promise', (done) => {
    getPaymentTokenFromAPI(true).then((obj) => {
      expect(obj.data).to.be.equal('Successful response from the API');
      done();
    });
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
  });
});
