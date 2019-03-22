# twit-wrapper

### Highly opinionated Twitter API client for Node.js

This is a small heavily opinionated utility wrapper library around [twit](https://github.com/ttezel/twit).  
It is implemented with facade pattern which translates twit library's existing interface into simplified one.  
Only most commonly used function for interacting with Twitter API are implemented:

- postTweet(msg)
- getTweets(keyword, fromDate)
