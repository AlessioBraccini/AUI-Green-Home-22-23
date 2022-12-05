const {DataAdapter} = require("./DataAdapter.js");

class GreenHomeComponent {
    #dataAdapter;
    #offender;
    #goodBoy;
    #treeLevel;
    #greenStreak;
    constructor() {
        this.#dataAdapter = new DataAdapter();
        this.#offender = this.#dataAdapter.getOffender(Date.now());
        this.#goodBoy = this.#dataAdapter.getGoodBoy(Date.now());
        this.#greenStreak = this.#dataAdapter.countGreenStreak();
        this.#treeLevel = this.#dataAdapter.getTreeLevel();
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

}

module.exports = {GreenHomeComponent};