const moment = require("moment");
require("moment-duration-format");

const { Command } = require("../../functions")
const uptime = async (msg, args, client) => await msg.channel.send("Uptime: " + moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"))


module.exports = new Command(
    uptime,
    "get bot uptime",
    [`uptime`],
    "Information"
)