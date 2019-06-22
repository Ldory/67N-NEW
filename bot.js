const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "-"


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
client.on("guildMemberAdd", member => {
  client.channels.find('id', '592019960469913605').send(`**welcome to 67N Server : [ ${member} ]**`)
});
client.on('message' , async (message) => {
var prefix = "-"
    if(message.content.startsWith(prefix + "tInv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 10) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name",""))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 20) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
!if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }//codes
});

kboosh.login(process.env.BOT_TOKEN)
