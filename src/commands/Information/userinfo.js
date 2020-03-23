const discord = require("discord.js")
const {formatFromNow} = require("../../functions")

module.exports = async (msg, {args}) => {
    let member
    if(args.length === 0){
        member = msg.member
    }else{
        const allMembers = (await msg.guild.members.fetch()).array().filter(member => {
            try{
                return member.user.username.toLowerCase() === args.join(" ").toLowerCase() || member.nickname.toLowerCase() === args.join(" ").toLowerCase()
            }catch(err){
                return false
            }
        })

        if (allMembers.length == 0){
            return msg.channel.send("❌ User not Found")
        }
        member = (await msg.guild.members.fetch({query: args.join(" ")})).array()[0]
    }

    const joined = formatFromNow(member.joinedAt)
    const created = formatFromNow(member.user.createdAt)

    const avatar = (member.user.displayAvatarURL())

    const roles = async () => Promise.all(member._roles
        .filter(r => r.id !== msg.guild.id)
        .map(async r => await msg.guild.roles.fetch(r))) || "none"

    let userRoles = (await roles()).map(r => `\`${r.name}\``)

    if(userRoles.length === 0){
        userRoles = ["This user has no Roles"]
    }

    const inline = true

    const embed = new discord.MessageEmbed('')
        .setFooter(member.displayName, avatar)
        .setThumbnail(avatar)
        .setColor(member.displayHexColor === "#000000" ? "#FFFFFF" : member.displayHexColor)
        .addField("status",  member.displayName + " is "+member.presence.status)
        .addFields(
            {name: "Display Name", value: member.displayName, inline},
            { name: "Joined at", value: (joined), inline},
            {name: `Roles [${userRoles.length}]`, value: userRoles, inline},
            {name: "account created", value: created, inline},
            {name: "Bot", value: member.user.bot ? "This user is a bot, Beep Boop" : "This user is not a bot", inline})
        .setAuthor(member.user.tag, avatar)

    msg.channel.send(embed)
}