const axios = require('axios');
const xml2js = require('xml2js');

async function fetchEbayListings({ ebayDeveloper }) {
  const xmlBody = `
    <?xml version="1.0" encoding="utf-8"?>
    <GetMyeBaySellingRequest xmlns="urn:ebay:apis:eBLBaseComponents">
      <RequesterCredentials>
        <eBayAuthToken>${ebayDeveloper.password}</eBayAuthToken>
      </RequesterCredentials>
      <ActiveList>
        <Include>true</Include>
      </ActiveList>
    </GetMyeBaySellingRequest>
  `;

  try {
    const response = await axios.post(
      ebayDeveloper.endpoint,
      xmlBody,
      {
        headers: {
          'X-EBAY-API-CALL-NAME': ebayDeveloper.callName,
          'X-EBAY-API-SITEID': ebayDeveloper.siteId,
          'X-EBAY-API-COMPATIBILITY-LEVEL': ebayDeveloper.compatibilityLevel,
          'X-EBAY-API-DEV-NAME': ebayDeveloper.devId,
          'X-EBAY-API-APP-NAME': ebayDeveloper.appId,
          'X-EBAY-API-CERT-NAME': ebayDeveloper.certId,
          'Content-Type': 'text/xml'
        }
      }
    );
    // Parse XML response to extract listings
    const result = await xml2js.parseStringPromise(response.data, { explicitArray: false });
    // Extract listings (structure depends on eBay API response)
    const activeList = result.GetMyeBaySellingResponse?.ActiveList?.ItemArray?.Item || [];
    // Normalize to array
    const listings = Array.isArray(activeList) ? activeList : [activeList];
    // Map to simplified objects
    return listings.map(item => ({
      id: item.ItemID,
      title: item.Title,
      description: item.Description || '',
      image: item.PictureDetails?.PictureURL || '',
      price: item.SellingStatus?.CurrentPrice?._ || ''
    }));
  } catch (error) {
    console.error('Error fetching eBay listings:', error.message);
    // Fallback to stub data
    return [
      { id: 1, title: 'Sample Listing 1', description: 'Description 1', image: '', price: '10.00' },
      { id: 2, title: 'Sample Listing 2', description: 'Description 2', image: '', price: '20.00' }
    ];
  }
}

module.exports = { fetchEbayListings };