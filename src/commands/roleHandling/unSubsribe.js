const unsubscribe = async (msg, args, client) => {
    const config = client.guildConfig

    await msg.channel.senf("You have been unsubscribed from notifications")
}

const { Command } = require("../../functions")



module.exports = new Command(
    unsubscribe,
    "unsubscribes you to notifications",
    ["unsubscribe"],
    "RoleHandling"
)
