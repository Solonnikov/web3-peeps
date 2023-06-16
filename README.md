# WEB3PEEPS BOT

## Disclaimer
This project was created for the web3 community. Please refer to the [LICENCE](LICENSE) file for further information.

## Main features
The WEB3PEEPS BOT is a Discord bot that provides NFT collection stats. It creates channels within your Discord server to display the stats of different NFT collections.

## Prerequisites
Before running the application, make sure you have the following:

- OpenSea API key (Request yours from [OpenSea Developer](https://docs.opensea.io/reference/api-keys))
- Node.js and npm installed (Download from [Node.js](https://nodejs.org/))

### Software and Services
The project utilizes the following software and services:

- [Visual Studio Code](https://code.visualstudio.com/) (recommended code editor)
- [Heroku](https://dashboard.heroku.com/) (for hosting your Node.js server)
- [Cron Jobs](https://cron-job.org/en/) (for scheduling automated requests)
- [Opensea API](https://docs.opensea.io/reference/api-overview) (provides NFT collection data)

## Running the App
To run the app locally, follow these steps:

1. Clone the repo to your local machine:
  `git clone https://github.com/Solonnikov/web3-peeps.git`
2. Install dependencies:
  `npm install`
3. Start the app in development mode. This command sets the environment to development and uses nodemon to watch for file changes:
  `npm run start:dev`
4. Alternatively, you can start the app in production mode using:
  `npm run start:prod`
5. For Heroku deployment, use the command that matches your Heroku start command:
  `npm run start`

## Usage
Follow the steps below to set up and use the WEB3PEEPS BOT:

1. Create heroku app [Heroku](https://dashboard.heroku.com/)
2. Sign up for an account at [Cron Jobs](https://cron-job.org/en/)
3. Request your Opensea API Key from  [Opensea Developer](https://docs.opensea.io/reference/api-keys)
4. Create a .env file and set the following variables (refer to .env.example for an example):
   - DISCORD_BOT_TOKEN: Your Discord bot token
   - DISCORD_SERVER_INTENTS: Your Discord server intents
   - OPENSEA_API_KEY: Your OpenSea API key 
   Add same variables to your [Heroku config vars](https://dashboard.heroku.com/apps/web3-peeps/settings)
5. Create your custom bot at [Discord Developer Portal](https://discord.com/developers) and give all necessary permissions. Paste PERMISSIONS INTEGER value to the (.env) file
6. Add collection data, including the Discord server ID, collection slug, collection supply, and the channels you want to add.
7. Give a name to your endpoint (the default is 'project-stats-discord'). 
8. Deploy your heroku application using the instructions provided at: [Heroku Deploy](https://dashboard.heroku.com/apps/web3-peeps/deploy/heroku-git)
9. Set up a Cron Job task to trigger your endpoint at the desired interval using [Cron Jobs](https://cron-job.org/en/)

Please note that you may need to review and adjust the logic and order of the instructions to better fit your project's requirements.

