const Twit = require('twit');

class TwitterClient {
  constructor(
    consumerKey,
    consumerSecret,
    accessToken,
    accessTokenSecret,
    timeout = 60000,
    strictSSL = true,
  ) {
    this.twit = new Twit({
      consumer_key: consumerKey,
      consumer_secret: consumerSecret,
      access_token: accessToken,
      access_token_secret: accessTokenSecret,
      timeout_ms: timeout,
      strictSSL,
    });
  }

  // Methods
  postTweet(msg) {
    return new Promise((resolve, reject) => {
      const url = 'statuses/update';
      const params = { status: `${msg}` };
      this.twit
        .post(url, params)
        .then(res => {
          const tweet = res.data;
          resolve({
            tweet_created_at: tweet.created_at,
            tweet_user_name: tweet.user.name,
            tweet_user_screen_name: tweet.user.screen_name,
            tweet_text_length: tweet.text.length,
            tweet_text: tweet.text,
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Return tweets containing the keyword since fromDate param.
  // Filter:
  // - default language is English.
  // - Limit result to 100 tweets (maximum)
  getTweets(keyword, fromDate, lang = 'en', maxResults = 100) {
    return new Promise((resolve, reject) => {
      const url = 'search/tweets';
      const params = { q: `${keyword} since:${fromDate}`, count: maxResults, lang };
      this.twit
        .get(url, params)
        .then(res => {
          const tweets = res.data.statuses;
          const tweetsMap = tweets.map(tweet => ({
            created_at: tweet.created_at,
            user_name: tweet.user.name,
            user_screen_name: tweet.user.screen_name,
            tweet_text: tweet.text,
            tweet_retweeted_status_text: tweet.retweeted_status
              ? tweet.retweeted_status.text
              : null,
          }));
          resolve(tweetsMap);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = TwitterClient;
