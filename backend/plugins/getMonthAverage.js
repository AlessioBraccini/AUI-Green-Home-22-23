const { GreenHomeComponent } = require("../src/utils/GreenHomeComponent.js")

class getMonthAverage{
    constructor() {
        this.name = 'getMonthAverage';
    }

    run(input){
        const ghc = new GreenHomeComponent()
        const total= ghc.getMonthAverage().data
        const units = ghc.getMonthAverage().units

        input.answer="You consumed " + total + " "+ units+ " on average last month. Would you like to know more?"

    }
}

module.exports = getMonthAverage;