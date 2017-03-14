/////////////////////////
// Bot.js
// 2017 (c) Eli Levin
// bot-kit
/////////////////////////

'use strict'

const natural = require('natural');

function Bot(intents){
    this.classifier = new natural.BayesClassifier();
    this.intents = intents;
    this.isTrained = false;
};

Bot.prototype.trainBot = (trainingData, testData) => {};

Bot.prototype.determineMessageIntent = (utterance) => {};
