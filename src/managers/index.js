const path = require("path")
const fs = require("fs")


const configPath = path.join(__dirname, "..", "..", "config.json")

const {walkSync} = require("../functions")

const loadCommands = client => {
    const commandPath = path.join(__dirname, "..", "commands")
    const dirs = fs.readdirSync(commandPath)
    const files = walkSync(dirs, commandPath)
    for(const file of files){
        const filePath = path.join(__dirname, "..", file)
        if(path.extname(filePath) === ".js"){
            const command = require(filePath)
            let name = path.basename(filePath)
            name = name.slice(0, name.length-3)
            command.name = name
            client.commands.set(name, command)
        }
    }
}

module.exports = {
    commandHandler: async (msg, client) => {
        const { content, guild: { id: guildId }, channel: { name, id } } = msg
        if (msg.author.bot) return

        client.guildConfig = client.config[msg.guild.id]
        if (!client.guildConfig){
            client.guildConfig = client.config[msg.guild.id] = {
                prefix: "!",
                botTalkId: ""
            }
            fs.writeFileSync(configPath, JSON.stringify(client.config))
        }
        const prefix = client.guildConfig.prefix
        const botTalk = client.guildConfig.botTalkId

        if(msg.content.startsWith(prefix)){
            if (!botTalk || msg.channel.id == botTalk) {
                const args = msg.content.split(" ")
                const command = args.shift().substr(prefix.length).toLowerCase()
                const func = client.commands.get(command)
                if(func){
                    func.execute(msg, args, client)
                }
            }
        }
    },
    loadCommands
}