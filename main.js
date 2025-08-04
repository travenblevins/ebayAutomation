const { getCredentials } = require('./utils');
const { loginFacebook, loginYouTube, loginTikTokInstagram } = require('./auth');
const { fetchEbayListings } = require('./ebayApi');
const { postToAllPlatforms } = require('./poster');

(async () => {
  const creds = getCredentials();
  const fbSession = await loginFacebook(creds.facebook);
  const ytSession = await loginYouTube(creds.youtube);
  const tiSession = await loginTikTokInstagram(fbSession);
  const ebayListings = await fetchEbayListings({ ebayDeveloper: creds.ebayDeveloper });
  await postToAllPlatforms(ebayListings, fbSession, ytSession, tiSession);
})();