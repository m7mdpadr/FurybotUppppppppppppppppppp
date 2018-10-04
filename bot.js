const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const Canvas = require("canvas");
const jimp = require("jimp");
const moment = require('moment');
const yt = require('ytdl-core');
const prefix = '>'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(">help | >inv");
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    if(message.content == (prefix + 'id')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./img/ID1.png', './img/ID2.png', './img/ID3.png', './img/ID4.png', './img/ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('en-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });
//best
var data = JSON.parse(fs.readFileSync('data.json','utf8'))
    client.on('guildMemberRemove', (u) => {
        u.guild.fetchAuditLogs().then( s => {
            var ss = s.entries.first();
            if (ss.action == `MEMBER_KICK`) {
            if (!data[ss.executor.id]) {
                data[ss.executor.id] = {
                time : 1
            };
        } else {
            data[ss.executor.id].time+=1
        };
    data[ss.executor.id].time = 0
    u.guild.members.get(ss.executor.id).roles.forEach(r => {
                    r.edit({
                        permissions : []
                    });
                    data[ss.executor.id].time = 0
                });
            setTimeout(function(){
                if (data[ss.executor.id].time <= 3) {
                    data[ss.executor.id].time = 0
                }
            },60000)
        };
        });
        fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
            if (err) console.log(err.message);
        });
    });
    client.on('roleDelete', (u) => {
        u.guild.fetchAuditLogs().then( s => {
            var ss = s.entries.first();
            if (ss.action == `ROLE_DELETE`) {
            if (!data[ss.executor.id]) {
                data[ss.executor.id] = {
                time : 1
            };
        } else {
            data[ss.executor.id].time+=1
        };
    data[ss.executor.id].time = 0
    u.guild.members.get(ss.executor.id).roles.forEach(r => {
                    r.edit({
                        permissions : []
                    });
                    data[ss.executor.id].time = 0
                });
            setTimeout(function(){
                if (data[ss.executor.id].time <= 3) {
                    data[ss.executor.id].time = 0
                }
            },60000)
        };
        });
        fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
            if (err) console.log(err.message);
        });
    });
    client.on('channelDelete', (u) => {
        u.guild.fetchAuditLogs().then( s => {
            var ss = s.entries.first();
            if (ss.action == `CHANNEL_DELETE`) {
            if (!data[ss.executor.id]) {
                data[ss.executor.id] = {
                time : 1
            };
        } else {
            data[ss.executor.id].time+=1
        };
    data[ss.executor.id].time = 0
    u.guild.members.get(ss.executor.id).roles.forEach(r => {
                    r.edit({
                        permissions : []
                    });
                    data[ss.executor.id].time = 0
                });
            setTimeout(function(){
                if (data[ss.executor.id].time <= 3) {
                    data[ss.executor.id].time = 0
                }
            },60000)
        };
        });
        fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
            if (err) console.log(err.message);
        });
    }).login(process.env.BOT_TOKEN)


let bane = JSON.parse(fs.readFileSync("./bcer.json", "utf8"));
let banse = new Set();
client.on('guildBanAdd', function(guild) {
  guild.fetchAuditLogs().then(logs => {
    const ser = logs.entries.first().executor;
    if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
      bans: 0
    }
    let boner = bane[ser.id+guild.id]
banse.add(ser.id)
boner.bans = Math.floor(boner.bans+1)


setTimeout(() => {
  boner.bans = 0
  banse.delete(ser.id)
},8000)

if(boner.bans > 3) {
  let roles = guild.members.get(ser.id).roles.array()
guild.members.get(ser.id).removeRoles(roles)
}

    })
    fs.writeFile('./bcer.json', JSON.stringify(bane), (err) => {
if (err) console.error(err);
})

})

client.on('message', async message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.startsWith(prefix + "sug")) {
  await  message.channel.send(`🔔 **| اكتب اقتراحك **`)
    message.delete(10000);
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content
              message.channel.send(`✅ **| تم حفظ اقتراحك **`)
    message.delete(10000);
            let embed = new Discord.RichEmbed()

       .setColor('RANDOM')
       .setThumbnail('https://images-ext-2.discordapp.net/external/cfiQPI-jiFWEr1dTyHZeT4l5ZSegPifQZSSOYusKSyo/https/cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/letter-256.png')
       .setTitle('')
       .addField('**» السيرفر :**', message.guild.name)
       .addField('**» المرسل :**', message.author.username)
       .addField('» اقتراحي :', text)
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)

              client.channels.find('name', '≄◉♔『≤suggestions≥』♔◉≄').send({embed})
       .setFooter(message.author.username, message.author.avatarURL)
   message.channel.sendMessage({embed});
              })
            }
          })


//help
client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === prefix + "help") {
   message.react("✅")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
**Helping Commands :**

**❖ Admin Help ➾** ${prefix}help admin

**❖ General Help ➾** ${prefix}help general

**❖ Games Help ➾** ${prefix}help games

**❖ Quran Help ➾** ${prefix}help quran

**❖ Soundboard Help ➾** ${prefix}help sb

**❖ Music Help ➾** ${prefix}help Music

**❖ Important Help ➾** ${prefix}help important
**.**
`)
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)

  message.channel.sendMessage({embed});

 }
});


//dm help


client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help admin") {
  const embedss = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
 **
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛

**
**♛╔[❖══════════════════❖]╗♛
          Fury Bot = Made By : iiTzEnd
♛╚[❖══════════════════❖]╝♛**

**__Prefix__ = '${prefix}'**
-
**__Admin Commands__ =**

**__1__ = ${prefix}clear - __To Clear Chat.__**

**__2__ = ${prefix}kick - __To Kick Anyone__**

**__3__ = ${prefix}ban - __To Ban Anyone__**

**__4__ = ${prefix}unban - __To UnBan Anyone__**

**__5__ = ${prefix}vban - __To Give anyone Ban Voice__**

**__6__ = ${prefix}uvban - __To Un Voice Ban__**

**__7__ = ${prefix}mute - __To Mute Any Spamer__**

**__8__ = ${prefix}unmute - __To UnMute Anyone Muted__**

**__9__ = ${prefix}warn - __To Warn Any Troublemaker__**

**__10__ = ${prefix}chatc - __To Close Any Chat You Want__**

**__11__ = ${prefix}chato - __To Open The Room That Closed it__**

**__12__ = ${prefix}role - __Will Show To You A New Menu__**

**__13__ = ${prefix}bc - __To Send Broadcast on Embed__**

**__14__ = ${prefix}bcp - __To Send Broadcast on Picture__**

**__15__ = ${prefix}ctcolors - __To Create The Colors For The Bot__**

**__16__ = ${prefix}rmcolors - __To Delete the Colors For The Bot__**

**__17__ = ${prefix}move all - __To Move All Users To Your Channel__**

**__18__ = ${prefix}bans - __To Show Ban List__**

♛╔[❖══════════════════❖]╗♛
**                                      Enjoy ❥**
♛╚[❖══════════════════❖]╝♛
**
Help us Get More Servers and optimize Bot as Much as Possible ❤

ساعدنا في الحصول على المزيد من الخوادم وتحسين البوت قدر الإمكان ❤

To Donate :

Credits : #credit iiTzEnd | ● ØF ●#9752 <amount>

Money : https://paypal.me/MohamedPadr **

`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 

client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help important") {
  const embedss2 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛

**╔[❖════════════❖]╗
                Important  :fire:
╚[❖════════════❖]╝**

__to enable welcome message do channel name__

 "welcome"

__to enable Suggest message do channel name__

"suggestions"

__to enable log message do channel name__ "log"

**`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 

client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help general") {
  const embedss3 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss3});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛

__General Commands__ =

__1__ = ${prefix}id - __To See Your ID__ 

__2__ = ${prefix}user - __To See Your Stats__

__3__ = ${prefix}sug - __To Suggest Anything__

__4__ = ${prefix}profile - __To See Your Profile__

__5__ = ${prefix}credit - __To See Your Credit__

__6__ = ${prefix}daily - __To Get Your Daily Money__

__7__ = ${prefix}rep - __To Rep Anyone__

__8__ = ${prefix}title - __To Change Your Profile Title__

__9__ = ${prefix}trans - __To Transfer Your Money To Anyone__

__10__ = ${prefix}members - __To Show Member's Status__

__11__ = ${prefix}info - __To See Bot info__

__12__ = ${prefix}avatar - __To Take Avatar of Anyone__

__13__ = ${prefix}ser-av - __To Get Server Avatar__

__14__ = ${prefix}bot - __Bot Status__

__15__ = ${prefix}own - __Bot Owner__

__17__ = ${prefix}server - __To Showing Details Of Server__

__18__ = ${prefix}colors - __To Take Any Color__

__19__ = ${prefix}emoji - __To Take Any Emoji__

__20__ = ${prefix}mcskin - __To Get Your Minecraft Skin__

__21__ = ${prefix}fortnite - __Get Fortnite Stats__

__22__ = ${prefix}ping - __To See Your Ping__

__23__ = ${prefix}roll - __Using on Any Giveaway__

__24__ = ${prefix}cc - __To Make Category__

__25__ = ${prefix}vc - __To Make Voice Channel__

__26__ = ${prefix}tt - __To Make Text Channel__

__27__ = ${prefix}perms - __To See Bot Permission's__

__28__ = ${prefix}invite - __To Invite DarkSide Bot__

__29__ = ${prefix}link - __Get Invite link__

__30__ = ${prefix}invites - __To See The People You Invited__

__31__ = ${prefix}iinv - __To Show Stats of Invite Link__

**
`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 

client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help games") {
  const embedss4 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss4});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛

