const { computeInteraction, startCA } = require( "./nlpConnector");

const res = async () => {
    console.log(await computeInteraction("how can i consume less with the dishwasher"));
}

const start = async () => {
    startCA();
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
