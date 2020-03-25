const { Command } = require("../../functions")
const subscribe = async (msg, args, client) => {
    const config = client.guildConfig
    await msg.channel.send("You have been subscribed to notifications")
}



module.exports = new Command(
    subscribe,
    "subscribes you to notifications",
    ["subscribe"],
    "RoleHandling"
)
