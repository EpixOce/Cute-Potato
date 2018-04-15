const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(":x: **The DiscordRPG prefix in this server is `,`**")
}

module.exports.help = {
    name: "adv"
}
