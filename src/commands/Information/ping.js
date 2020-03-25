const { Command } = require("../../functions")
const ping  = async (msg, args, client) => {
    const ping = await msg.channel.send("Pong!")
    msg.react("🏓")

    ping.edit(`Pong! Latency is \`${(ping.createdTimestamp - msg.createdTimestamp)}ms\`. Bot ping is \`${client.ws.ping}ms\` 💓 `)
}

module.exports = new Command(
    ping,
    "I respond with pong if I'm up and running",
    [`ping`],
    "Information"
)