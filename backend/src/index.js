const { dockStart } = require('@nlpjs/basic');
const { GreenHomeComponent } = require('./utils/GreenHomeComponent')

async function compute(userInput) {
    const dock = await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    const response = await nlp.process('en', userInput);

    return response.answer;
}

function fsmProcessState(intent, fsm) {
    console.log(intent)

    // mega switch case for meaningful intent that cause to switch in the fsm --> set actionName to send to dispatch
    //actionName = 'getOffender'
    //fsm.dispatch(actionName)
}

const FSM =  {
    state: 'RESET',
    currentDevice: null, //extra info to track the device the user is talking about (?)
    transitions: {
        RESET : {
            getOffender() {
                this.state = 'OFFENDER'
                this.currentDevice = new GreenHomeComponent().offender.name
            },
            getGenericTip() {
                this.state = 'GENERIC_TIP'
            },
            howOffenderIsChosen() {
                this.state = 'OFFENDER_INFO'
            },
            getSpecificTip(device) {
                this.currentDevice = device
                this.state = 'DEVICE_TIP'
            },
            getLeafyStatus() {
                this.state = 'LEAFY_STATUS'
            },
            getLeafyProgress() {
                this.state = 'LEAFY_PROGRESS'
            },
            getTodayConsumption() {
                this.state = 'TODAY_CONSUMPTION'
            }
        },
        OFFENDER: {
            getOffenderTip () {
                this.state = 'WAIT_APPROVAL_FOR_SPECIFIC_TIP'
            }
        },
        OFFENDER_INFO: {
            getGenericTip() {
                this.state = 'WAIT_APPROVAL_FOR_GENERIC_TIP'
            }
        },
        DEVICE_TIP: {
            getSpecificTip() {
                this.state = 'WAIT_APPROVAL_FOR_SPECIFIC_TIP'
            }
        },
        GENERIC_TIP: {
            getGenericTip() {
                this.state = 'WAIT_APPROVAL_FOR_GENERIC_TIP'
            }
        },
        LEAFY_STATUS: {
            proposeLeafyExplaination() {
                this.state = 'WAIT_APPROVAL_LEAFY_INFO'
            },
            negateOrDefault() {
                this.state = 'RESET'
            }
        },
        WAIT_APPROVAL_FOR_SPECIFIC_TIP: {
            approve() {
                this.state = 'DEVICE_TIP'
            },
            negateOrDefault() {
                this.state = 'RESET'
            }
        },
        WAIT_APPROVAL_FOR_GENERIC_TIP: {
            approve() {
                this.state = 'GENERIC_TIP'
            },
            negateOrDefault() {
                this.state = 'RESET'
            }
        },
        WAIT_APPROVAL_LEAFY_INFO: {
            approve() {
                this.state = 'LEAFY_INFO'
            },
            negateOrDefault() {
                this.state = 'RESET'
            }
        },
        LEAFY_INFO: {
            negateOrDefault() {
                this.state = 'RESET'
            }
        },
        LEAFY_PROGRESS: {
            negateOrDefault() {
                this.state = 'RESET'
            }
        },
        TODAY_CONSUMPTION: {
            approve() {
                this.state = 'CONSUMPTION_HISTORY_DETAIL'
            },
            negateOrDefault() {
                this.state = 'RESET'
            }
        },
        CONSUMPTION_HISTORY_DETAIL: {
            negateOrDefault() {
                this.state = 'RESET'
            }
        }
    },
    dispatch(actionName, device=null) {
        const action = this.transitions[this.state][actionName];

        if (action) {
            if (device != null) {
                action.call(this, device)
            } else {
                action.call(this);
            }
        } else {
            console.log('invalid action')
            this.state = 'RESET'
        }
    }
}

module.exports = { compute, fsmProcessState, FSM};
