const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let request = args.join(" ");
    let avatar = message.author.avatarURL;

    let requestembed = new Discord.RichEmbed()
    .setColor("#f7e37e")
    .addField("Request", request)
    .setFooter(`Requested by ${message.author.username}`, avatar)
    .setTimestamp(new Date());
    

    let requestchannel = message.guild.channels.find('name', "requests");
    if(!requestchannel) return message.channel.send("Couldn't find a channel with the name '#requests'.");

    setTimeout(function() {
        message.delete().catch;
    }, 10000);

    requestchannel.send(requestembed);  
}

module.exports.help = {
    name: "request"
}
