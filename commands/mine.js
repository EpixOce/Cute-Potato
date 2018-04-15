const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(":pick: " + `${message.author.username}` + " found a Cinnabar, got poisoned and died.")
}

module.exports.help = {
    name: "mine"
}