__Games Commands =__

__1__ = ${prefix}bl7a - __Egyptian Memes__

__2__ = ${prefix}memes - __Egyptian Stupid Memes__

__2__ = ${prefix}anime - __Anime Pictures__

__3__ = ${prefix}mariam - __Mariam 's Scary Game__

__4__ = ${prefix}animal - __Animal Cute Pictures__

__5__ = ${prefix}dab - __Dab's Pictures__

__6__ = ${prefix}pu - __Punch Anyone__

__7__ = ${prefix}hu - __Huge Anyone__

__8__ = ${prefix}sp - __Slap Anyone__

__9__ = ${prefix}عقاب - __Interesting Challenges__

__10__ = ${prefix}حكم - __Ruling will help you in Your Life__

__11__ = ${prefix}اذكار

__12__ = ${prefix}لو خيروك

__13__ = ${prefix}كت تويت

__14__ = ${prefix}ايموجي - __Emoji's Game__

__15__ = ${prefix}عواصم - __Game Capitals__

__16__ = ${prefix}اعلام - __Game flags__

__17__ = ${prefix}ماينكرافت - __Measure Your Experiences in Minecraft__

__18__ = ${prefix}فكك - __Disassemble The Floor to Take Points__
**
`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 

client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help quran") {
  const embedss5 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss5});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
__~~Fury Bot~~__ By: iiTzEnd
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛

__The Holy Quran Commands =__

__1__ = ${prefix}quran - __To Show Quran List__

❖ Close to more orders for the Holy Quran
**
`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 

client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help sb") {
  const embedss6 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss6});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
__~~Fury Bot~~__ By: iiTzEnd
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛

__Soundborad Commands =__

__1__ = ${prefix}sb - __To Open Soundboard Menu__

❖ Close to more of the soundboard commands for introspection

**
`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 

client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help music") {
  const embedss7 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss7});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
__~~Fury Bot~~__ By: iiTzEnd
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛

__Music Commands =__

__1__ = ${prefix}play - __To Play Any Music__

__2__ = ${prefix}skip - __To Skip The Current Music__

__3__ = ${prefix}skipt - __Skips to The Specified Song__

__4__ = ${prefix}np - __To Find out The Current Music Name__

__5__ = ${prefix}pause - __To Stop The Song Temporarily__

__6__ = ${prefix}ok ➾ __To Resume Music__

__7__ = ${prefix}come - __To Move a Bot For You__

__8__ ${prefix}vol 0 - 100 - __To Control the Sound__

**
`)
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
}); 


//welcome inv
client.on('message', message =>{
  let args = message.content.split(' ');
if(args[0] === `${prefix}emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**أدخل الايموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`⚠️ **لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});

//kickvoice
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix + 'uvban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>

 الان يمكنك الدخول الي الرومات الصوتيه:)

بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>

الان يمكنك الدخول الي الرومات الصوتيه

بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
}) // نهايه كود فك الباند الفويس
 
client.on('message', eyad => {
  if (eyad.content.startsWith(prefix + 'vban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("❎ | **انت لا تمتلك الخاصيه المطلوبه**");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>

لقد تم منع من دخول الرومات الصوتيه 

بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>

لقد تم منع من دخول الرومات الصوتيه

بواسطة : <@${eyad.author.id}> `)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})// نهايه كود الباند الفويس


//mc
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

//own
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {
  const embedss3 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss3});

 message.author.sendMessage(`
 
 __~~Bot Staff~~__

 
 __Powered By__: iiTzEnd
 
Server support: https://discord.gg/ebsGkf

bot invite link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958588585
`);

    }
});

//welc
client.on("guildMemberAdd", member => {
      //const welcomer = client.channels.get("447512988954394624");
      let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('en-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
      
      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w6.png',
      './img/w7.png',
      './img/w8.png',
      './img/w9.png',
      './img/w10.png',
      './img/w11.png',
      './img/w12.png',
      './img/w13.png',
      './img/w14.png',
      './img/w15.png',
      './img/w16.png',
      './img/w17.png',
      './img/w18.png',];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
                              
                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 190);
                              
                              //NAMEً
                              ctx.font = '19px Arial';
                              ctx.fontSize = '18px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
      ctx.fillText(`Welcome To My World !!`
                              , 200, 155);
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });
//profile
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {

  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: '>title',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };


fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});

client.on('message', message => {

    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});

client.on("message", (message) => {
  let men = message.mentions.users.first()

  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}

if(message.content.startsWith(prefix + "daily")) {
 if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 300
     message.channel.send(`**${message.author.username} you collect your \`300\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }

 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}

      });

      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })

    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Fury"
        if(!tit) {
            message.channel.send("**:large_orange_diamond: .title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok: Done Dude !?`)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })

    client.on("message", message => {
  if (message.author.bot) return;
	if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;

      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: ">title", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("./powerx.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة

})



                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //ur name
                    ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 173) // احداثيات اسمك

                        //ur name
                    ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px'; 
                        ctx.fillStyle = "#f1f1f1"; 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${getvalueof.username}`, 151, 171) // احداثيات اسمك

                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري

                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 223, 159) // احداثيات النقاط

                        //Level
                        ctx.font = "bold 20px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 223, 115) // احداثيات اللفل

                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط

                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 197) // احداثيات النقاط

                        // REP
                        ctx.font = "bold 20px  Arial";
                        ctx.fontSize = "40px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 80,115)

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;

ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                          ctx.drawImage(ava, 116, 82, 73, 74);

message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});

//chat
client.on('message', message => {

    if (message.content === prefix + "chatc") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم قفل الشات :white_check_mark: ")
           });
             }

if (message.content === prefix + "chato") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات :white_check_mark:")
           });
             }



});

//ping
client.on("message", message => {
      if (message.content === prefix + "ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Pong! :ping_pong: :**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

//serv-avatar
client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });

//inv
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
┏━━━┓╋╋╋╋╋╋╋╋┏━━┓╋╋╋┏┓
┃┏━━┛╋╋╋╋╋╋╋╋┃┏┓┃╋╋┏┛┗┓
┃┗━━┳┓┏┳━┳┓╋┏┫┗┛┗┳━┻┓┏┛
┃┏━━┫┃┃┃┏┫┃╋┃┃┏━┓┃┏┓┃┃
┃┃╋╋┃┗┛┃┃┃┗━┛┃┗━┛┃┗┛┃┗┓
┗┛╋╋┗━━┻┛┗━┓┏┻━━━┻━━┻━┛
╋╋╋╋╋╋╋╋╋┏━┛┃
╋╋╋╋╋╋╋╋╋┗━━┛
 
بامكانك دعوة البوت من هنا

bot invite link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958588585

Server support: https://discord.gg/ebsGkf
`);

