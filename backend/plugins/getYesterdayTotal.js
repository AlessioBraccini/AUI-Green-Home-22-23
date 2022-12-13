const { GreenHomeComponent } = require("../src/utils/GreenHomeComponent.js")
class getYesterdayTotal{
    constructor() {
        this.name = 'getYesterdayTotal';
    }

    run(input){
        const ghc = new GreenHomeComponent()
        const total= ghc.getYesterdayTotal().data
        const units = ghc.getYesterdayTotal().units
        console.log("sono entrato bro")

        input.answer="tié " + total + " "+ units+ ". Would you like to know more?"

    }
}

module.exports = getYesterdayTotal;