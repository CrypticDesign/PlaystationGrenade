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
     .addField("Support", "**help** - Gives you a list of commands!\n**serverinfo** - Check the info of the server you're in!\n**ping** - Checks Ping!")
     .addField("Special", "**weather** - Checks the weather in a certain area!")
     .addField("Moderator", "**clear** - Clear a certain ammount of messages!")

    return message.channel.send(hembed);
    
}

module.exports.help = {
    name: "help"
}

