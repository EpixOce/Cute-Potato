const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = [
        "Think positive.",
        "Don't make decisions when you are angry.",
        "Don't cry because it's over, smile because it happened.",
        "Be yourself, everyone else is already taken.",
        "If you tell the truth, you don't have to remember anything."
    ];

    let result = Math.floor((Math.random() * replies.length));

    let adviceembed = new Discord.RichEmbed()
    .setColor("#b3f9e3")
    .addField("Here's your advice:", replies[result]);

    message.channel.send(adviceembed);
}

module.exports.help = {
    name: "advice"
}
