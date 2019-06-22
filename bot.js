const Discord = require("discord.js");
  const kboosh = new Discord.Client();
      kboosh.on('ready', () => {
        kboosh.user.setGame(`67N SYSTEM .`,'https://www.twitch.tv/TEST-Broadcast');
          console.log('Im Ready!');
  
        });

kboosh.login(process.env.BOT_TOKEN)