message.channel.send(':white_check_mark: **تم الارسال في الخاص**.');

    }
});
//link
client.on('message', message => {
    if (message.content.startsWith("link")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 2600
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-[${message.guild.name}]  هذا هو رابط سيرفر
هذا الرابط صالح ل 5 اشخاص فقط ولمده ساعتين
**`)
      message.author.sendEmbed(Embed11)
    }
});

//clear
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "log")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

//roll
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

//avatar
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

//members
    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content ==prefix + 'members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

//BC-text
client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "S Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {	
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('» Broadcast 🔥')
       .addField('» السيرفر :', message.guild.name)
       .addField('» المرسل :', message.author.username)
       .addField('» الرسالة :', args)
       .setImage("https://cdn.discordapp.com/attachments/447517440688259073/465272548209197071/erickson-tahil-22artplanet.jpg")
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
//bc-pic
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'pbc') {
        if (!args[1]) {
    message.channel.send(":white_check_mark: ***pbc <message>***");
    return;
    }
        message.guild.members.forEach(member => {
      if(!message.member.hasPermission('ADMINISTRATOR'))  return;
      message.react("✅");
            const w = ['./bc/1.png',
                       './bc/2.png',
                       './bc/3.png',
                       './bc/4.png',
                       './bc/5.png',
                       './bc/6.png',
                       './bc/7.png',];
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = '17px Arial';
                              ctx.fontSize = '13px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${args} ` , 200, 100);
member.sendFile(canvas.toBuffer());
});
});
});
}
});

//server
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//rooms
client.on('message', msg => {
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'cc')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متاكد من انشاء مستند الكاتيجوري ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{           
 let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

 let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
 let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
er.on("collect", r => {
msg.channel.send("`تم الالغاء`")
message.delete();
})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category').then(ra3deyad => {
channelCreated = ra3deyad.createdAt
      const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134019/2000px-Twemoji_1f4dd.svg.png')
  .addField(`اسم القناة`, `${ra3deyad.name}`, true)
  .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
  .addField(`نوع القناة`, `${ra3deyad.type}`, true)
  .addField(`متى انشأت القناة`, `${channelCreated}`)
 msg.channel.send({embed})
    message.delete();
})
})
})
})
})
}
});

client.on('message', msg => {
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'vc')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متاكد من انشاء روم صوتي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{           
 let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
 let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
er.on("collect", r => {
msg.channel.send("`تم الالغاء`")
message.delete();
})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice').then(ra3deyad => {
channelCreated = ra3deyad.createdAt
      const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage()
  .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134017/1500920527.jpg')
  .setURL('')
  .addField(`اسم القناة`, `${ra3deyad.name}`, true)
  .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
  .addField(`نوع القناة`, `${ra3deyad.type}`, true)
  .addField(`متى انشأت القناة`, `${channelCreated}`)
 msg.channel.send({embed})
    message.delete();
})
})
})
})
})
}
});

client.on('message', msg => {
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'tt')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متاكد من انشاء شات كتابي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{           
 let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
 let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
er.on("collect", r => {
msg.channel.send("`تم الالغاء`")
message.delete();
})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text').then(ra3deyad => {
channelCreated = ra3deyad.createdAt
      const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage()
  .setThumbnail('http://cdn.onlinewebfonts.com/svg/img_323299.png')
  .addField(`اسم القناة`, `${ra3deyad.name}`, true)
  .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
  .addField(`نوع القناة`, `${ra3deyad.type}`, true)
  .addField(`متى انشأت القناة`, `${channelCreated}`)
 msg.channel.send({embed})
    message.delete();
})
})
})
})
})
}
});

