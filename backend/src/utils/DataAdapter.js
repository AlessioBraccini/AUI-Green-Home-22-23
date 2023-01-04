class DataAdapter{
    static statusCtrDemo = 0 // shared between all instances of DataAdapter
    static offenders = [
        {name:'dishwasher', consumption:'400Wh', date:Date.now()},
        {name:'washing-machine', consumption:'470Wh', date:Date.now()+1},
        {name:'dryer', consumption: '490Wh', date:Date.now()+2},
        {name:'fridge', consumption: '153Wh', date:Date.now()+3}
    ]

    static goodBois = [
        {name:'dryer', consumption:'2Wh', date:Date.now()},
        {name:'fridge', consumption:'3Wh', date:Date.now()+1},
        {name:'fridge', consumption: '3Wh', date:Date.now()+2},
        {name:'washing-machine', consumption: '8Wh', date: Date.now()+3}
    ]

    static levelThresholds=[22,27,33,43]

    static greenStreak = [
        {leaf: 1,star:1,cross:1,days:["leaf","star","cross","","","",""], date:Date.now()},
        {leaf: 6,star:1,cross:1, days:["leaf", "star", "cross", "leaf", "", "",""], date:Date.now()+1},
        {leaf: 26,star:1,cross: 1, days:["star", "", "","","", "",""], date:Date.now()+2},
        {leaf: 60,star:15,cross: 3,days:["mon", "tue"]},
        {leaf: 120,star:30,cross:7, days:["mon", "tue", "thu"]}
    ]

    static instantTotalConsumption = [
        {data: 12.4, units: 'kWh'},
        {data: 30, units: 'kWh'},
        {data: 11.2, units: 'kWh'},
        {data: 7.9, units: 'kWh'},
        {data: 35.6, units: 'kWh'}
    ]

    static goodAppliances =[
        {appliances:["dryer","oven","microwave","boiler"],
            consumptions:[2    , 18  ,   19      ,   40],
            unitsList:["Wh","Wh","Wh","Wh"],
            date:Date.now()},

        {appliances:["dryer","oven","microwave","boiler","washing-machine"],
            consumptions:[12    , 25  ,   11      ,   42, 470],
            unitsList:["Wh","Wh","Wh","Wh","Wh"],
            date:Date.now()+1},



        {appliances:["dishwasher", "washing-machine", "ac", "fridge" ,"dryer","oven","microwave","boiler"],
        consumptions:[100        ,        12 ,         13 ,      15  ,  16    , 18 ,   19        ,   40],
        date:Date.now()+7}, //Stock one to have all devices in one place

    ]

    static offenderAppliances =[
        {appliances:["dishwasher", "washing-machine", "ac", "fridge" ],
            consumptions:[400    ,        12        ,  13 ,      15],
            unitsList:["Wh","Wh","Wh", "Wh"],
            date:Date.now()},

        {appliances:[ "washing-machine", "ac", "fridge" ],
            consumptions:[   15        ,  8 ,      2],
            unitsList:["Wh","Wh","Wh"],
            date:Date.now()+1},
    ]

    //Consideration: a json would probably be better. Though right now i don't know how to read EXACTLY the line number x
    static questList=[
        {quest:"Make yesterday's offender a good boy today",
            date:Date.now()},
        {quest:"Consume less with yout dishwasher",
            date:Date.now()+1},
    ]


    constructor() {
    }

    static demoStepForward(){
        this.statusCtrDemo++
    }

    static demoReset(){
        this.statusCtrDemo = 0
    }

    static getOffender(){
        return this.offenders[this.statusCtrDemo % this.offenders.length];
    }

    static getGoodBoy(){
        return this.goodBois[this.statusCtrDemo % this.goodBois.length];
    }

    static countGreenStreak(){
        return this.greenStreak[this.statusCtrDemo % this.greenStreak.length];
    }

    static getGoodAppliances(){
        return this.goodAppliances[this.statusCtrDemo % this.goodAppliances.length];
    }

    static getOffenderAppliances(){
        return this.offenderAppliances[this.statusCtrDemo % this.offenderAppliances.length];
    }

    static getQuest(){
        return this.questList[this.statusCtrDemo % this.questList.length];
    }

    static getLevelThresholds(){
        return this.levelThresholds
    }



    static getTreeLevel() {
        const score = this.currentTreeScore()

        switch (true) {
            case (score>0 && score<=22):
                return {data: 1}
            case (score>22 && score<=27):
                return {data: 2}
            case (score>27 && score<=33):
                return {data: 3}
            case (score>33 && score<=43):
                return {data: 4}
            case (score >43):
                return {data: 5}
            default:
                console.log("something went horribly wrong")
                return{data: 3}

        }
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


    static currentTreeScore(){
        const info = this.greenStreak[this.statusCtrDemo % this.greenStreak.length]
        return 30 + 0.5 * info.leaf + 0.75 * info.star - 0.5 * info.cross
    }

}

module.exports = {DataAdapter};