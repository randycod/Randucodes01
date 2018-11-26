const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
const prefix =('.')

console.log("Discord Bot By: EtWrk.?");
  console.log('By: Randy ')



});
////////////////////////////////
client.on('message', msg => {
  if (msg.content === 'السلام عليكم ') {
    msg.reply('وعليكم السلام ورحمة الله و بركاته  :)');
  }
});

client.login(process.env.BOT_TOKEN);
