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


//const { containerBootstrap } = require('./packages/core-loader/src');
//const { NlpManager} = require('./packages/node-nlp');
//const { dock } = require('./packages/core-loader/src');

const {containerBootstrap} = require("@nlpjs/core");

export async function compute(question) {
    const container = new containerBootstrap();
    await container.start();
    //await dock.start();
    //const container = dock.getContainer();
    const nlp = container.get('nlp');
    /*
    // if there's something that doesn't work, try to un-comment this down below
    const activity = {
        conversation: {
            id: 'a1'
        }
    }

    const manager = new NlpManager({
        languages: ['en'],
        forceNER: true,
        autoSave: false,
        nlu: { useNoneFeature: true }
    });

     */
    //const manager = container.get('nlp');
    //await manager.addCorpora(['./corpora/test_corpus.json', './corpora/offender_corpus.json']);
    await nlp.train();
    console.log(question);
    const response = await nlp.process({ locale: 'en', utterance: question/*, activity*/ });
    return response.answer;
}



