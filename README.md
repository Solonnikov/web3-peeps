# WEB3PEEPS BOT

## Disclaimer
This project was created for web3 community, please refer to the [LICENCE](LICENSE) file for further information.

## Main features
- NFT collections stats Discord bot (Creates channels with NFT collection stats inside your Discord server).

### Software
- [Visual Studio Code](https://code.visualstudio.com/)
- [NodeJs](https://nodejs.org/) (with the [Npm package manager](https://www.npmjs.com/))

### Services
- [Opensea API](https://docs.opensea.io/reference/api-overview)
- [Heroku](https://dashboard.heroku.com/) (For your Node js server hosting) 
- [Cron Jobs](https://cron-job.org/en/) (For automated requests)

## Usage
- Create heroku app and deploy your server [Heroku](https://dashboard.heroku.com/)
- Create account at [Cron Jobs](https://cron-job.org/en/)
- Create .env file and set your variables (example in .env.example)
  - DISCORD_BOT_TOKEN=<YOUR_DISCORD_BOT_TOKEN>
  - DISCORD_SERVER_ID=<YOUR_DISCORD_BOT_ID>
  - Add same variable to your [Heroku config vars](https://dashboard.heroku.com/apps/web3-peeps/settings)
- Create your custom bot at [Discord Developer Portal](https://discord.com/developers) and give all necessary permissions. Paste PERMISSIONS INTEGER value to the (config.js) file
- Add collection data, such as: collection slug, supply and channels you want to add
- Give a name for your endpoint: Default is 'project-stats-discord'
- Deploy your heroku application using this instructions: [Heroku Deploy](https://dashboard.heroku.com/apps/web3-peeps/deploy/heroku-git)
- Set up Cron jobs task to trigger your endpoint with a needed period of time

## Running the App
To run the app locally, follow these steps:

#Clone the repo to your local machine
- git clone https://github.com/Solonnikov/web3-peeps.git
#Install dependencies:
`npm install`
#Start the app in development mode. This command sets the environment to development and uses nodemon to watch for file changes:
`npm run start:dev`
#Alternatively, you can start the app in production mode using:
`npm run start:prod`
#Command for Heroku script run:
`npm run start`
