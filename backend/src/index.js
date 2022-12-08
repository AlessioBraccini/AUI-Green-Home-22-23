const { dockStart } = require('@nlpjs/basic');

async function compute(userInput) {
    const dock = await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    const response = await nlp.process('en', userInput);

    return response.answer;
}

function fsmProcessState(intent) {
    console.log(intent)
}

const FSM =  {
    state: 'RESET',
    transitions: {
        RESET : {
            getOffender() {
                this.state = 'OFFENDER'

            },
            askLeafyLevel() {
                this.state = 'LEAFY_STATUS'
            }
        },
        OFFENDER: {
            approve() {
                this.status = 'OFFENDER_TIP'
            },
            negate() {
                this.status = 'RESET'
            }
        },
        OFFENDER_HISTORY: {

        },
        OFFENDER_TIP: {
            giveOffenderTip() {
            }
        },
        DEVICE_TIP: {

        },
        GENERIC_TIP: {

        },
        LEAFY_STATUS: {

        }
    },
    dispatch(actionName) {
        const action = this.transitions[this.state][actionName];

        if (action) {
            action.call(this);
        } else {
            console.log('invalid action')
            this.state = 'RESET'
        }
    }
}

module.exports = { compute, fsmProcessState, FSM};
