const {DataAdapter} = require("./DataAdapter.js");

class GreenHomeComponent {
    #dataAdapter;
    constructor() {
        this.#dataAdapter = new DataAdapter();
    }

    stepForwardDemo() {
        // utility function just for demo
        DataAdapter.demoStepForward()
    }

    resetDemo(){
        // utility function just for demo
        DataAdapter.demoReset()
    }


    get offender() {
        return DataAdapter.getOffender(Date.now());
    }

    get goodBoy() {
        return DataAdapter.getGoodBoy(Date.now());
    }
    get treeLevel() {
        return DataAdapter.getTreeScore();
    }


    get greenStreak() {
        return DataAdapter.countGreenStreak();
    }

    getInstantTotalConsumption() {
        return DataAdapter.getInstantTotalConsumption();
    }

    treeMaxLevel() {
        return 5;
    }
    getYesterdayTotal() {
        return DataAdapter.getYesterdayTotal();
    }

    getMonthAverage(){
        return DataAdapter.getMonthAverage();
    }
    get goodAppliances(){
        return DataAdapter.getGoodAppliances();
    }

    get offenderAppliances(){
        return DataAdapter.getOffenderAppliances();
    }

    get quest(){
        return DataAdapter.getQuest()
    }


}

module.exports = {GreenHomeComponent};