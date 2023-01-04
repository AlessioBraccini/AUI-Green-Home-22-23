const { GreenHomeComponent } = require("../src/utils/GreenHomeComponent.js")
class getGoodBoy{
    constructor() {
        this.name = 'getGoodBoy';
    }

    run(input){
        const ghc = new GreenHomeComponent();
        const goodBoy = ghc.goodBoy;

        if (goodBoy){
            input.answer =  "Yesterday's goodBoy is " + goodBoy.name + " with " + goodBoy.consumption + " consumed. Good job!";
        } else {
            input.answer = "I don't have enough data for the goodBoy yet.";
        }

    }
}

module.exports = getGoodBoy;