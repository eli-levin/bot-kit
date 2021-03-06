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
Intent.prototype.getLabel = function() {
    return this.label;
};

Intent.prototype.getAction = function() {
    return this.action;
};
