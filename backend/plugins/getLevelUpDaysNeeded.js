const { GreenHomeComponent } = require("../src/utils/GreenHomeComponent");

class GetLevelUpDaysNeeded {
    constructor() {
        this.name = 'getLevelUpDaysNeeded'
    }

    run(input) {
        const ghc = new GreenHomeComponent()
        const level = parseInt(ghc.treeLevel.data) // [1..5]
        const maxLevel = parseInt(ghc.treeMaxLevel())
        const currentGreenStreak = parseInt(ghc.greenStreak.streak)

        const d = new Date()
        const daysInMonth = new Date(d.getFullYear(), d.getMonth() +1, 0).getDate()
        const today = new Date().getUTCDate()
        let percNeededForEachLevel = [];

        for (const i of Array(maxLevel).keys()) {
            // i = 0,1,2,3,4
            percNeededForEachLevel.push(i / maxLevel)
        }

        if (level === maxLevel) {
            input.answer = "I am already at max level! Good job!"
        } else {
            const levelsLeft = Math.ceil(percNeededForEachLevel[level] * today) - currentGreenStreak
            input.answer = "I need " + levelsLeft + " more days this month to level up, so I can get to level " + (level + 1);
        }

    }
}

module.exports = GetLevelUpDaysNeeded;