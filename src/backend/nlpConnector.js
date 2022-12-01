const { compute, start  }=require('./index.js')

async function computeInteraction(questionText) {
    // return reply to user's input
    return  compute(questionText);
}

async function startCA() {
    start();
}
module.exports = {computeInteraction, startCA};
