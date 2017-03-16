/////////////////////////
// Intent.js
// 2017 (c) Eli Levin
// bot-kit
/////////////////////////

'use strict'

//
// Representation of action taken by AI on some data.
//
function Intent(label, action){
    this.label = label;
    this.action = action;
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
