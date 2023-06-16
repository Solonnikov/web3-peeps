const axios = require('axios');

// Fetch OpenSea collection metadata
async function fetchCollectionMetadata(collectionSlug) {
    const options = {
        method: 'GET',
        url: `https://api.opensea.io/api/v1/collection/${collectionSlug}`,
        headers: {'X-API-KEY': process.env.OPENSEA_API_KEY}
    };

    try {
        const response = await axios.request(options)
        return response.data;
    } catch (error) {
        console.error('Failed to fetch collection metadata:', error);
        throw error;
    }
}

module.exports = {fetchCollectionMetadata}
