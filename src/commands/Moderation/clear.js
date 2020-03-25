const {Command} = require("../../functions")
const { isNumeric } = require("../../functions")

const clear = async (msg, args, client) => {
    const config = client.guildConfig
    // let amount = Math.min(Math.max(Number(args.shift()), 1), 100)
    let amount = Number(args.shift())
    if(!isNumeric(amount)){
        return await msg.channel.send("Invalid amount of messages to clear")
    }
    if(amount > 100){
        return await msg.channel.send("The amount of messages to delete must be less 100")
    }else if(amount < 1){
        return await msg.channel.send("I can't clear less that 1 message")
    }

    const toDelete = await msg.channel.messages.fetch({ limit: amount+1 })
    msg.channel.bulkDelete(toDelete) // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
    if(config.verboseModeration){
        msg.channel.send(`cleared ${amount} messages`)
    }
}

module.exports = new Command(
    clear,
    "deletes all messages up to a given amount (100 max)",
    ["clear <amount>"],
    "Moderation",
    true
)