//perm
client.on('message', message => {
    if(message.content.startsWith(prefix + 'perms')) {
            	var msg = message.content.toLowerCase();
            		var role2 = msg.split(' ').slice(1).join(" ").toLowerCase(); 
        		var role1 = message.guild.roles.filter(r=>r.name.toLowerCase().indexOf(role2)>-1 ).first(); 
        		     if(role1.hasPermissions('ADMINISTRATOR')) {
        		         var permadmin = ":negative_squared_cross_mark:"
        		     } else {
        		         var permadmin=":x:"
        		     }
        		             		     if(role1.hasPermissions('VIEW_AUDIT_LOG')) {
        		         var permlog = ":white_check_mark:"
        		     } else {
        		         var permlog=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_GUILD')) {
        		         var permserver = ":white_check_mark:"
        		     } else {
        		         var permserver=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_ROLES')) {
        		         var permroles = ":white_check_mark:"
        		     } else {
        		         var permroles=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_CHANNELS')) {
        		         var permchannel = ":white_check_mark:"
        		     } else {
        		         var permchannel=":x:"
        		     }
        		             		     if(role1.hasPermissions('KICK_MEMBERS')) {
        		         var permkick = ":white_check_mark:"
        		     } else {
        		         var permkick=":x:"
        		     }
        		             		     if(role1.hasPermissions('BAN_MEMBERS')) {
        		         var permban = ":white_check_mark:"
        		     } else {
        		         var permban=":x:"
        		     }
        		             		     if(role1.hasPermissions('CREATE_INSTANT_INVITE')) {
        		         var perminvites = ":white_check_mark:"
        		     } else {
        		         var perminvites=":x:"
        		     }
        		             		     if(role1.hasPermissions('CHANGE_NICKNAME')) {
        		         var permnick = ":white_check_mark:"
        		     } else {
        		         var permnick=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_NICKNAMES')) {
        		         var permmanagenick = ":white_check_mark:"
        		     } else {
        		         var permmanagenick=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MANAGE_EMOJIS')) {
        		         var permemojis = ":white_check_mark:"
        		     } else {
        		         var permemojis=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MANAGE_WEBHOOKS')) {
        		         var permhook = ":white_check_mark:"
        		     } else {
        		         var permhook=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('SEND_MESSAGES')) {
        		         var permmessage = ":white_check_mark:"
        		     } else {
        		         var permmessage=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('SEND_TTS_MESSAGES')) {
        		         var permtts = ":white_check_mark:"
        		     } else {
        		         var permtts=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MANAGE_MESSAGES')) {
        		         var permmanagemessages = ":white_check_mark:"
        		     } else {
        		         var permmanagemessages=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('EMBED_LINKS')) {
        		         var permembed = ":white_check_mark:"
        		     } else {
        		         var permembed=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('ATTACH_FILES')) {
        		         var permattach = ":white_check_mark:"
        		     } else {
        		         var permattach=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MENTION_EVERYONE')) {
        		         var permmention = ":white_check_mark:"
        		     } else {
        		         var permmention=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('USE_EXTERNAL_EMOJIS')) {
        		         var permuseemojis = ":white_check_mark:"
        		     } else {
        		         var permuseemojis=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('ADD_REACTIONS')) {
        		         var permreact = ":white_check_mark:"
        		     } else {
        		         var permreact=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('CONNECT')) {
        		         var permconnect = ":white_check_mark:"
        		     } else {
        		         var permconnect=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('SPEAK')) {
        		         var permspeak = ":white_check_mark:"
        		     } else {
        		         var permspeak=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions('MUTE_MEMBERS')) {
        		         var permmute = ":white_check_mark:"
        		     } else {
        		         var permmute=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions('DEAFEN_MEMBERS')) {
        		         var permdeafen = ":white_check_mark:"
        		     } else {
        		         var permdeafen=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions('MOVE_MEMBERS')) {
        		         var permmove = ":white_check_mark:"
        		     } else {
        		         var permmove=":x:"
        		     }
        		            		     let nat = new Discord.RichEmbed()
        		     .addField('ADMINISTRATOR',permadmin, true)
        		     .addField('VIEW_AUDIT_LOG',permlog, true)
        		     .addField('MANAGE_SERVER',permserver, true)
        		     .addField('MANAGE_ROLES',permroles, true)
        		     .addField('MANAGE_CHANNELS',permchannel, true)
        		     .addField('KICK_MEMBERS',permkick, true)
        		     .addField('BAN_MEMBERS',permban, true)
        		     .addField('CREATE_INSTANT_INVITE',perminvites, true)
        		     .addField('CHANGE_NICKNAME',permnick, true)
        		     .addField('MANAGE_NICKNAMES',permmanagenick, true)
        		     .addField('MANAGE_EMOJIS',permemojis, true)
        		     .addField('MANAGE_WEBHOOKS',permhook, true)
        		     .addField('SEND_MESSAGES',permmessage, true)
        		     .addField('SEND_TTS_MESSAGES',permtts, true)
        		     .addField('MANAGE_MESSAGES',permmanagemessages, true)
        		     .addField('EMBED_LINKS',permembed, true)
        		     .addField('ATTACH_FILES',permattach, true)
        		     .addField('MENTION_EVERYONE',permmention, true)
        		     .addField('USE_EXTERNAL_EMOJIS',permuseemojis, true)
        		     .addField('ADD_REACTIONS',permreact, true)
        		     .addField('CONNECT',permconnect, true)
        		     .addField('SPEAK',permspeak, true)
        		     .addField('MUTE_MEMBERS',permmute, true)
        		     .addField('DEAFEN_MEMBERS',permdeafen, true)
        		     .addField('MOVE_MEMBERS',permmove, true)
        		     message.channel.send(nat)
    }
});

//user
  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  

//huge

const superagent = require("superagent");

  client.on('message', async message => {
  if (message.content.startsWith(prefix + 'hu')) {
    let args = message.content.split(" ").slice(1);
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** حضن **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("DROWN IS HERE", client.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
});
	
//كف
client.on('message',  (message) => {
  if (message.content.startsWith(prefix + 'pu')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.reply('commandUsage', message, this.help);
  }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${user.username} ادااك بوكس ع وشك يا ${message.author.username}! :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
  if (message.content.startsWith(prefix + 'sp')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.reply('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اداك بالقلم علي وشك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


//invite
  client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});

  client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "iinv")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});

//games normal

var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

//memes area

var memes = ["https://scontent-cai1-1.xx.fbcdn.net/v/t1.15752-9/35991835_774489796273551_4340597720042438656_n.jpg?_nc_cat=0&_nc_eui2=AeEh31C9mhk6Wb5ikc8KPYhu16kmZG4-ikpMYNY-irTawjRfKs3pRTFg8R-Foy1lFLUtiWdgi6WLPcHC2VezXMv9IO8OBV3XUHLsDYvQ_6-jAg&oh=158ea5073bca5bd074daf6cc02db373f&oe=5BA3E627","https://scontent-cai1-1.xx.fbcdn.net/v/t1.15752-9/35836787_774489856273545_3116994058904403968_n.jpg?_nc_cat=0&_nc_eui2=AeE2pSA3QGuPD17m0f_xdLPDVsnxM7SNc-AVRIOc5B4ebgYO068KndkDzwwAD-YSimH9SEl58EpH7qRPy0FyIzyEKsTnXnuiomJdOC6OgHEQ0Q&oh=b7c21fc3d8293a5b7309d55589b1e0af&oe=5BB29478","https://i.imgur.com/nKeiLcW.jpg","https://i.imgur.com/Ou89M9D.jpg","https://i.imgur.com/eVlU1tS.png","https://i.imgur.com/ONaJuP6.jpg","https://i.imgur.com/Jazv0Nn.jpg","https://i.imgur.com/lxfsXDz.jpg","https://i.imgur.com/LS0TPvs.png","https://i.imgur.com/T7utZo4.jpg","https://i.imgur.com/aSSa51l.jpg","https://i.imgur.com/FxOhBqf.png","http://www.thecarpenterbuilding.com/wp-content/uploads/2016/05/coming-soon.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'memes')) {
         var meme = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(meme);
    }
});

//dab
var dab = ["https://scontent-sea1-1.cdninstagram.com/vp/f74bf3c2451cbf4a08a541e46de27889/5B5B6139/t51.2885-15/s480x480/e35/16230653_402791260069966_4987205548966412288_n.jpg","http://www.foot24.tn/thumbs/pogba%20dab.variant960x540.dd25b1-650x286.jpg","https://sm1.narvii.com/6602/c1f51eb618f7a36f9a77a934fc3984333c9a8f25_00.jpg","https://i.pinimg.com/originals/f5/84/d6/f584d6fe0d5173d717d1671bfa3f0d14.jpg","https://ih0.redbubble.net/image.259546796.9462/flat,800x800,075,f.jpg","https://upload.wikimedia.org/wikipedia/commons/f/fc/Dab_on_em_spongebob.jpg","https://i.ebayimg.com/images/g/XDQAAOSwTuJYs-7S/s-l300.jpg","https://cdn116.picsart.com/214968289003202.jpg?r1024x1024","https://i.pinimg.com/originals/48/32/5f/48325ffdd52c62e0db33db6edc1a8927.jpg","http://pm1.narvii.com/6815/f775300721729acee96c440a88b64b5864ac19c9v2_00.jpg","https://i.ytimg.com/vi/gp2Ydp-mOQw/maxresdefault.jpg","https://static.vibe.com/files/2017/08/singer-arrested-for-dabbing-1502464143-640x798.jpg","https://cdn6.dissolve.com/p/D23_34_318/D23_34_318_1200.jpg","http://www.thecarpenterbuilding.com/wp-content/uploads/2016/05/coming-soon.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'dab')) {
         var dabs = new Discord.RichEmbed()
.setImage(dab[Math.floor(Math.random() * dab.length)])
message.channel.sendEmbed(dabs);
    }
});

