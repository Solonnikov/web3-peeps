const config = {
    discordStatsBot: {
        serverId: 941860691395096666, // Set your specific Server id
        collectionSlug: 'octopeeps-kingdoms',
        collectionSupply: 4848,
        channels: [
            {name: 'Mint Price', data: '5 MATIC'},
            {name: 'Minted', dataKey: 'total_supply', dataKey2: 'supply'},
            {name: 'Floor Price', dataKey: 'floor_price', round: 3},
            {name: 'Total Volume', dataKey: 'total_volume', round: 3},
            {name: 'Total Sales', dataKey: 'total_sales'},
            {name: 'Holders', dataKey: 'num_owners'}
        ],
        apiUrl: 'project-stats-discord'
    }
}

module.exports = {config}
