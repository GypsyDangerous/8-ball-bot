const { Command } = require("../../functions")
const unMute = async (msg, args, client) => {
    const config = client.guildConfig
    const username = args.join(" ")
    const member = (await msg.guild.members.fetch({ query: username })).array()[0]
    member.roles.remove(config.mutedRole)
}

module.exports = new Command(
    unMute,
    "unmute given user",
    ["unmute <user>"],
    "Moderation",
    true
)