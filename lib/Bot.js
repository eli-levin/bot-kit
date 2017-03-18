/////////////////////////
// Bot.js
// 2017 (c) Eli Levin
// bot-kit
/////////////////////////

'use strict'

const natural = require('natural');

//
// Set up an untrained chatbot.
//
function Bot(intents){
    this.classifier = new natural.BayesClassifier();
    this.intentMap = {};
    this.isTrained = false;
    
    intents.forEach(intent => {
        this.intentMap[intent.label] = intent;
    });

    return this;
}

//
// Teach the bot how to classify documents.
//
Bot.prototype.trainBot = function(trainingData, testData) {
    let results = [];

    // Train classifier using training data
    trainingData.forEach(item => {
        this.classifier.addDocument(item.text, item.label);
    });
    this.classifier.train();
    
    // Test the classifier using testdata
    let numHits = testData.reduce((acc, val) => {
        results.push(this.classifier.getClassifications(val.text));
        return acc + (this.classifier.classify(val.text) === val.label);
    }, 0);
    let score = numHits / testData.length;

    // todo: decide if should get rid of all this and instead just use a callback on score
    // A score of 60% or higher means the bot is adequately trained.
    this.isTrained = score > 0.6;

    if (!this.isTrained) {
        throw new Error('Bot finished training, but did not pass enough tests:\n'+JSON.stringify(results, '\t', null));
    }
};

//
// This must only be called after the bot has been trained.
//
Bot.prototype.determineMessageIntent = function(utterance) {
    if (!this.isTrained) {
        throw new Error("Bot is not trained; cannot determine intents from utterance.");
    }
    let extractedIntent = this.classifier.classify(utterance);
    return this.intentMap[extractedIntent];
};

module.exports = Bot;