//a77
var a77 = ["https://media.discordapp.net/attachments/449738013711532032/463455415469080577/Screenshot_7.png","https://media.discordapp.net/attachments/449738013711532032/463464331510808597/Screenshot_9.png","https://media.discordapp.net/attachments/449738013711532032/463464384052592640/Screenshot_8.png","https://image.ibb.co/ihF0od/37585959_692245207782046_1121403273652207616_n.jpg","https://image.ibb.co/cqPt8d/37643972_692245151115385_4524818891821547520_n_1.jpg","https://image.ibb.co/jXp4EJ/37624282_692245224448711_4072645881654935552_n.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'ءف ءح')) {
         var a77s = new Discord.RichEmbed()
.setImage(a77[Math.floor(Math.random() * a77.length)])
message.channel.sendEmbed(a77s);
    }
});

//bl7a
var bl7a = ["https://i.imgur.com/HLW70zm.jpg","https://i.ytimg.com/vi/Fj62InSHWFw/hqdefault.jpg","https://3.bp.blogspot.com/-_LXW7-zuWAg/WCituMasayI/AAAAAAADfkU/9YmMWayrvh4wQ2vxZXNuYaWxrEwUCMC8wCLcB/s640/%25D8%25A7%25D9%2584%25D8%25B3%25D9%258A%25D8%25B3%25D9%258A-%25D9%2588-%25D8%25A7%25D9%2584%25D9%2585%25D8%25AC%25D9%2584%25D8%25B3.jpg","https://pbs.twimg.com/profile_images/774920855822430208/dD4LHuD2_400x400.jpg","https://i.imgur.com/54oYVGt.jpg","https://akphoto1.ask.fm/a47/0e9b6/d519/485f/b84d/a7e3b9f02b07/original/2324041.jpg","https://i.imgur.com/kiPFu6v.jpg","https://khaberni-6zrocpuaymq7.stackpathdns.com/uploads/news_model/2018/03/main_image5ab00ac7aef5c.jpg","https://image.ibb.co/mZVBuJ/37403510_692251984448035_8807445965096091648_n.jpg","https://image.ibb.co/eaQpgy/37393428_692252024448031_8074366696313323520_n.jpg","http://www.thecarpenterbuilding.com/wp-content/uploads/2016/05/coming-soon.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'bl7a')) {
         var bl7as = new Discord.RichEmbed()
.setImage(bl7a[Math.floor(Math.random() * bl7a.length)])
message.channel.sendEmbed(bl7as);
    }
});


const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith(prefix + "5water")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});



const Sra7a = [  ' يا صرخة إحساسي وخنقة دموعي إذا الصّدف جابت مكاني مكانه من داخلي إحساس يعلن خضوعي وفي ظاهري رجال حافظ كيانه',  ' ظامي الوجدان وأشواقك نهر اسقني من عذب معسول الغدير الرّموش السّود والطّرف الحور ليتها عن لحظها لي تستخير أول المشوار في حبّك قهر وآخر المشوار عمري به خطير',  ' حبيبي عادت أسراب الحمام وعادوا الغيّاب وأنا من كثر ما شفت الوجيه اشتقت لأحبابي حبيبي من كثر ما اشتقت لك صرت أكره الأبواب ليّا شفت الوصل، وأهل الوصل ما عتّبوا بابي',  ' أي سرّ يعتري شوقي إليك إنّ شوقي حائر في مقلتيك كلّنا أسرى صبابات الهوى فادنُ منّي إنّني ملك يديك',  ' إِن الغرورَ إِذا تملَّكَ أمّةً كالزّهرِ يخفي الموتَ وهو زؤامُ',  ' إِذا عصفَ الغرورُ برأسِ غِرٍّ توّهمَ أن منكبَهُ جَناحُ',  ' أيّهذا الشّاكي و ما بك داء كن جميلاً ترى الوجود جميلا',  ' في هذه البقاع القصيّة هذه البقاع المهجورة حتى من عواء الذئب أسرجُ ضوء الشّمعة وأسافر',  ' يا نفسُ صَبْراً على ما قد مَنّيتِ به فالحرُّ يصبرُ عند الحادثِ الجَلَلِ',  ' وحسبُ الفتى إِن لمْ ينلْ ما يريدُه مع الصّبرِ أن يُلفى مقيماً على الصّبر',  '‏ صَبْراً جميلاً على مانابَ من حَدَثٍ والصبرُ ينفعُ أحياناً إِذا صبروا الصّبرُ أفضلُ شيءٍ تستعينُ به على الزّمانِ إِذا ما مسَّكَ الضّررُ',]
client.on('message', message => {
if (message.content.startsWith(prefix + 'شعر')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("شعر..")
.setColor('#FF0000')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/442659848019116032/443844544308576266/unknown.png")
               .setTimestamp()
        console.log("By : iiTzEnd");
message.channel.sendEmbed(client);
message.react("??")
}
}); 

const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
if (message.content.startsWith(prefix + "كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});

const zead = [
     '*** انا اسمي مريم ***',
     '*** مرحباَ ماهو اسمك ؟ ***',
     `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
     '*** هل تود مساعدتي ؟ ***',
     '*** لماذا هل انت قاسي القلب ؟ ***',
     '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** هل تود مساعدتي ؟ ***',
     '*** واو اشكرك انك شخصاَ رائع ! ***',
     '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
     '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
     '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
     '*** هيا اذاَ ***',
     '*** اود ان اسئلك سؤال ونحن في الطريق ***',
     '*** هل تراني فتاة لطيفة ام مخيفة ***',
     '*** اشكرك !  ***',
     '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
     '*** هل انت جاهز ؟ ***',
     '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
     '*** هل تود ان تراهم الان ***',
  '*** انا لست الحوت الازرق كما يدعون ***',
     '*** انا لست كاذبة صدقني***',
     '*** لماذا ارى في عينيك الخوف ؟ ***',
     '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
     '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
     '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
     '*** لماذا لم تدخل الغرفة ؟ ***',
     '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
     '*** لن تخرج حتى اعود لك بعد قليل ***',
     '*** المفتاح معك ! اكتب .مريم  ***',
     '*** مفتاح احمر , هل حصلت عليه ؟ ***',
     '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
     '*** مفتاح اسود . هل حصلت عليه ؟ ***',
     '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
     '*** لقد عادت من جديد الى المنزل ***',
     '*** لا تصدر اي صوت ! ***',
     '*** مريم : لقد عدت ***',
     '*** مريم : يا ايها المخادع اين انت ***',
     '*** مريم : اعلم انك هنا في المنزل ***',
     '*** مريم : ماذا تريد ان تسمع ***',
     '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
     '*** احد ما خرج من المنزل ***',
     '*** حاسب دين ام التوبه خخخخخ اهههههه  ***'
  ]
   client.on('message', message => {
   if (message.content.startsWith(prefix + 'mariam')) {
    var mariam= new Discord.RichEmbed()
    .setTitle("Games")
    .setColor('RANDOM')
    .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
    .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
     message.channel.sendEmbed(mariam);
     message.react("??")
    }
  });

const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("Games")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });

  const kingmas = [
    '*** منشن الجميع وقل انا اكرهكم. ***',
 '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
    '***     تصل على الوالده  و تقول لها  احب وحده.***',
    '*** تتصل ع��ى شرطي تقول له عندكم مطافي.***',
    '*** صور اي شيء يطلبه منك الاعبين.***',
    '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
    '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
    '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
    '***  تروح عند شخص تقول له احبك. ***',
    '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
    '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
    '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
    '*** ذي المرة لك لا تعيدها.***',
    '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
    '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
    '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
    '***سو مشهد تمثيلي عن مصرية بتولد.***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
    '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
    '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
    '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
 ]
  client.on('message', message => {
  if (message.content.startsWith(prefix + 'حكم')) {
   var mariam= new Discord.RichEmbed()
   .setTitle("Games")
   .setColor('RANDOM')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });

        const Za7f = [
           "**صورة وجهك او رجلك او خشمك او يدك**.",
           "**اصدر اي صوت يطلبه منك الاعبين**.",
           "**سكر خ��مك و قول كلمة من اختيار الاعبين الي معك**.",
           "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**صور اي شيء يطلبه منك الاعبين**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
           "**سو مشهد تمثيلي عن مصرية بتولد**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
           "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
           "**اتصل على امك و قول لها انك تحبها :heart:**.",
           "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
           "**قل لواحد ماتعرفه عطني كف**.",
           "**منشن الجميع وقل انا اكرهكم**.",
           "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
           "**روح المطبخ و اكسر صحن او كوب**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**قول لاي بنت موجود في الروم كلمة حلوه**.",
           "**تكلم باللغة الانجليزية الين يجي دورك م��ة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
           "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
           "**قول قصيدة **.",
           "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**اول واحد تشوفه عطه كف**.",
           "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
           "**تاخذ عقابين**.",
           "**قول اسم امك افتخر بأسم امك**.",
           "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
           "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
           "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
           "**تتصل على الوالده  و تقول لها خطفت شخص**.",
           "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
           "**����تصل على الوالده  و تقول لها  احب وحده**.",
             "**تتصل على شرطي تقول له عندكم مطافي**.",
             "**خلاص سامحتك**.",
             "** تصيح في الشارع انا  مجنوون**.",
             "** تروح عند شخص تقول له احبك**.",
         
       ]




    


    client.on('message', message => {
      if (message.content.startsWith(prefix + "عقاب")) {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL) 
    .addField('Games' ,
     `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
     message.channel.sendEmbed(embed);
     console.log('[38ab] Send By: ' + message.author.username)
       }
   });


