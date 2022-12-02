const { computeInteraction } = require( "./nlpConnector");

const res = async () => {
    console.log(await computeInteraction("how can i consume less with the dishwasher"));
    console.log(await computeInteraction("hello"));
    console.log(await computeInteraction("who's today's offender"));
}

const quit = async () => {
    console.log("quit");

}

const run = async () => {
    //await start();
    await res();
    await quit();
}

run();
