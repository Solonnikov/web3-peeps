const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const {discordBotLogin, addNftStatisticsChannels} = require('./services/discord');
const {config} = require('./config');

// Routes
app.get('/', (req, res) => {
    const title = 'Welcome to Web3 Peeps Bot!';
    res.send(title);
});

app.post(`/${config.discordStatsBot.apiUrl}`, async (req, res) => {
    try {
        await addNftStatisticsChannels(
            config.discordStatsBot.serverId,
            config.discordStatsBot.collectionSlug,
            config.discordStatsBot.collectionSupply,
            config.discordStatsBot.channels
        );
        res.sendStatus(200);
    } catch (error) {
        console.error('Failed to trigger project Stats to Discord', error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

discordBotLogin();
