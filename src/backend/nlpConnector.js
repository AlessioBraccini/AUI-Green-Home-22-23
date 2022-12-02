const { compute }=require('./index.js')

async function computeInteraction(questionText) {
    // return reply to user's input
    return  compute(questionText);
}

module.exports = {computeInteraction};
