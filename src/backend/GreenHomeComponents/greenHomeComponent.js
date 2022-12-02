const {DataAdapter} = require("./DataAdapter");

class GreenHomeComponent {
    #dataAdapter;
    #offender;
    #treeLevel;
    #greenStreak;
    constructor() {
        this.#dataAdapter = new DataAdapter();
        this.#offender = this.#dataAdapter.getOffender(Date.now());
        this.#greenStreak = this.#dataAdapter.countGreenStreak();
        this.#treeLevel = this.#dataAdapter.getTreeLevel();
    }


    get offender() {
        return this.#offender;
    }

    get treeLevel() {
        return this.#treeLevel;
    }


    get greenStreak() {
        return this.#greenStreak;
    }

}

module.exports = {GreenHomeComponent};