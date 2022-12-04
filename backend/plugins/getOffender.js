const { GreenHomeComponent } = require("../src/utils/GreenHomeComponent.js")
class GetOffender{
    constructor() {
        this.name = 'getOffender';
    }

    run(input){
        const ghc = new GreenHomeComponent();
        const offender = ghc.offender;

        if (offender){
            input.answer =  "Today's offender is " + offender.name + " with " + offender.consumption + " consumed.";
        } else {
            input.answer = "I don't have enough data for the offender yet.";
        }

    }
}

module.exports = GetOffender;