var rebel = ["https://media.giphy.com/media/pjk3wZcciRENa/giphy.gif","http://78.media.tumblr.com/fd4383e21495f2bb10ed699cd73f22ca/tumblr_n5l0pk3w4E1so8ds0o1_500.gif","https://media1.giphy.com/media/14309XrKEC7yyk/giphy.gif","http://gifimage.net/wp-content/uploads/2017/06/anime-gif-13-1.gif","https://i.imgur.com/M3BG3Ck.gif","https://4.bp.blogspot.com/-yDd1fLFMKts/WeX_LrmWhwI/AAAAAAAALsU/mLO7KCD0DFMp8n8xbdMdJNR5V2D0D9WXwCLcBGAs/s1600/tenor.gif","https://secure.static.tumblr.com/940bbaba171f6b2f2dabd11c17fd3f20/kj1pjcr/jxWok11nj/tumblr_static_filename_640_v2.gif","https://data.whicdn.com/images/110768190/original.gif","http://78.media.tumblr.com/80f12fdc314760b2ba3e10204e33323d/tumblr_nc1n9weNg11tk3dxfo1_500.gif","https://78.media.tumblr.com/ec3f0546a20a75cd47c00e95ef0ba0a7/tumblr_o3oyhk49JC1u6348eo1_500.gif","https://thumbs.gfycat.com/MassiveUnlinedDarwinsfox-max-1mb.gif","https://data.whicdn.com/images/120798528/original.gif","https://i.gifer.com/NZcE.gif","https://media.giphy.com/media/2aH3YUqjx92cE/giphy.gif","https://78.media.tumblr.com/99fcbe4544d83d27babb216a3f3bb8a3/tumblr_n1shx2AC2e1qztgoio3_500.gif","https://data.whicdn.com/images/81429641/original.gif","https://78.media.tumblr.com/6eace49891b549d558f3d1a2c0ad3c98/tumblr_n4xmoqCrPj1spu161o8_500.gif","https://pa1.narvii.com/6088/b868bd47eb802373aa8b8203f76b07dd04846d1f_hq.gif","https://cdn.discordapp.com/attachments/458384513173684224/460742842503921669/Tumblr_mdi9s0YkbA1rao0vlo1_500.gif","https://cdn.discordapp.com/attachments/458384513173684224/460742882064728065/Chuunibyou-Demo-Koi-Ga-Shitai-6.gif"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'anime')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});


//bot
var version = '11.0.0';
client.on('message', message => {
if (message.content === prefix+'bot'){
     if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()//تا
    .setAuthor(client.user.username, client.user.avatarURL)
.setDescription(`** Ping :** ${Date.now() - message.createdTimestamp}
 **Servers :** ${client.guilds.size}
 **Users :** ${client.users.size}
 **Channels :** ${client.channels.size}
 **RAM Usage :** ${(process.memoryUsage().rss / 1048576).toFixed()}MB
 **Discord.js :** v${version}
 **UpTime :** ${timeCon(process.uptime())}
 **Node :** ${process.version}`)
     .setFooter('all copyrights reserved ©',client.user.avatarURL)
 .setFooter(`Fury Bot`, client.user.avatarURL)
    message.channel.sendEmbed(embed)
    console.log('[bot] Send By: ' + message.author.username)
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith(prefix + "info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Fury Bot`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `>` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | iiTzEnd')
    })
}
});

//ctcolors
client.on('message', message => {
    if(message.content.startsWith(prefix + 'ctcolors')) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Black", color: "#080808", permissions: [] })
                     message.guild.createRole({ name: "D-Red", color: "#B40404", permissions: [] })
                     message.guild.createRole({ name: "Yellow", color: "#FFFF00", permissions: [] })
                     message.guild.createRole({ name: "D-Green", color: "#088A08", permissions: [] })
                     message.guild.createRole({ name: "Aqua", color: "#00BFFF", permissions: [] })
                     message.guild.createRole({ name: "Green", color: "#00FF00", permissions: [] })
                     message.guild.createRole({ name: "Brown", color: "#B45F04", permissions: [] })
                     message.guild.createRole({ name: "Red", color: "#FF0000", permissions: [] })
                     message.guild.createRole({ name: "Purple", color: "#DF01D7", permissions: [] })
                     message.guild.createRole({ name: "White", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Orange", color: "#FFBF00", permissions: [] })
        

message.channel.sendMessage('**:white_check_mark: الرجاء الانتظار ريث ما يتم صناعه رتب الألوان :smile: **')
}
});

//rmcolors
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Black');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'D-Red');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Yellow');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'D-Green');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Aqua');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Green');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Brown');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Red');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Purple');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'White');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Orange');
		
		role.delete()
  message.channel.send('**:negative_squared_cross_mark: الرجاء الانتظار ريث ما يتم أزالة رتب الألوان :smile:**')
		}
	
	});


//colors

