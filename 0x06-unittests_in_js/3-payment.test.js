const {expect} = require('chai')
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require('sinon')
const Utils = require('./utils')

describe("sendPaymentRequestToApi tests", function(){
    it("tests that the sendPaymentRequestToApi method uses the Utils.calculateNumber method.", ()=>{
        const calcSpy = sinon.spy(Utils, 'calculateNumber')
        sendPaymentRequestToApi(3, 4)
        sinon.assert.calledOnce(calcSpy)
        expect(calcSpy.calledWith('SUM', 3, 4)).to.be.true
    })
})
