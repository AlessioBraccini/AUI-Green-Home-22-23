class DataAdapter{
    constructor() {
    }

    getOffender(date){
        const offender = {name: "dishwasher",
                            consumption: "50W",
                            date: date,
                            alternatives:['dishwasher', 'washy washy']};
        return offender;
    }

    getGoodBoy(date){
        return {name: "dryer", consumption: "2W", date:date};
    }

    countGreenStreak(){
        return {streak: 6, days: ["mon", "wed", "fri"]};
    }

    getTreeLevel(){
        // levels go from 1 to 5 (3 is middle/neutral level)
        const maxLevel = 5
        const today = new Date().getUTCDate()
        let percNeededForEachLevel = []
        const ratio = (this.countGreenStreak().streak / today)

        for (const i of Array(maxLevel).keys()) {
            // i = 0,1,2,3,4
            percNeededForEachLevel.push(i / maxLevel)
        }

        for (const i of Array(maxLevel).keys()) {
            if ( ratio >= percNeededForEachLevel[i] && ratio < percNeededForEachLevel[i+1] || i===maxLevel-1) {
                return {data: (i+1)}
            }
        }
        return {data: 1};
    }

    getInstantTotalConsumption(){
        return {data: 12.4, units:"kW"};
    }
}

module.exports = {DataAdapter};