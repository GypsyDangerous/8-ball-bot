const fs = require("fs")
const path = require("path")

const configPath = path.join(__dirname, "..", "..", "..", "config.json")

const { Command } = require("../../functions")
// TODO : add more settings

const commandMap = {
    "-px": "prefix",
    "-bt": "botTalkId",
    "-vm": "verboseModeration"
}

const settings = async (msg, args, client) => {
    const guildId = msg.guild.id
    const guildConfig = client.guildConfig
    if(args.length > 0 && args.length % 2 != 0){
        return await msg.channel.send("You are missing a value for one of the settings you want to set")
    }else if(args.length === 0){
        return await msg.channel.send("The available settings are:\n " + Object.keys(commandMap).map(key => `${key}: ${commandMap[key]}\n`).join(" "))
    }
    for(let i = 0; i < args.length; i+=2){
        const command = args[i]
        let arg = args[i+1]
        if(["true", "false"].includes(arg.toLowerCase())){
            arg = arg === "true"
        }
        const setting = commandMap[command]
        if(Object.keys(commandMap).includes(command)){
            guildConfig[setting] = arg
        }
    }
    fs.writeFileSync(configPath, JSON.stringify(client.config, null, 4))
}

module.exports = new Command(
    settings,
    "manage bot settings for this server",
    ["settings"],
    "Moderation",
    true
)