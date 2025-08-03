// Utility to load environment variables from .env
require('dotenv').config();

function getCredentials() {
  return {
    facebook: {
      username: process.env.FACEBOOK_USERNAME,
      password: process.env.FACEBOOK_PASSWORD
    },
    youtube: {
      username: process.env.YOUTUBE_USERNAME,
      password: process.env.YOUTUBE_PASSWORD
    },
    ebay: {
      username: process.env.EBAY_USERNAME,
      password: process.env.EBAY_PASSWORD
    },
    ebayDeveloper: {
      username: process.env.EBAY_DEVELOPER_USERNAME,
      password: process.env.EBAY_DEVELOPER_PASSWORD
    }
  };
}

module.exports = { getCredentials };
