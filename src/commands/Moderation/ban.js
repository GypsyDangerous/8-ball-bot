const {Command} = require("../../functions")

const ban = async (msg, args, client) => {

}

module.exports = new Command(
    ban,
    "bans the given user",
    ["ban <username>"],
    "Moderation",
    true
)