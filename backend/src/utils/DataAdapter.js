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
        return {streak: 3, days: ["mon", "wed", "fri"]};
    }

    getTreeLevel(){
        // levels go from 1 to 5 (3 is middle/neutral level)
        return 3;
    }

    getInstantTotalConsumption(){
        return {data: 8.5, units:"kW"};
    }
}

module.exports = {DataAdapter};