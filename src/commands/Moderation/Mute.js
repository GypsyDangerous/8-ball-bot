module.exports = {
    mute: async (msg, {args}, client, config) => {
        const username = args.join(" ")
        const member = (await msg.guild.members.fetch({query: username})).array()[0]
        member.roles.add(config.mutedRole)
    },
    unmute: async (msg, {args}, client, config) => {
        const username = args.join(" ")
        const member = (await msg.guild.members.fetch({ query: username })).array()[0]
        member.roles.remove(config.mutedRole)
    }
}