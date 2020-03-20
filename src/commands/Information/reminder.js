const days = millis => (millis * (60 * 60 * 24 * 1000))

const {isNumeric} = require("../../functions")
const fs = require("fs")
const path = require("path")

const jsonPath = path.join(__dirname, '..', "Information", 'reminders.json');
const reminders = JSON.parse(fs.readFileSync(jsonPath, "utf-8"))

// console.log((reminders)) 

// TODO: fix



module.exports = async (msg, {args}, client) => {
    if(args.length === 0){
        return msg.channel.send("Who should I remind?")
    }
    let user = args.shift()
    let time = args.shift()
    if(!time || !isNumeric(time)){
        return msg.channel.send("Invalid Time")
    }
    const daytime = time
    time = days(Number(time))
    console.log(time)
    if(args.length === 0){
        return msg.channel.send("Whats the reminder")
    }
    const member = (await msg.guild.members.fetch({query: user})).array()[0]
    msg.channel.send(`Ok, I'll remind ${member.displayName} to ${args.join(" ")} in ${daytime} days aka ${time} milliseconds`)

    setTimeout(() => {
        msg.channel.send(`${member.user}, you need to ${args.join(" ")}`)
    }, time)
}
