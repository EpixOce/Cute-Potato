const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You do not have the permission to do that!");

    let poll = args.join(" ");
    let avatar = message.author.avatarURL;

    let pollembed = new Discord.RichEmbed()
    .setColor("#f7e37e")
    .addField("Poll", poll)
    .setFooter(`Poll created by ${message.author.username}`, avatar)
    .setTimestamp(new Date());
    
    let pollchannel = message.guild.channels.find('name', "polls");
    if(!pollchannel) return message.channel.send("Couldn't find a channel with the name '#polls'.");

    setTimeout(function() {
        message.delete().catch;
    }, 10000);

    let msg = await pollchannel.send(pollembed);
    await msg.react("❌");
    await msg.react("🤔");
    await msg.react("✅")  
}

module.exports.help = {
    name: "poll"
}
