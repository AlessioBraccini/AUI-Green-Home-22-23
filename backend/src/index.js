const { dockStart } = require('@nlpjs/basic');

async function compute(userInput) {
    const dock = await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    const response = await nlp.process('en', userInput);

    return response.answer;
}

module.exports = { compute };
