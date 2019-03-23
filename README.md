# twit-wrapper

[![npm](https://img.shields.io/npm/v/twit-wrapper.svg)](https://www.npmjs.com/package/twit-wrapper)
[![Travis (.org)](https://img.shields.io/travis/mkosir/twit-wrapper.svg)](https://travis-ci.org/mkosir/twit-wrapper)
[![npm bundle size](https://img.shields.io/bundlephobia/min/twit-wrapper.svg)](https://www.npmjs.com/package/twit-wrapper)

## Highly opinionated Twitter API client for Node.js

This is a small heavily opinionated utility wrapper library around [twit](https://github.com/ttezel/twit).  
It is implemented with facade pattern which translates twit library's existing interface into simplified one.

#### Prerequisite

To interact with Twitter API, head over to [Twitter Developer Platform](https://developer.twitter.com/) and create new application.  
Once you are done filling out information, you need to generate four access tokens:

- Consumer API Key
- Consumer API Secret Key
- Access Token
- Access Token Secret

## Install

```shell
npm i twit-wrapper
```

## Usage:

Only most commonly used function for interacting with Twitter API are implemented:

- postTweet(msg)
- getTweets(keyword, fromDate, lang = 'en', maxResults = 100)

```js
const TwitterClient = require('twit-wrapper');
const twitterClient = new TwitterClient(
  consumerAPIKey,
  consumerAPISecretKey,
  accessToken,
  accessTokenSecret,
);

// post new tweet
try {
  const msgToPost = 'Post a test message';
  const postedMsg = await twitterClient.postTweet(msgToPost);
  console.log(postedMsg);
} catch (e) {
  console.error(e);
}

// search twitter for all tweets containing the word 'javascript' since January 1, 2017
try {
  const searchedTweets = await twitterClient.getTweets('javascript', '2017-01-01');
  console.log(searchedTweets);
} catch (e) {
  console.error(e);
}
```
