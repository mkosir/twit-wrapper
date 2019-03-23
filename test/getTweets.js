// const TwitterClient = require('../src/TwitterClient');
// const twitterClient = new TwitterClient(
//   consumerKey,
//   consumerSecret,
//   accessToken,
//   accessTokenSecret,
// );

// describe('getTweets()', () => {
//   it("Return 100 tweets containing the keyword 'javascript'", async () => {
//     const searchedTweets = await twitterClient.getTweets('javascript', '2017-01-01');
//     searchedTweets.should.have.length(100);
//   });
// });

const assert = require('assert');

describe('Dummy', () => {
  describe('Test array function indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