client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'color')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendFile(`https://i.imgur.com/NQy4FI0.png`).then(msg => {
        
        
        
        msg.react('🖤').then(r=>{
        msg.react('❤').then(r=>{
        msg.react('💛').then(r=>{
        msg.react('💚').then(r=>{
        msg.react('💙').then(r=>{
        msg.react('🐸').then(r=>{
        msg.react('💩').then(r=>{
        msg.react('😡').then(r=>{
        msg.react('😈').then(r=>{
        msg.react('💀').then(r=>{
        msg.react('😜').then(r=>{
        msg.react('❌').then(r=>{


       
   


    
     
     let activeFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
      
                                    //red                    
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Black"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#000000")

      .setDescription("**:art:تم اعطائك اللون الأسود**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})


//لون اسود


 let y1Filter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
     
       let y1 = msg.createReactionCollector(y1Filter, { time: 15000 });
      
                                    //t                    
                               y1.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "D-Red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FF0000")

      .setDescription("**:art:تم اعطائك اللون الأحمر الغامق**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();



   })

 //لون احمر 
let y2Filter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
     
       let y2 = msg.createReactionCollector(y2Filter, { time: 15000 });
      
                                                    
                               y2.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Yellow"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#e7fa02")

      .setDescription("**:art:تم اعطائك اللون الاصفر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


 
                               })
                               
                               //الون الاخضر

let dgFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
     
       let dg = msg.createReactionCollector(dgFilter, { time: 15000 });
      
                                                    
                               dg.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "D-Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#09fa2a")

      .setDescription("**:art:تم اعطائك اللون الاخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
 })
    //الون اللبني

let aqFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
     
       let aq = msg.createReactionCollector(aqFilter, { time: 15000 });
      
                                                    
                               aq.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Aqua"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00BFFF")

      .setDescription("**:art:تم اعطائك اللون اللبني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
})
   //الون الازرق فاتح

let grFilter = (reaction, user) => reaction.emoji.name === '🐸' && user.id === message.author.id;
     
       let gr = msg.createReactionCollector(grFilter, { time: 15000 });
      
                                                    
                               gr.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00FF00")

      .setDescription("**:art:تم اعطائك اللون الأخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let brFilter = (reaction, user) => reaction.emoji.name === '💩' && user.id === message.author.id;
     
       let br = msg.createReactionCollector(brFilter, { time: 15000 });
      
                                                    
                               br.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Brown"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#3B170B")

      .setDescription("**:art:تم اعطائك اللون البني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let reFilter = (reaction, user) => reaction.emoji.name === '😡' && user.id === message.author.id;
     
       let re = msg.createReactionCollector(reFilter, { time: 15000 });
      
                                                    
                               re.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FF0000")

      .setDescription("**:art:تم اعطائك اللون الأحمر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let prFilter = (reaction, user) => reaction.emoji.name === '😈' && user.id === message.author.id;
     
       let pr = msg.createReactionCollector(prFilter, { time: 15000 });
      
                                                    
                               pr.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Purple"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#A901DB")

      .setDescription("**:art:تم اعطائك اللون الأرجواني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let whFilter = (reaction, user) => reaction.emoji.name === '💀' && user.id === message.author.id;
     
       let wh = msg.createReactionCollector(whFilter, { time: 15000 });
      
                                                    
                               wh.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "White"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#ffffff")

      .setDescription("**:art:تم اعطائك اللون الأبيض**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let orFilter = (reaction, user) => reaction.emoji.name === '😜' && user.id === message.author.id;
     
       let or = msg.createReactionCollector(orFilter, { time: 15000 });
      
                                                    
                               or.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Orange"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FFBF00")

      .setDescription("**:art:تم اعطائك اللون الأرجواني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let y6Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
       let y6 = msg.createReactionCollector(y6Filter, { time: 15000 });
      
                                                    
                               y6.on("collect", r => {
                                   message.member.removeRole(message.guild.roles.find("name", "black"))
                                   message.member.removeRole(message.guild.roles.find("name", "D-Red")) 
                                   message.member.removeRole(message.guild.roles.find("name", "Yellow"))
                                   message.member.removeRole(message.guild.roles.find("name", "D-Green"))
                                   message.member.removeRole(message.guild.roles.find("name", "Aqua"))
                                   message.member.removeRole(message.guild.roles.find("name", "Green"))
                                   message.member.removeRole(message.guild.roles.find("name", "Brown"))
                                   message.member.removeRole(message.guild.roles.find("name", "Red"))
                                   message.member.removeRole(message.guild.roles.find("name", "Purple"))
                                   message.member.removeRole(message.guild.roles.find("name", "White"))
                                   message.member.removeRole(message.guild.roles.find("name", "Orange"))                
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")

      .setDescription("**:art:تم ازالة اللون**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


                               })
        })
})
})
        
})
})
})
})
})
})
})
})
})                             
                                   })
       }
                                   
                                   }); 


//botinfo


    client.on('message', message => {
      if(message.content.startsWith(prefix + 'move all')) {
       if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
         if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
      if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
       var author = message.member.voiceChannelID;
       var m = message.guild.members.filter(m=>m.voiceChannel)
       message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
       m.setVoiceChannel(author)
       })
       message.channel.send(`✅ **| تم سحب جميع الأعضاء إليك**`)
      
      
       }
         });

//kick
client.on('message', message => {
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply(" ❎  **| منشن شخص**");
  if(!reason) return message.reply ("‼️ | ** اكتب سبب الطرد **");
  if (!message.guild.member(user)
  .bannable) return message.reply("⛔| **لايمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.find("name", "log").send({embed : banembed})
}
});

//ban
client.on('message', message => {
  if (message.author.ban) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("You Don't Have BAN_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I Don't Have BAN_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply(" ❎  **| منشن شخص**");
  if(!reason) return message.reply ("‼️ | ** اكتب سبب البان **");
  if (!message.guild.member(user)
  .bannable) return message.reply("⛔| **لايمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Baned !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.find("name", "log").send({embed : banembed})
}
});

client.on('message' , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`⛔| **منشن الشخص او حط الاي دي حقو**`);
        message.guild.unban(user);

  const unbanembed = new Discord.RichEmbed()
  .setAuthor('UnBaned !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User Unban :",  `[ + ${user} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
        .setAuthor(message.guild.name)
  client.channels.find("name", "log").send({embed : unbanembed})
    }
});

//mute
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**You Dont Have MANGE_MESSAGES Permission').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**I Dont Have MANGE_MESSAGES Permission**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('⛔| ** يجب عليك المنشن اولاً **').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('⛔| **لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }

    mention.addRole(role).then(() => {
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });


    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);

            const embed = new Discord.RichEmbed()

       .setColor('RANDOM')
       .setThumbnail(mention.user.avatarURL)
       .setTitle('Muted!')
       .addField('**» Guild :**', message.guild.name,true)
       .addField('**» بواسطة :**', message.author.username,true)
       .addField('» السبب :', reason)
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)

              client.channels.find('name', 'log').send({embed})
       .setFooter(message.author.username, message.author.avatarURL,true)
   message.channel.sendMessage({embed});
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);

            const embed = new Discord.RichEmbed()

       .setColor('RANDOM')
       .setThumbnail(mention.user.avatarURL)
       .setTitle('UnMuted!')
       .addField('**» Guild :**', message.guild.name,true)
       .addField('**» بواسطة :**', message.author.username,true)
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)

              client.channels.find('name', 'log').send({embed})
       .setFooter(message.author.username, message.author.avatarURL,true)
   message.channel.sendMessage({embed});

  }
});

//warn
let warns = JSON.parse(fs.readFileSync("./warnings.json"));;

