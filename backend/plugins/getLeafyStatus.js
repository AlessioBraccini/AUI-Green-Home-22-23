const { GreenHomeComponent } = require('../src/utils/GreenHomeComponent')

class GetLeafyStatus {
    constructor() {
        this.name = 'getLeafyStatus'
    }

    run(input) {
        const ghc = new GreenHomeComponent()
        const level = parseInt(ghc.treeLevel.data)

        if (level === 1) {
            input.answer = "I'm not feeling very well. I'm at level " + level;
        } else {
            input.answer = "I'm at level " + level;
        }
    }
}

module.exports = GetLeafyStatus