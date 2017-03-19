/////////////////////////
// BotTest.js
// 2017 (c) Eli Levin
// bot-kit
/////////////////////////

'use strict'

const Bot    = require('../lib/Bot.js'),
      Cdata  = require('./data/ClassificationData.js'),
      assert = require('assert');

//
// Integration test for Bot
//
describe('Bot', () => {
    describe('#trainBot(trainingData, testData)', () => {
        it('Should return a successful training response.', () => {
            //-- Begin test call
            let weatherBot = new Bot([/*todo: fill this for next method test*/]);
            // todo: maybe trainBot should return some sort of success/failure metric instead of void
            try{
                weatherBot.trainBot(Cdata.trainingData, Cdata.testData, Cdata.confidence);
                assert(true, "");
            }catch(e){
                console.error(e);
                assert(false, "Bot failed training.");
            }
            //-- End test call
        });

        it('Should return a successful training response using default confidence.', () => {
            //-- Begin test call
            let weatherBot = new Bot([/*todo: fill this for next method test*/]);
            try{
                weatherBot.trainBot(Cdata.trainingData, Cdata.testData);
                assert(true, "");
            }catch(e){
                console.error(e);
                assert(false, "Bot failed training.");
            }
            //-- End test call
        });
    });

    describe('#determineMessageIntent(utterance)', () => {
        it('Should determine the intent from the provided string (utterance).', () => {
            //-- Begin test call
            let weatherBot = new Bot(Cdata.intents);
            try{
                weatherBot.trainBot(Cdata.trainingData, Cdata.testData);
                assert(true, "");
            }catch(e){
                console.error(e);
                assert(false, "Bot failed training. Could not determine intent.");
            }

            Cdata.testData2.forEach(line => {
                assert.deepEqual(
                    weatherBot.determineMessageIntent(line.text).label,
                    line.label,
                    'Did not get correct intent for utterance: ' + line.text);
            });
            //-- End test call
        });
    });
});