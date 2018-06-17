const Discord = require("discord.js");
const bot = new Discord.Client();
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    message.delete().catch(O_o => {});
    
    let hicon = bot.user.displayAvatarURL;
    let hembed = new Discord.RichEmbed()
     .setDescription('List of All Commands! (prefix = ps!)')
     .setTitle('Commands')
     .setThumbnail(hicon)
     .setColor(botconfig.blue)
     .addField("help", "Gives you a list of commands!")
     .addField("ping", "Pong! (Checks Ping)")
     .addField("weather", "Check the weather in a certain area! [Usage: ps!weather <location>]");
     
    return message.channel.send(hembed);
    
}

module.exports.help = {
    name: "help"
}

