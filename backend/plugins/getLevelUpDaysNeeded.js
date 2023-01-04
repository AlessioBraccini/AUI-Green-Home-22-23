const { GreenHomeComponent } = require("../src/utils/GreenHomeComponent");

class GetLevelUpDaysNeeded {
    constructor() {
        this.name = 'getLevelUpDaysNeeded'
    }

    run(input) {
        const ghc = new GreenHomeComponent()
        const level = parseInt(ghc.treeLevel.data) // [1..5]
        const maxLevel = parseInt(ghc.treeMaxLevel())
        const currentScore = ghc.currentTreeScore
        const thresholds= ghc.levelThresholds

        for (const th of thresholds) {
            if (currentScore< th){
                input.answer = "I need " + Math.ceil((th-currentScore)*2 )+ " good days in a row to level up. Remember that with quests i can do it even faster!";
                break;
            }
        }
        if(level==maxLevel){
            input.answer = "I'm already at max level. Good job!";

        }
    }
}

module.exports = GetLevelUpDaysNeeded;