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
// Test the bot
//
describe('Bot', () => {
    describe('#trainBot(trainingData, testData)', () => {
        it('Should return a successful training response.', () => {
            //-- Begin test call
            let weatherBot = new Bot([/*todo: fill this for next method test*/]);
            // todo: maybe trainBot should return some sort of success/failure metric instead of void
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
});