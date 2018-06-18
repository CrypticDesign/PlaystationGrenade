const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command!");
    if(!args[0]) return message.channel.send("Please specify the number of messages you are deleting!");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages. :bomb:`).then(msg => msg.delete(5000));
    });
}

module.exports.help = {
    name: "clear"
}