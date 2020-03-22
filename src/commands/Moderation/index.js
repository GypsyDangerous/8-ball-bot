const middleware = (msg, config) => {
    const modRole = config.moderatorRole
    if (!msg.member._roles.includes(modRole) && !msg.member.permissions.any(["ADMINISTRATOR"])){
        msg.channel.send("you don't have permission to use this command")
        return false
    }
    return true
}

const clear = require("./clear")
const thisdot = require("./thisdot")
const settings = require("./settings")
const {mute, unmute} = require("./Mute")


module.exports = {
    clear: (msg, args, client, config) => { if (middleware(msg, config)) clear(msg, args, client, config)},
    thisdot: (msg, args, client, config) => { if (middleware(msg, config)) thisdot(msg, args, client, config)},
    settings: (msg, args, client, config) => { if (middleware(msg, config)) settings(msg, args, client, config)},
    mute: (msg, args, client, config) => { if (middleware(msg, config)) mute(msg, args, client, config)},
    unmute: (msg, args, client, config) => { if (middleware(msg, config)) unmute(msg, args, client, config)},
}