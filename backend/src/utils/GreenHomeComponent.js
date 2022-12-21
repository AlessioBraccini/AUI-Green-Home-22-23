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
        this.#offender = this.#dataAdapter.getOffender(Date.now());
        this.#goodBoy = this.#dataAdapter.getGoodBoy(Date.now());
        this.#greenStreak = this.#dataAdapter.countGreenStreak();
        this.#treeLevel = this.#dataAdapter.getTreeLevel();
        this.#yesterdayTotal = this.#dataAdapter.getYesterdayTotal();
        this.#monthAverage = this.#dataAdapter.getMonthAverage();
    }

    stepForwardDemo() {
        // utility function just for demo
        this.#dataAdapter.stepForwardDemo()
    }

    resetDemo(){
        // utility function just for demo
        this.#dataAdapter.resetDemo()
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
        return this.#dataAdapter.getInstantTotalConsumption();
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