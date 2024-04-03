const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.on('ready', (c) => {
  console.log(` ${c.user.tag} is online`);
});

client.login(token)
.then((fulfill) => console.log("Connected"))
.catch((err) => console.log(err));

client.on('guildMemberAdd', (member) => {
  let role = member.guild.roles.cache.find(role => role.name === "Black man onboarding");
  if (member.roles.cache.has(role.id)) {
    console.log(`[${member.id}] Already has role!`);
  }
  else {
    console.log(`[${member.id}] Doesn't have role! \n [ROLE GIVEN] ${role.name}`);
    member.roles.add(role)
    .catch(console.error());
  }
})

/*
client.on("messageCreate", async (message) => {
  if (message.author.bot) return false;

  console.log(message.content);

  if (message.content.includes("?") || message.content.includes("bot")) {
    message.reply("nuh uh");
  }
});
*/