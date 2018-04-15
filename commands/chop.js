const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(":evergreen_tree: " + `${message.author.username}` + " went to chop some wood but got scared by a Bear and ran away.")
}

module.exports.help = {
    name: "chop"
}
