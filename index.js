const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const {discordBotLogin, addNftStatisticsChannels} = require('./services/discord');

// Routes
app.get('/', (req, res) => {
    const title = 'Welcome to Web3 Peeps!';
    res.send(title);
});

app.post('/project-stats-discord', async (req, res) => {
    try {
        const channels = [
            {name: 'Mint Price', data: '5 MATIC'},
            {name: 'Minted', dataKey: 'total_supply', dataKey2: 'supply'},
            {name: 'Floor Price', dataKey: 'floor_price', round: 3},
            {name: 'Total Volume', dataKey: 'total_volume', round: 3},
            {name: 'Total Sales', dataKey: 'total_sales'},
            {name: 'Holders', dataKey: 'num_owners'}
        ];
        const serverId = "941860691395096666";
        await addNftStatisticsChannels(serverId, 'octopeeps-kingdoms', 4848, channels);
        res.sendStatus(200);
    } catch (error) {
        console.error('Failed to trigger project-stats-discord', error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

discordBotLogin();
