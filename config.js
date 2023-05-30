const config = {
    discordStatsBot: {
        serverId: process.env.DISCORD_SERVER_ID, // Set your specific Server id
        intents: process.env.DISCORD_INTENTS, // Get your specific value at https://discord.com/developers,
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
