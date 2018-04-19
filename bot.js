const config = require("./config.json");
const Discord = require("discord.js");
const superagent = require("superagent");

const bot = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection();

const fs = require("fs");
fs.readdir("./commands/", (err, files) => {

    if(err) console.log (err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Cannot find command.");
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded.`);
        bot.commands.set(props.help.name, props);
    })
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is up and running!`)
    bot.user.setActivity("Epix grind", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    if(message.content === "owo") {
        const owo = "**OwO**"
        setTimeout(function() {
            message.reply(owo);
            message.edit(" ");
            }, 10000);
    };

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return; 

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
    
});

bot.login(process.env.BOTTOKEN);
