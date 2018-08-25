
console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// exports.spotify = {
//   id: b2ce37552f97413b9d0d1384444fb029.SPOTIFY_ID,

//   secret: 263138939c0248f3be9fc9284ecc4d0e.SPOTIFY_SECRET
// };
