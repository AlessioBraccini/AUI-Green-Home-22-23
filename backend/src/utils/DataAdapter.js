class DataAdapter{
    static statusCtrDemo = 0 // shared between all instances of DataAdapter
    static offenders = [
        {name:'dishwasher', consumption:'400Wh', date:Date.now()},
        {name:'washing machine', consumption:'470Wh', date:Date.now()+1},
        {name:'dryer', consumption: '490Wh', date:Date.now()+2},
        {name:'fridge', consumption: '153Wh', date:Date.now()+3}
    ]

    static goodBois = [
        {name:'dryer', consumption:'2Wh', date:Date.now()},
        {name:'fridge', consumption:'3Wh', date:Date.now()+1},
        {name:'fridge', consumption: '3Wh', date:Date.now()+2},
        {name:'washing machine', consumption: '8Wh', date: Date.now()+3}
    ]

    static greenStreak = [
        {streak: 6, days:["mon", "wed", "fri"]},
        {streak: 7, days:["mon", "wed", "fri", "sat"]},
        {streak: 8, days:["mon"]},
        {streak: 9, days:["mon", "tue"]},
        {streak: 10, days:["mon", "tue", "thu"]}
    ]

    static instantTotalConsumption = [
        {data: 12.4, units: 'kWh'},
        {data: 30, units: 'kWh'},
        {data: 11.2, units: 'kWh'},
        {data: 7.9, units: 'kWh'},
        {data: 35.6, units: 'kWh'}
    ]
    constructor() {
    }

    static demoStepForward(){
        this.statusCtrDemo++
    }

    static demoReset(){
        this.statusCtrDemo = 0
    }

    static getOffender(date){
        return this.offenders[this.statusCtrDemo % this.offenders.length];
    }

    static getGoodBoy(date){
        return this.goodBois[this.statusCtrDemo % this.goodBois.length];
    }

    static countGreenStreak(){
        return this.greenStreak[this.statusCtrDemo % this.greenStreak.length];
    }

    static getTreeLevel(){
        //todo: modify the logic of the level up using the reward system

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

    static getInstantTotalConsumption(){
        return this.instantTotalConsumption[this.statusCtrDemo % this.instantTotalConsumption.length];
    }

    static getYesterdayTotal(){
        const ctr = (this.statusCtrDemo === 0) ? this.statusCtrDemo : (this.statusCtrDemo - 1)
        return this.instantTotalConsumption[ctr % this.instantTotalConsumption.length]
    }


    static getMonthAverage(){
        let data = 0
        const totalSamples = (this.statusCtrDemo % this.instantTotalConsumption.length) + 1
        for (let e in this.instantTotalConsumption.slice(0, totalSamples)){
            data += e.data
        }
        data = data / totalSamples

        return {data: data, units:'kWh'}
    }

}

module.exports = {DataAdapter};