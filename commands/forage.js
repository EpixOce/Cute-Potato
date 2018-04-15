const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(":blossom: " + `${message.author.username}` + " went foraging and got stung by Bees.")
}

module.exports.help = {
    name: "forage"
}
