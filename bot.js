const Discord = require("discord.js");
  const kboosh = new Discord.Client();
      kboosh.on('ready', () => {
        kboosh.user.setGame(`67N SYSTEM .`,'https://www.twitch.tv/TEST-Broadcast');
          console.log('Im Ready!');
  
        });
var prefix = "!";
client.on("message", (message) => {
  const [command, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);
  if (command === "bc") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("ليس لديك صلاحية ادمن");
    let content = message.content.slice((prefix.length + command.length));
    if (!content) return message.channel.send("الرسالة فارغة");
    message.channel.send("sending").catch(() => {}).then((response)=> {
      var users = [];
      var res = 0, ref = 0;
      message.guild.members.map(user => users.push(user))
      let size = users.length;
      users.map((user, idx) => {
        setTimeout(() => {
          user.send(content).catch(()=>ref++).then(() => {
            res++
          });
          response.edit((ref + res) == size ? `Done !!!!!, ${res} done and ${ref} undone from ${size}` : `${res} done and ${ref} undone from ${size}`).catch(e=>e)
        }, 7000 / size * idx);
      })
    })
  }
});
kboosh.login(process.env.BOT_TOKEN)
