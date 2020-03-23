const { Permissions } = require("discord.js");

const modWare = (msg, args, client, config, modPerms, cb) => {
    // this try catch is required due to a bug in discordjs v12
    try{
        if (msg.member.permissions.any(modPerms)){
            cb(msg, args, client, config)
        }else{
            msg.channel.send("you don't have permission to use this command")
            return false
        }
    }catch(err){
        msg.channel.send("you don't have permission to use this command")
    }
}

const clear = require("./clear")
const thisdot = require("./thisdot")
const settings = require("./settings")
const {mute, unmute} = require("./Mute")


module.exports = {
    modWare,
    clear,
    thisdot,
    settings,
    mute,
    unmute,
}