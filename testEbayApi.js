const { fetchEbayListings } = require('./ebayApi');

async function testFetchEbayListings() {
  const ebayDeveloper = {
    username: 'travenblevins',
    password: 'Ebay@123'
  };
  const listings = await fetchEbayListings({ ebayDeveloper });
  console.log('Fetched eBay Listings:', listings);
}

testFetchEbayListings();
