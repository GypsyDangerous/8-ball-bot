const fs = require("fs")
const path = require("path")

const configPath = path.join(__dirname, "..", "..", "..", "config.json")

// TODO : add more settings

module.exports = (msg, {args}, client) => {
    const guildId = msg.guild.id
    const configFile = JSON.parse(fs.readFileSync(configPath))
    const guildConfig = configFile[guildId]
    
    for(let i = 0; i < args.length; i+=2){
        const command = args[i]
        const arg = args[i+1]
        if(command === "-px"){
            guildConfig.prefix = arg
        }else if(command == "-bt"){
            guildConfig.botTalkId = arg
        }else if(command == "-vm"){
            guildConfig.verboseModeration = arg === "true"
        }
    }
    if(guildConfig.verboseModeration){
        msg.channel.send(JSON.stringify(configFile))
    }
    fs.writeFileSync(configPath, JSON.stringify(configFile))
}