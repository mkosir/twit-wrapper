# twit-wrapper

[![npm (scoped)](https://img.shields.io/npm/v/@marko424/twit-wrapper.svg)](https://www.npmjs.com/package/@marko424/twit-wrapper)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@marko424/twit-wrapper.svg)](https://www.npmjs.com/package/@marko424/twit-wrapper)

## Highly opinionated Twitter API client for Node.js

This is a small heavily opinionated utility wrapper library around [twit](https://github.com/ttezel/twit).  
It is implemented with facade pattern which translates twit library's existing interface into simplified one.

## Install

```shell
npm i @marko424/twit-wrapper
```

## Usage:

Only most commonly used function for interacting with Twitter API are implemented:

- postTweet(msg)
- getTweets(keyword, fromDate, lang = 'en', maxResults = 100)

```js
const TwitterClient = require('TwitterClient');
const twitterClient = new TwitterClient(consumerKey, consumerSecret, accessToken, accessTokenSecret);

try {
  const msgToPost = 'Post a test message';
  const postedMsg = await twitterClient.postTweet(msgToPost);
  console.log(postedMsg);
} catch (e) {
  console.error(e);
}

try {
  const searchedTweets = await twitterClient.getTweets('basketball', '2017-01-01');
  console.log(searchedTweets);
} catch (e) {
  console.error(e);
}
```
