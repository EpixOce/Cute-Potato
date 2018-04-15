const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(":fishing_pole_and_fish: " + `${message.author.username}` + " caught a Shark and got their head bitten off.")
}

module.exports.help = {
    name: "fish"
}
