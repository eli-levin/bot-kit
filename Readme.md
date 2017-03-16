[![NPM Version][npm-image]][npm-url]

# bot-kit
Easy-to-use chat bot framework for node.js with built-in NLP.


## Introduction
Use bot-kit to build AI chatbots in a matter of minutes.  
bot-kit provides a customizable, intelligent chatbot for use in your applications.
The framework allows you to do the following with minimal knowledge of NLP principles:
1. easily train an AI to understand user messages
2. instruct your AI to execute actions (functions) based on those messages

## Tutorial
1. Install and include bot-kit
in console: `npm install bot-kit --save`  
in app code: 
```javascript
const botKit = require('bot-kit');
```

2. Understand the Intent object and create your intents. Simple explanation: an Intent is a key-value pair that represents a message and an action to take when we receive it. The `label` field is the message-classification and the `action` field is a function that the bot will execute when a user message maps to that label. Another way to think about it is `label` == capability and `action` === code for that capability. It is important to keep the labels consistent. This means if you have a intent with the label "greeting", then don't have another intent with the label "hello", unless they should have different corresponding actions.

```javascript
let myIntents = [
    { 'greeting': userId => sendMessage(userId, 'Hello there!') },
    { 'weather': userId => getForecast(new Date()).then(forecast => sendMessage(userId, forcast)) }
];
```
   
3. Create a new instance of the Bot object, which acts as an interface to your bot's brains. The constructor takes in an array of intents. This tutorial uses the example of a chatbot that gives weather reports.

```javascript
let weatherBot = new botKit.Bot(myIntents);
```

4. Before we can train the bot's AI, it needs some data so that it can learn. All you need to provide is some sample data and expected output. It is suggested that about 60-80% of this data should be used for training and the other portion should be used for testing. Also, more data will produce a smarter AI, obviously.

```javascript
let trainingData = [
    {'What\'s the weather like today?': 'weather'},
    {'Tell me today\'s forecast': 'weather'},
    {'Hi': 'greeting'},
    ...
];

let testData = [
    {'What\'s the temperature outside?': 'weather'},
    {'Why, hello there!': 'greeting'},
    ...
];
```

5. Train the bot to extract intent labels from user messages. We will accomplish this through our learning data we just created. This method will Error if the training results in < 60% test success rate. Without explaining NLP intricacies, the underlying code uses a technique called `classification`. Read more about it on natural's github repo.

```javascript
weatherBot.trainBot(trainingData, testData);
```

6. Now you can use your bot to extract intents from user messages.

```javascript
onMessageReceived(webhook, (message) => {
    return weatherBot.determineMessageIntent(message.text).action(message.senderid);
});
```

## Contributing
If you would like to contribute, please follow these steps:
1. Open an issue of git.
2. Fork the code and make your contribution.
3. Test the code using `npm test`
4. Submit a pull request on the master branch.

Thanks for sharing your enthusiasm for chatbots and AI! I'm looking forward to seeing what you all create :D

## Future/Road Map
Right now, bot-kit is in initial development, but there are plenty of features on its roadmap. Future features include slots/prompts to further engage a user, dynamic learning, more AI features and support for Amazon Lex (whenever they add me to their beta program -_-).
I also plan on integrating a facebook messenger bot app as an optional feature in the next release.



[npm-image]: https://img.shields.io/npm/v/bot-kit.svg
[npm-url]: https://npmjs.org/package/bot-kit