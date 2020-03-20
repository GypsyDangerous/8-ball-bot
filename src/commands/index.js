const ping = require("./Information/ping")
const random = require("./Fun/random")
const eightball = require("./Games/eightball")
const help = require("./Information/help")
const userinfo = require("./Information/userinfo")
const rps = require("./Games/rps")
const numGuess = require("./Games/numGuess")
const thisdot = require("./Fun/thisdot")
const remind = require("./Information/reminder")
const {clear} = require("./Moderation")

// TODO: coming soon
// const {subscribe, unsubscribe} = require("./roleHandling")

const prefix = "!"

const moment = require("moment");
require("moment-duration-format");
const uptime = async (msg, args, client) => await msg.channel.send("Uptime: " + moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"))

// TODO: coming soon
// const vader = require('vader-sentiment');
// const input = 'VADER is very smart, handsome, and funny';
// const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
// console.log(intensity);
// // {neg: 0.0, neu: 0.299, pos: 0.701, compound: 0.8545}

const functions = {
    "ping": {
        execute: ping, 
        helptext: {
            description: "I respond with pong if I'm up and running",
            usage: [prefix +`ping`],
            category: "Information"
        }
    },
    "random": {
        execute: random, 
        helptext: { 
            description: "if no arguments are given I'll give you a random number between 0 and 1 but if you give me an argument I'll multiply my return value by that argument",
            usage: [prefix + "random", prefix + "random [multiplier]", prefix+"random 'pi'", prefix+"random 'e'", prefix + "random 'meme'", prefix +"random 'emoji'"],
            category: "Fun"
        }
    },
    "8ball": {
        execute: eightball, 
        helptext: {
            description: "ask my 8 ball a question and get a prediction",
            usage: [prefix +"8ball [question]"],
            category: "Game"
        }
    },
    "userinfo": {
        execute: userinfo,
        helptext: {
            description: "returns info about the message sender or given username",
            usage: [prefix +"userinfo", "!userinfo [username]"],
            category: "Information"
        }
    },
    "rps": {
        execute: rps, 
        helptext: {
            description: "play rock, paper, scissors with the bot",
            usage: [prefix +`rps rock | paper | scissors`],
            category: "Game"
        }
    },
    "numbot": {
        execute: numGuess, 
        helptext: {
            description: "a bot that thinks of a number that you have to guess",
            usage: [prefix + "numbot start", prefix+"numbot start [multiplier]", prefix + "numbot guess [guess]", prefix + "numbot status", prefix +"numbot stop"],
            category: "Game, Bot"
        }
    },
    "thisdot": {
        execute: thisdot, 
        helptext: {
            description: "Enters a voice chat and plays this song, will be removed from the removed from the server if leave is executed",
            usage: [prefix + "thisdot", prefix +"thisdot [leave]"],
            category: "Fun"
        }
    },
    "remind": {
        execute: remind, 
        helptext: {
            description: "sets a reminder that will mention the chosen user after a set period of time",
            usage: [prefix+"remind [username] [time] [reminder]"],
            category: "Utility"
        }
    },
    "uptime":{
        execute: uptime,
        helptext: {
            description: "get bot uptime",
            usage: [`${prefix}uptime`],
            category: "Information"
        }
    },
    "clear": {
        execute: clear,
        helptext: {
            description: "deletes all messages up to a given amount (100 max)",
            usage: [prefix+"clear [amount]"],
            category: "Moderation"
        }
    },
    "help": {
        execute: help, 
        helptext: {
            description: "if no parameters are given returns command list otherwise will give on the given function,\nusage: `!help [command]`",
            usage: [prefix + "help", prefix +"help [command]"],
            category: "Information"
        }
    }
}



module.exports = async (msg, client) => {
    const { content, guild: { id: guildId }, channel: { name, id } } = msg
    if (msg.author.bot) return

    if(msg.content.startsWith(prefix)){
        if (guildId == "689872791331405900" && msg.channel.id == "689872895849267302") {
            const args = msg.content.split(" ")
            const command = args.shift().substr(prefix.length).toLowerCase()
            const func = functions[command]
            if(func){
                func.execute(msg, {args, functions}, client)
            }
        }
    }
}