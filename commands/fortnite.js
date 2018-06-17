const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client(process.env.FAPIKEY);

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let username = args[0];
    let platform = args[1];
    
    if(!username) return message.reply("Please provide a username.")
    
    let data = fortnite.user(username, platform).then(data => {
        console.log(data);
    });
    
}

module.exports.help = {
    name: "fortnite"
}