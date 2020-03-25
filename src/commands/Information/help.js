const { stripIndents } = require("common-tags")
const { MessageEmbed } = require("discord.js")
const { capitalize, hasPermsission, Command } = require("../../functions")



const help = async (msg, args, client) => {
    const config = client.guildConfig
    const functions = client.commands.map(c => c.name)
    if(args.length === 0){    
        let Available = functions.join("`\n - `")
        if (hasPermsission(msg.member, config.modPerms)){
            Available = functions.join("`\n - `")
        }
        let commands = stripIndents`The Available commands are:\n - ${"`" + Available + "`"}`

        const embed = new MessageEmbed()
            .setTitle("Help")
            .addField("Description", "This bot has numerous commands running from games to moderation")
            .addField("Commands", commands)
            .addField("Tips", stripIndents` - Some commands are moderator only
            - Run \`${config.prefix}help <command>\` to get help on a specific command`)
            .setFooter("Omnibot Help")
            .setColor(msg.member.displayHexColor === "#000000" ? "#FFFFFF" : msg.member.displayHexColor)
        msg.channel.send(embed)
    }else{
        const inline = true
        const command = args[0]
        let helptext = client.commands.get(command)
        if(functions.includes(command)){
            helptext = helptext.helptext
            const embedHelpText = new MessageEmbed()
                .setTitle(capitalize(args[0]))
                .setColor(msg.member.displayHexColor === "#000000" ? "#FFFFFF" : msg.member.displayHexColor)
                .addField("description", helptext.description)
                .addFields(
                    {name: "Usage(s)", value: helptext.usage.join("\n"), inline},
                    {name: "Category", value: helptext.category, inline}
                )
                .setFooter("Omnibot Help")
            msg.channel.send(embedHelpText)
        }
        else{
            msg.channel.send("command not found")
        }
    }
}

module.exports = new Command(
    help,
    "if no parameters are given returns command list otherwise will give on the given function,\nusage: `!help [command]`",
    ["help", "help <command>"],
    "Information"
)