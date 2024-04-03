const { Client, GatewayIntentBits } = require('discord.js');
const config = require('../config.json')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ]
});

client.on('ready', (c) => {
  console.log(` ${c.user.tag} is online`);
});

client.login(config.token)
.then((fulfill) => console.log("Connected"))
.catch((err) => console.log(err));

client.on("messageCreate", async (message) => {
  message.channel.
  console.log(message);
});

