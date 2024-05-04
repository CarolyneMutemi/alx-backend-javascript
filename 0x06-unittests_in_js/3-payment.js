const { util } = require("chai");
const Utils = require("./utils");

//const utils = new Utils()

function sendPaymentRequestToApi(totalAmount, totalShipping){
    const sum = Utils.calculateNumber('SUM', totalShipping, totalAmount)
    console.log(`The total is ${sum}`)
}

module.exports = sendPaymentRequestToApi
