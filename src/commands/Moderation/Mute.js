const {Command} = require("../../functions")
const mute = async (msg, args, client) => {
        const config = client.guildConfig
        const username = args.join(" ")
        const member = (await msg.guild.members.fetch({query: username})).array()[0]
        member.roles.add(config.mutedRole)
    }

module.exports = new Command(
    mute,
    "mute the given user",
    ["mute <user>"],
    "Moderation",
    true
)