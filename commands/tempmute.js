const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    
    // !tempmute @user 1s/m/h/d 
    
    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("Couldn't find user!");
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Couldn't mute that user!");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you do not have permission to use this command!");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) {
        try{
            muterole = await message.guild.createole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    
    let mutetime = args[1];
    if(!mutetime) return message.reply("you didn't specify a time!");
    
    await(tomute.addTole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)}`);
    
    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
        
    }, ms(mutetime));
    
    
}

module.exports.help = {
    name: "tempmute"
}