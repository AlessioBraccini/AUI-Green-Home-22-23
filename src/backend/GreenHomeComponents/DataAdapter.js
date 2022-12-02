class DataAdapter{
    constructor() {
    }

    getOffender(date){
        const offender = {name: "dishwasher",
                            consumption: "50W",
                            date: date};
        return offender;
    }

    countGreenStreak(){
        return {streak: 3, days: ["mon", "wed", "fri"]};
    }

    getTreeLevel(){
        // levels go from 1 to 5 (3 is middle/neutral level)
        return 3;
    }
}

module.exports = {DataAdapter};