const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = [
        "Nothing. Blame Epix for making this.",
        "100k gold! Ping Epix to claim!",
        "250k gold! Ping Epix to claim!",
        "100 potatoes! Ping Epix to claim!",
        "A ticket to spin again!",
        "2 tickets! Spin 2 more times!",
        "A hug from zhayie! Ping her to claim!"
    ];

    let result = Math.floor((Math.random() * replies.length));

    let spinembed = new Discord.RichEmbed()
    .setColor("#b3f9e3")
    .addField("You spin the wheel and got...", replies[result]);

    message.channel.send(spinembed);
}

module.exports.help = {
    name: "spin"
}
