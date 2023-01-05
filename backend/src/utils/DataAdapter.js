class DataAdapter{
    static statusCtrDemo = 0 // shared between all instances of DataAdapter
    static offenders = [
        {name:'dishwasher', consumption:'4 kWh', date:Date.now()},
        {name:'washing-machine', consumption:'15.3 kWh', date:Date.now()+1},
        {name:'dryer', consumption: '4.9 kWh', date:Date.now()+2},
        {name:'fridge', consumption: '4.7 kWh', date:Date.now()+3},
        {name:'dishwasher', consumption: '4.9 kWh', date:Date.now()+4},
        {name:'ac', consumption: '19.1 kWh', date:Date.now()+5},
        {name:'washing-machine', consumption: '12.9 kWh', date:Date.now()+6}
    ]

    static goodBois = [
        {name:'dryer', consumption:'0.2 kWh', date:Date.now()},
        {name:'fridge', consumption:'0.5 kWh', date:Date.now()+1},
        {name:'fridge', consumption: '0.3 kWh', date:Date.now()+2},
        {name:'washing-machine', consumption: '0.8 kWh', date: Date.now()+3},
        {name:'microwave', consumption: '0.1 kWh', date: Date.now()+4},
        {name:'boiler', consumption: '0.4 kWh', date: Date.now()+5},
        {name:'ac', consumption: '0.2 kWh', date: Date.now()+6}
    ]

    static levelThresholds=[22,27,33,43]

    static greenStreak = [
        {leaf: 1,star:1,cross:1,days:["leaf","star","cross","","","",""], date:Date.now()},
        {leaf: 2,star:1,cross:1, days:["leaf", "star", "cross", "leaf", "", "",""], date:Date.now()+1},
        {leaf: 2,star:1,cross: 2, days:["leaf", "star", "cross","leaf","cross", "",""], date:Date.now()+2},
        {leaf: 2,star:2,cross: 2,days:["leaf", "star", "cross","leaf","cross", "star",""], date:Date.now()+3},
        {leaf: 2,star:3,cross:2, days:["leaf", "star", "cross","leaf","cross", "star","star"], date:Date.now()+4},
        {leaf: 0,star:0,cross:1, days:["cross", "", "", "", "", "",""], date:Date.now()+5},
        {leaf: 1,star:0,cross:1, days:["cross", "leaf", "","","","","",], date:Date.now()+6},
    ]

    static instantTotalConsumption = [
        {data: 12.4, units: 'kWh'},
        {data: 30, units: 'kWh'},
        {data: 11.2, units: 'kWh'},
        {data: 7.9, units: 'kWh'},
        {data: 8.1, units: 'kWh'},
        {data: 7.9, units: 'kWh'},
        {data: 7.7, units: 'kWh'}
    ]

    static goodAppliances =[
        {appliances:[DataAdapter.goodBois[0].name,"oven","microwave","boiler", "ac"],
            consumptions:[DataAdapter.goodBois[0].consumption, 0.25, 0.32, 0.32, 0.41],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()},

        {appliances:[DataAdapter.goodBois[1].name,"induction","microwave","TV", "dryer"],
            consumptions:[DataAdapter.goodBois[1].consumption, 0.54, 0.59, 0.71, 0.99],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+1},

        {appliances:[DataAdapter.goodBois[2].name,"microwave","TV", "boiler", "induction"],
            consumptions:[DataAdapter.goodBois[2].consumption, 0.45, 0.46, 0.52, 0.67],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+2},

        {appliances:[DataAdapter.goodBois[3].name,"oven","microwave","TV","dryer"],
            consumptions:[DataAdapter.goodBois[3].consumption, 0.87, 0.88, 0.90, 0.93],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+3},

        {appliances:[DataAdapter.goodBois[4].name,"TV","ac","boiler","dryer"],
            consumptions:[DataAdapter.goodBois[4].consumption, 0.26, 0.40, 0.43, 0.61],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+4},

        {appliances:[DataAdapter.goodBois[5].name,"induction", "fridge", "microwave","TV"],
            consumptions:[DataAdapter.goodBois[5].consumption, 0.65, 0.98, 1.1, 2.2],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+5},

        {appliances:[DataAdapter.goodBois[6].name,"TV","dryer","fridge","dishwasher"],
            consumptions:[DataAdapter.goodBois[6].consumption, 0.27, 0.95, 1.5, 2.1],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+6},
    ]

    static offenderAppliances =[
        {appliances:[DataAdapter.offenders[0].name,"washing-machine","induction","fridge","TV"],
            consumptions:[DataAdapter.offenders[0].consumption, 3.9, 3.3, 3.3, 2.8],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()},

        {appliances:[DataAdapter.offenders[1].name,"dishwasher","ac","boiler","oven"],
            consumptions:[DataAdapter.offenders[1].consumption, 15.0, 12.9, 12.4, 11.5],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+1},

        {appliances:[DataAdapter.offenders[2].name,"oven","dishwasher","induction","washing-machine"],
            consumptions:[DataAdapter.offenders[2].consumption, 4.5, 4.2, 2.1, 2.0, 1.9],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+2},

        {appliances:[DataAdapter.offenders[3].name,"dishwasher","microwave","dryer","induction"],
            consumptions:[DataAdapter.offenders[3].consumption, 4.1, 2.9, 2.8, 2.6],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+3},

        {appliances:[DataAdapter.offenders[4].name,"washing-machine","oven","fridge","induction"],
            consumptions:[DataAdapter.offenders[4].consumption, 4.8, 3.9, 3.1, 2.7],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+4},

        {appliances:[DataAdapter.offenders[5].name,"dishwasher","washing-machine","oven","dryer"],
            consumptions:[DataAdapter.offenders[5].consumption, 10.7, 9.5, 5.8, 5.3],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+5},

        {appliances:[DataAdapter.offenders[6].name,"oven","boiler","TV","microwave"],
            consumptions:[DataAdapter.offenders[6].consumption, 9.7, 8.4, 8.4, 6.7],
            unitsList:["","kWh","kWh","kWh","kWh"],
            date:Date.now()+6},
    ]

    //Consideration: a json would probably be better. Though right now i don't know how to read EXACTLY the line number x
    static questList=[
        {quest:"Make yesterday's offender a good boy today",
            date:Date.now()},
        {quest:"Manage to have the washing machine in the top-5 good appliances for tomorrow",
            date:Date.now()+1},
        {quest:"Manage to have the dryer in the top-5 good appliances for tomorrow",
            date:Date.now()+2},
        {quest:"Consume less than 8 kWh today",
            date:Date.now()+3},
        {quest:"Manage to have the dishwasher in the top-5 appliances for tomorrow",
            date:Date.now()+4},
        {quest:"Consume less than 10 kWh today",
            date:Date.now()+5},
        {quest:"Smile everyday!",
            date:Date.now()+6},
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
        console.log(totalSamples)
        for (let i=0; i < totalSamples; i++){
            console.log(DataAdapter.instantTotalConsumption[i].data)
            data += DataAdapter.instantTotalConsumption[i].data
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