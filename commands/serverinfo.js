const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    message.delete().catch(O_o => {});
    
    let servericon = message.guild.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
     .setDescription("**Server Information**")
     .setColor(botconfig.blue)
     .setThumbnail(servericon)
     .addField("Server Name", message.guild.name)
     .addField("Created On", message.guild.createdAt)
     .addField("You Joined", message.member.joinedAt)
     .addField("Total Members", message.guild.memberCount);
     
     return message.channel.send(serverembed);
    
}

module.exports.help = {
    name: "serverinfo"
}