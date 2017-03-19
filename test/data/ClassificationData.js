/////////////////////////
// BotTest.js
// 2017 (c) Eli Levin
// bot-kit
/////////////////////////

const trainingData = [
    {'text': 'Hi', 'label': 'greeting'},
    {'text': 'sup dude', 'label': 'greeting'},
    {'text': 'hey', 'label': 'greeting'},
    {'text': 'what\'s up?', 'label': 'greeting'},
    {'text': 'yo', 'label': 'greeting'},
    {'text': 'hello', 'label': 'greeting'},
    {'text': 'give me the weather forecast', 'label': 'weather'},
    {'text': 'how\'s the weather today?', 'label': 'weather'},
    {'text': 'what\'s the temperature outside?', 'label': 'weather'},
    {'text': 'what\'s it like outside?', 'label': 'weather'},
    {'text': 'is it cold out?', 'label': 'weather'},
    {'text': 'is it warm today?', 'label': 'weather'}
];

const testData = [
    {'text': 'yo what\'s up?', 'label': 'greeting'},
    {'text': 'why, hello there!', 'label': 'greeting'},
    {'text': 'is it cold today?', 'label': 'weather'},
    {'text': 'is it warm out?', 'label': 'weather'},
    {'text': 'weather', 'label': 'weather'}
];

const confidence = 0.8;

const testAction = () => console.log('this would normally interact with the user');
const intents = [
    {'label': 'greeting', 'action': testAction},
    {'label': 'weather', 'action': testAction}
];

const testData2 = [
    {'text': 'what up', 'label': 'greeting'},
    {'text': 'hi, weatherbot!', 'label': 'greeting'},
    {'text': 'get me the weather report', 'label': 'weather'},
    {'text': 'what\'s the weather like today', 'label': 'weather'}
];

module.exports = {
    trainingData: trainingData,
    testData: testData,
    testData2: testData2,
    confidence: confidence,
    intents: intents
};