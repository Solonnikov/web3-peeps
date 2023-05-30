const axios = require('axios');

// Fetch OpenSea collection metadata
async function fetchCollectionMetadata(collectionSlug) {
    const options = {
        method: 'GET',
        url: `https://api.opensea.io/api/v1/collection/${collectionSlug}`,
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
