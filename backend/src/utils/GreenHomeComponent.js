const {DataAdapter} = require("./DataAdapter.js");

class GreenHomeComponent {
    #dataAdapter;
    #offender;
    #goodBoy;
    #treeLevel;
    #greenStreak;
    #monthAverage;
    #yesterdayTotal;
    constructor() {
        this.#dataAdapter = new DataAdapter();
        this.#offender = DataAdapter.getOffender(Date.now());
        this.#goodBoy = DataAdapter.getGoodBoy(Date.now());
        this.#greenStreak = DataAdapter.countGreenStreak();
        this.#treeLevel = DataAdapter.getTreeLevel();
        this.#yesterdayTotal = DataAdapter.getYesterdayTotal();
        this.#monthAverage = DataAdapter.getMonthAverage();
    }

    stepForwardDemo() {
        // utility function just for demo
        DataAdapter.stepForwardDemo()
    }

    resetDemo(){
        // utility function just for demo
        DataAdapter.resetDemo()
    }


    get offender() {
        return this.#offender;
    }

    get goodBoy() {
        return this.#goodBoy;
    }
    get treeLevel() {
        return this.#treeLevel;
    }


    get greenStreak() {
        return this.#greenStreak;
    }

    getInstantTotalConsumption() {
        return DataAdapter.getInstantTotalConsumption();
    }

    treeMaxLevel() {
        return 5;
    }
    getYesterdayTotal() {
        return this.#yesterdayTotal;
    }

    getMonthAverage(){
        return this.#monthAverage;
    }
}

module.exports = {GreenHomeComponent};