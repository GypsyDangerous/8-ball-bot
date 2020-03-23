const {stripIndents} = require("common-tags")
const { MessageEmbed} = require("discord.js")
const {capitalize} = require("../../functions")

module.exports = async (msg, {args, functions, config}) => {
    if(args.length === 0){    
        let Available = Object.keys(functions).filter(key => !functions[key].isMod).join("`, `")
        try{
            if(msg.member.permissions.any(config.modPerms)){
                Available = Object.keys(functions).join("`, `")
            }
        }catch(err){
            // console.log(err.message)
        }
        let commands = stripIndents`The Available commands are:
        
        ${"`" + Available + "`"}
        
        tip: type ${"`!help <command>`"} for help that command`
        msg.channel.send(commands)
    }else{
        const inline = true
        let helptext = functions[args[0]]
        if(helptext){
            helptext = helptext.helptext
            const embedHelpText = new MessageEmbed()
                .setTitle(capitalize(args[0]))
                .setColor(msg.member.displayHexColor === "#000000" ? "#FFFFFF" : msg.member.displayHexColor)
                .addField("description", helptext.description)
                .addFields(
                    {name: "Usage(s)", value: helptext.usage.join("\n"), inline},
                    {name: "Category", value: helptext.category, inline}
                )
            msg.channel.send(embedHelpText)
        }
        else{
            msg.channel.send("command not found")
        }
    }
}