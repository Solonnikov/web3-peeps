const {Client} = require("discord.js");
require('dotenv').config();
const {fetchCollectionMetadata} = require('./opensea');
const {config} = require('../config');
const botToken = process.env.DISCORD_BOT_TOKEN;

const client = new Client({
    intents: [config.discordStatsBot.intents]
});

client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
    console.log('msg', msg);
});

async function addNftStatisticsChannels(serverId, collectionSlug, supply, channels) {
    const data = await fetchCollectionMetadata(collectionSlug);
    let composedData = data.collection.stats;
    composedData.supply = supply;
    composedData.floor_price = +data.collection.stats.floor_price;
    return await updateDiscordChannel(serverId, channels, composedData)
}

async function updateDiscordChannel(serverId, channelConfigs, data) {
    const guild = await client.guilds.fetch(serverId);
    await guild.channels.fetch();

    for (const channelConfig of channelConfigs) {
        let updatedChannelName;
        if (channelConfig.dataKey) {
            if (data[channelConfig.dataKey] && channelConfig.round) {
                data[channelConfig.dataKey] = `${parseFloat(data[channelConfig.dataKey].toFixed(channelConfig.round))} ETH`;
            }

            if (!data[channelConfig.dataKey2]) {
                updatedChannelName = `${channelConfig.name}: ${data[channelConfig.dataKey]}`;
            } else {
                updatedChannelName = `${channelConfig.name}: ${data[channelConfig.dataKey]}/${+data[channelConfig.dataKey2]}`;
            }

        } else {
            updatedChannelName = `${channelConfig.name}: ${channelConfig.data}`;
        }

        try {
            // Find the channel object with a matching name
            let matchingChannel = guild.channels.cache.find(channel => {
                const [channelName] = channel.name.split(':');
                return channelName === channelConfig.name;
            });

            if (!matchingChannel) {
                // Channel doesn't exist, create a new one
                matchingChannel = await guild.channels.create({
                    name: updatedChannelName,
                    type: 2,
                    permissionOverwrites: [], // Customize the channel permissions if needed
                });

                console.log('Channel created:', matchingChannel.name);
            } else {
                // Channel already exists, update its name
                await matchingChannel.setName(updatedChannelName);

                console.log('Channel name updated:', matchingChannel.name);
            }
        } catch (error) {
            console.error('Error updating channels:', error);
        }
    }

}

function discordBotLogin() {
    client.login(botToken)
        .then(() => {
            console.log('Discord Bot is online');
        })
        .catch(console.error);
}

module.exports = {discordBotLogin, addNftStatisticsChannels}
