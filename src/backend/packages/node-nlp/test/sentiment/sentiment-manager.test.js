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

const { SentimentManager } = require('../../src');

describe('Sentiment Manager', () => {
  describe('Constructor', () => {
    test('Should create', () => {
      const sentiment = new SentimentManager();
      expect(sentiment).toBeDefined();
    });
  });

  describe('Process', () => {
    test('Get positive sentiment', async () => {
      const sentiment = new SentimentManager();
      const utterance = 'I love cats, are so cute!';
      const result = await sentiment.process('en', utterance);
      expect(result).toBeDefined();
      expect(result.score).toEqual(0.75);
      expect(result.numWords).toEqual(6);
      expect(result.numHits).toEqual(2);
      expect(result.comparative).toEqual(0.125);
      expect(result.type).toEqual('senticon');
      expect(result.language).toEqual('en');
      expect(result.vote).toEqual('positive');
    });
    test('Get negative sentiment', async () => {
      const sentiment = new SentimentManager();
      const utterance = 'I hate cats, are awful!';
      const result = await sentiment.process('en', utterance);
      expect(result).toBeDefined();
      expect(result.score).toEqual(-0.75);
      expect(result.numWords).toEqual(5);
      expect(result.numHits).toEqual(1);
      expect(result.comparative).toEqual(-0.15);
      expect(result.type).toEqual('senticon');
      expect(result.language).toEqual('en');
      expect(result.vote).toEqual('negative');
    });
    test('Get positive sentiment bengali', async () => {
      const sentiment = new SentimentManager();
      const utterance = 'আমি বিড়াল ভালবাসি, খুব সুন্দর';
      const result = await sentiment.process('bn', utterance);
      expect(result).toBeDefined();
      expect(result.score).toEqual(5.5);
      expect(result.numWords).toEqual(5);
      expect(result.numHits).toEqual(2);
      expect(result.comparative).toEqual(1.1);
      expect(result.type).toEqual('afinn');
      expect(result.language).toEqual('bn');
      expect(result.vote).toEqual('positive');
    });
    test('Get negative sentiment bengali', async () => {
      const sentiment = new SentimentManager();
      const utterance = 'আমি বিড়ালদের ঘৃণা করি, ভয়াবহ';
      const result = await sentiment.process('bn', utterance);
      expect(result).toBeDefined();
      expect(result.score).toEqual(-2);
      expect(result.numWords).toEqual(5);
      expect(result.numHits).toEqual(1);
      expect(result.comparative).toEqual(-0.4);
      expect(result.type).toEqual('afinn');
      expect(result.language).toEqual('bn');
      expect(result.vote).toEqual('negative');
    });
    test('Get positive sentiment deutsch', async () => {
      const sentiment = new SentimentManager();
      const utterance = 'Ich liebe Kätzchen';
      const result = await sentiment.process('de', utterance);
      expect(result).toBeDefined();
      expect(result.score).toBeGreaterThan(0);
      expect(result.numWords).toEqual(3);
      expect(result.numHits).toEqual(1);
      expect(result.type).toEqual('senticon');
      expect(result.language).toEqual('de');
      expect(result.vote).toEqual('positive');
    });
    test('Get negative sentiment deutsch', async () => {
      const sentiment = new SentimentManager();
      const utterance = 'Ich hasse Katzen, ich werde wirklich krank.';
      const result = await sentiment.process('de', utterance);
      expect(result).toBeDefined();
      expect(result.score).toBeLessThan(0);
      expect(result.numWords).toEqual(7);
      expect(result.numHits).toEqual(2);
      expect(result.type).toEqual('senticon');
      expect(result.language).toEqual('de');
      expect(result.vote).toEqual('negative');
    });
  });
});
