const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('../config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
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