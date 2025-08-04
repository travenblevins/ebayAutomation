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
      password: process.env.EBAY_DEVELOPER_PASSWORD,
      devId: process.env.EBAY_DEV_ID,
      appId: process.env.EBAY_APP_ID,
      certId: process.env.EBAY_CERT_ID,
      endpoint: process.env.EBAY_API_ENDPOINT,
      callName: process.env.EBAY_API_CALL_NAME,
      siteId: process.env.EBAY_API_SITEID,
      compatibilityLevel: process.env.EBAY_API_COMPATIBILITY_LEVEL
    }
  };
}

module.exports = { getCredentials };