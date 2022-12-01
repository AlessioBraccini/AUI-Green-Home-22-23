/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


const { containerBootstrap } = require('./packages/core-loader/src');
let container;
/*
async function main() {
  const container = new containerBootstrap();
  await container.start();
  const nlp = container.get('nlp');
  nlp.train();
  const connector = container.get('console');
  connector.say("NLP-console is ready");

  connector.onHear = async (self, text) => {
    const result = await nlp.process(text);
    connector.say(result.answer);
  };
}
*/

//const { dock } = require('./packages/core-loader/src').dockStart();
//main();
/*
const { NlpManager } = require('node-nlp');
const activity = {
    conversation: {
        id: 'a1'
    }
}
let container;
let manager;
let nlp;

async function start() {
    //container = new containerBootstrap();
    manager = new NlpManager({
        languages: ['en'],
        forceNER: true,
        autoSave: false,
        nlu: { useNoneFeature: true }
    })
    nlp = manager.get('nlp');
    //nlp = container.get('nlp');
    await nlp.train()
}

async function compute(question){
    const response = await nlp.process({ locale: 'en', utterance: question, activity });
    console.log(response)
    return response.answer;
}
*/
async function start() {
    container = new containerBootstrap();
    await container.start();
}
async function  compute(question){
    const container = new containerBootstrap();
    await container.start();
    const nlp = container.get('nlp');
    const result = await nlp.process(question);
    return result.answer;
}

// class NlpSession {
//     #today_offender;
//     #usedDevicesTips;
//
//     constructor() {
//         this.#usedDevicesTips = new Map();
//         this.#usedDevicesTips.set("dishwasher", []);
//         this.#usedDevicesTips.set("washing-machine", []);
//         this.#usedDevicesTips.set("ac", []);
//         this.#today_offender = {name: "washing-machine", consumption: "40W"}
//     }
//
//     addToUsedTips(device, tipIndex) {
//         if (!this.#usedDevicesTips.has(device)) {
//             console.log("No device " + device + "for this session")
//         } else {
//             this.#usedDevicesTips.get(device).push(tipIndex);
//         }
//     }
//
//     tipIsInHistory(device, tipIndex) {
//         if (!this.#usedDevicesTips.has(device)) {
//             console.log("No device " + device + "for this session");
//         } else {
//             const list = this.#usedDevicesTips.get(device);
//             return list.includes(tipIndex);
//         }
//     }
//
//     // getRandomDeviceTipIndex()
//
//     getDailyOffender() {
//         return this.#today_offender;
//     }
// }
//
// let session = new NlpSession();
//
//
// // function to be called by the pipeline
// function removeDeviceTipFromSession(device, tipIndex) {
//     session.addToUsedTips(device, tipIndex);
// }
//
// function checkAvailableSpecificTip(device, tipIndex) {
//     return !session.tipIsInHistory(device, tipIndex);
// }
//
// function getTodayOffender() {
//     return session.getDailyOffender()
// }

module.exports = {compute, start};


