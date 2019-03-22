# twit-wrapper

## Highly opinionated Twitter API client for Node.js

This is a small heavily opinionated utility wrapper library around [twit](https://github.com/ttezel/twit).  
It is implemented with facade pattern which translates twit library's existing interface into simplified one.

## Install

```
npm i @marko424/twit-wrapper
```

## Usage:

Only most commonly used function for interacting with Twitter API are implemented:

- postTweet(msg)
- getTweets(keyword, fromDate)

```
const TwitterClient = require('TwitterClient');
const twitterClient = new TwitterClient();

try {
  const msgToPost = 'Post a test message';
  const postedMsg = await twitterClient.postTweet(msgToPost);
	console.log(postedMsg)
} catch (e) {
  console.error(e);
}

try {
  const searchedTweets = await twitterClient.searchTweets('basketball', '2017-01-01');
  console.log(searchedTweets);
} catch (e) {
  console.error(e);
}
```
