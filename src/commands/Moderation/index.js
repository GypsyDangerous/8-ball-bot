const middleware = (msg, {args}, client) => {
    if (!msg.member.permissions.any(["MANAGE_MESSAGES"])){
        msg.channel.send("you don't have permission to use this command")
        return false
    }
    return true
}

const clear = require("./clear")

module.exports = {
    clear: (msg, args, client) => {if(middleware(msg, args, client)) clear(msg, args, client)}
}