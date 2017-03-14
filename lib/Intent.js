/////////////////////////
// Intent.js
// 2017 (c) Eli Levin
// bot-kit
/////////////////////////

'use strict'

//
// Representation of action taken by AI on some data.
//
function Intent(label, action, keywords){
    this.label = label;
    this.action = action;
    this.keywords = keywords;
};

//
// Getters
//
Intent.prototype.getLabel = () => {
    return this.label;
};

Intent.prototype.getAction = () => {
    return this.action;
};

Intent.prototype.getKeywords = () => {
    return this.keywords;
};