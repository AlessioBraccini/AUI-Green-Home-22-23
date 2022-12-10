const { dockStart } = require('@nlpjs/basic');
const { GreenHomeComponent } = require('./utils/GreenHomeComponent')

async function compute(userInput) {
    const dock = await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    const response = await nlp.process('en', userInput);

    return response.answer;
}

async function fsmProcessState(response, fsm, nlp) {
    const intent = response.intent;
    let reply;
    console.log(intent)
    console.log(fsm.state)
    // mega switch case for meaningful intent that cause to switch in the fsm --> set actionName to send to dispatch
    //actionName = 'getOffender'
    //fsm.dispatch(actionName)
    switch(intent) {
        case 'device.dailyOffender':
            //response.answer="If wanted, this can be modified"
            reply = await fsm.dispatch("getOffender", nlp)
            break;
        case 'device.genericTip':
            reply = await fsm.dispatch("getGenericTip", nlp)
            break;
        case 'user.approval':
            reply = await fsm.dispatch("approve", nlp)
            break;
        case 'user.negate':
            reply = await fsm.dispatch("negateOrDefault", nlp)
            break;
        case 'device.specificTip':
            reply = await fsm.dispatch("getSpecificTip", nlp, response.entities[0].option)
            break;
        case 'device.offenderInfo':
            reply = await fsm.dispatch("howOffenderIsChosen", nlp)
            break;
        case 'agent.leafyStatus': {
            const ghc = new GreenHomeComponent()
            if (ghc.treeLevel < 2) {
                response.answer += "Would you like a reminder on how I work?"
                reply = await fsm.dispatch("proposeLeafyExplanation", nlp)
            } else {
                reply = await fsm.dispatch('negateOrDefault', nlp)
            }
            break;
        }
        default :
            console.log(response.intent)
            reply = await fsm.dispatch('negateOrDefault', nlp)
            break;
    }

    console.log(fsm.state)
    if (reply.reply == null) {
        reply.reply = response.answer
    }

    return reply
}

const FSM =  {
    state: 'RESET',
    currentDevice: null, //extra info to track the device the user is talking about (?)
    transitions: {
        RESET : {
            getOffender() {
                this.state = 'OFFENDER'
                this.currentDevice = new GreenHomeComponent().offender.name
                this.state = 'WAIT_APPROVAL_FOR_SPECIFIC_TIP'
                return {reply: null, interactionEnd: false}
            },
            getGenericTip() {
                this.state = 'GENERIC_TIP'
                return {reply: null, interactionEnd: false}
            },
            howOffenderIsChosen() {
                this.state = 'OFFENDER_INFO'
                return {reply: null, interactionEnd: false}
            },
            getSpecificTip(nlp, device) {
                this.currentDevice = device
                console.log(this.currentDevice)
                this.state = 'DEVICE_TIP'
                this.state = 'WAIT_APPROVAL_FOR_SPECIFIC_TIP'
                return {reply: null, interactionEnd: false}
            },
            getLeafyStatus() {
                this.state = 'LEAFY_STATUS'
                return {reply: null, interactionEnd: false}
            },
            getLeafyProgress() {
                this.state = 'LEAFY_PROGRESS'
                return {reply: null, interactionEnd: false}
            },
            getTodayConsumption() {
                this.state = 'TODAY_CONSUMPTION'
                return {reply: null, interactionEnd: false}
            }
        },
        OFFENDER: {
            getOffenderTip () {
                this.state = 'WAIT_APPROVAL_FOR_SPECIFIC_TIP'
                return {reply: null, interactionEnd: false}
            }
        },
        OFFENDER_INFO: {
            getGenericTip() {
                this.state = 'WAIT_APPROVAL_FOR_GENERIC_TIP'
                return {reply: null, interactionEnd: false}
            }
        },
        DEVICE_TIP: {
            getSpecificTip() {
                this.state = 'WAIT_APPROVAL_FOR_SPECIFIC_TIP'
                return {reply: null, interactionEnd: false}
            }
        },
        GENERIC_TIP: {
            getGenericTip() {
                this.state = 'WAIT_APPROVAL_FOR_GENERIC_TIP'
                return {reply: null, interactionEnd: false}
            }
        },
        LEAFY_STATUS: {
            proposeLeafyExplanation() {
                this.state = 'WAIT_APPROVAL_LEAFY_INFO'
                return {reply: null, interactionEnd: false}
            },
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        },
        WAIT_APPROVAL_FOR_SPECIFIC_TIP: {
            async approve(nlp) {
                this.state = 'DEVICE_TIP'
                return {reply: (await nlp.process("how can i consume less with the " + this.currentDevice)).answer, interactionEnd: false}
            },
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        },
        WAIT_APPROVAL_FOR_GENERIC_TIP: {
            async approve(nlp) {
                this.state = 'GENERIC_TIP'
                return {reply: (await nlp.process("how can i consume less")).answer, interactionEnd: false}
                //return {reply: res, interactionEnd: false}
            },
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        },
        WAIT_APPROVAL_LEAFY_INFO: {
            approve(nlp) {
                this.state = 'LEAFY_INFO'
                return {reply: nlp.process(), interactionEnd: false}
            },
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        },
        LEAFY_INFO: {
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        },
        LEAFY_PROGRESS: {
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        },
        TODAY_CONSUMPTION: {
            approve() {
                this.state = 'CONSUMPTION_HISTORY_DETAIL'
                return {reply: null, interactionEnd: false}
            },
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        },
        CONSUMPTION_HISTORY_DETAIL: {
            negateOrDefault() {
                this.state = 'RESET'
                this.currentDevice = null
                return {reply: null, interactionEnd: true}
            }
        }
    },
    async dispatch(actionName, nlp, device=null) {
        const action = this.transitions[this.state][actionName];

        if (action) {
            if (device != null) {
                return await action.call(this, nlp, device)
            } else {
                const res = await action.call(this, nlp);
                console.log(res)
                return res
            }
        } else {
            console.log('invalid action')
            this.state = 'RESET'
            return {reply: null, interactionEnd: true}
        }
    }
}

module.exports = { compute, fsmProcessState, FSM};