client.on('message', async message => {

  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "warn") { //??? ???????

               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("❎  **| منشن الشخص**");
  if(!reason) return message.reply ("‼️ **| اكتب سبب الطرد **");


  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };

  warns[user.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


  const banembed = new Discord.RichEmbed()
  .setAuthor(`WARNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   client.channels.find('name', 'log').send({
    embed : banembed
  })
  
    if(warns[user.id].warns == 2){ //??? ???????? ??????
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**lol bad**:x: ") .then(m => m.delete(5000));
    
    let mutetime = "60s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);

    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.reply(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[user.id].warns == 3){  //??? ???????? ??????
    message.guild.member(user).ban(reason);
    message.reply(`<@${user.id}> has been banned.`)
  }

}
}
);

//roles

client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === prefix +"role") {
   message.react("✅")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`


**أمثله على الأوامر : **
   **${prefix}arole @man Mod :** لأعطاء رتبة لعضو معين
   **${prefix}rrole @man Mod :** لأزالة الرتبة من الشخص
**معين :**
   **${prefix}role all User :** لأعطاء رتبة للجميع
   **${prefix}role humans Humans :** لأعطاء رتبة للاشخاص فقط
   **${prefix}role bots Bots :** لأعطاء رتبة لجميع البوتات
`)
       .setFooter(message.author.username, message.author.avatarURL)

  message.channel.sendMessage({embed});

 }
});



const { Client } = require('discord.js');
client.on('ready', () => {console.log('ready')});
client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`😡 **| الرتبة غير موجودة بالسيرفر تأكد من الاسم****`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`😡 **| الرتبة غير موجودة بالسيرفر تأكد من الاسم****`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`**يجب
 عليك كتابة اسم الرتبة**`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`😡 **| الرتبة غير موجودة بالسيرفر تأكد من الاسم**`);
    message.channel.send(`🕑 **| الرجاء الانتظار حتى يتم الانتهاء من الامر**`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`✅ **| تم الانتهاء من الامر  ${message.guild.members.size}**`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`😡 **| الرتبة غير موجودة بالسيرفر تأكد من الاسم**`);
        message.channel.send(`🕑 **| الرجاء الانتظار حتى يتم الانتهاء من الامر**`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`✅ **| تم الانتهاء من الامر  ${message.guild.members.size}**`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`😡 **| الرتبة غير موجودة بالسيرفر تأكد من الاسم**`);
        message.channel.send(`🕑 **| الرجاء الانتظار حتى يتم الانتهاء من الامر**`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`✅ **| تم الانتهاء من الامر  ${message.guild.members.size}**`);
});
}
}
}
});
//addrole
client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "arole") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign: | انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**🚫 | البوت لايملك صلاحيات **").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("⚠️ **| يجب عليك وضع اسم الرتبة**").then(msg => {msg.delete(5000)});
    message.delete(10000);
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('✅ **|** ***تم الانتهاء من الامر***').then(msg => {msg.delete(10000)});
    }
    });
//removerole
client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "rrole") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign: | انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**🚫 | البوت لايملك صلاحيات **").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let RRole = message.content.split(" ").slice(2).join(" ");
    if(!RRole)return message.reply("⚠️ **| يجب عليك وضع اسم الرتبة**").then(msg => {msg.delete(5000)});
    message.delete(10000);
    message.guild.member(user).removeRole(message.guild.roles.find("name", RRole));
    message.reply('✅ **|** ***تم الانتهاء من الامر***').then(msg => {msg.delete(10000)});
    }
    });



client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'اعلام')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./a3lm/a3lm.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("اعلام  | Fury Bot", 'https://cdn.discordapp.com/avatars/464357784247599104/98777979b17586bc1af26beaa423e818.png')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //حقوق discord.jpei

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد فكك الكلمه `);
          })
        })
    })
}
});




client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = { 
        points: 0,
      };
    if (message.content.startsWith(prefix + 'ايموجي')) { 
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./emoje/emoje.json'); 
    const item = type[Math.floor(Math.random() * type.length)]; 
    const filter = response => { 
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
   message.channel.send({embed: new Discord.RichEmbed().setTitle('لديك ثانيه للاجابه بالجواب الصحيح').setThumbnail(`${item.type}`)}).then(function(m) {
             setTimeout(function() {
m.edit({embed: new Discord.RichEmbed().setTitle('لديك 15 ثانيه للاجابه بالجواب الصحيح').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
             }, 1000)
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الايموجي بالوقت المناسب**`);
            console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => { 
                message.channel.send(`:x: **لم يقم أحد بكتابة الايموجي بالوقت المناسب**`);
                console.log(`[Game] ماحد قال الاجابه`);
                    })
            })
    }
    });




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'رياضيات')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./read/read.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("رياضيات  | Fury Bot", 'https://cdn.discordapp.com/avatars/464357784247599104/98777979b17586bc1af26beaa423e818.png')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'ماينكرافت')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./minecraft/minecraft.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("ماينكرفت  | Fury Bot", 'https://cdn.discordapp.com/avatars/464357784247599104/98777979b17586bc1af26beaa423e818.png')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'عواصم')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./3wasem/3wasem.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**اديك 15 ثانيا لتوجد العاصمه الصحيحه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | DarkSide", 'https://cdn.discordapp.com/avatars/464357784247599104/98777979b17586bc1af26beaa423e818.png')
    .setDescription(`**اكتب عاصمه: ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لا يوجد احد كتب الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});

let points = JSON.parse(fs.readFileSync('./Points.json', 'utf8'));
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'فكك')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fakk/fakk.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answer 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكك الكلمه **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("فكك  | Fury Bot", 'https://cdn.discordapp.com/avatars/464357784247599104/98777979b17586bc1af26beaa423e818.png')
    .setDescription(`**قم بكتابه الكلمه مفككه : ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **ماحد قال الاجابه الصحيحه**`);
            console.log(`[Typing] ماحد فكك الكلمه `);
          })
        })
    })
}
});

//fort
client.on('message', async message => {
      //!fortnite Ninja solo pc
  let Client = require('fortnite');
  let fortnite = new Client('2bb97881-c068-4cba-b3b5-152abfc71c83');
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + "fortnite")) {
        let username = args[0];
        let platform = args[2] || 'pc';
        let gamemode = args[1];
        if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply(`⚠️ **|  ${prefix}fortnite username solo/duo/squad/lifetime pc**`);
        
    if(!username) return message.reply('**Specify a username!**');
    
    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        
        if(gamemode === 'solo') {
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Solo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else if (gamemode === 'duo') {
            let Duostats = stats.duo;
            let score = Duostats.score;
            let kd = Duostats.kd;
            let matches = Duostats.matches;
            let kills = Duostats.kills;
            let wins = Duostats.wins;
            let top3 = Duostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
        message.channel.send(ByEmbed);

        }else if(gamemode === 'squad') {
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;
            
            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Squad Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else {
            
        
        let lifetime = stats.lifetime;
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        
                    let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",mplayed,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Win Percentage:",winper,true)
            
        message.channel.send(ByEmbed);
    }
    })
    }
});

  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})

  client.on('message', message => {
    if(message.content == prefix + 'bans'){
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("⛔ **| لا يمكنك استخدام هذا الأمر**").then(msg => msg.delete(5000));;
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});


client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('guildCreate', guild => {
  client.channels.get("496527687599390721").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("496527687599390721").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});

client.on('message', message => {
    if (message.author.bot) return;
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'drown')){
 if(!message.author.id === '316324088865882142') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('guildMemberAdd', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('496527687599390721').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('496527687599390721').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.on('guildMemberRemove', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('496527687599390721').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('496527687599390721').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.login(process.env.BOT_TOKEN);
