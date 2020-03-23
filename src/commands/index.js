const ping = require("./Information/ping")
const random = require("./Fun/random")
const eightball = require("./Games/eightball")
const help = require("./Information/help")
const userinfo = require("./Information/userinfo")
const rps = require("./Games/rps")
const numbot = require("./Games/numGuess")
const remind = require("./Information/reminder")
const {clear, thisdot, settings, mute, unmute, modWare} = require("./Moderation")
const fs = require("fs")
const path = require("path")

const configPath = path.join(__dirname, "..", "..", "config.json")

// TODO: coming soon
// const {subscribe, unsubscribe} = require("./roleHandling")

const moment = require("moment");
require("moment-duration-format");
const uptime = async (msg, args, client) => await msg.channel.send("Uptime: " + moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"))

class Command{
    constructor(prefix, func, description, usage, category, perms){
        if(!perms || perms.length === 0){
            this.perms = []
            this.isMod = false
            this.execute = func
        }else{
            this.perms = perms
            this.isMod = true
            this.execute = (msg, args, client, config) => modWare(msg, args, client, config, perms, func)
        }
        this.helptext = {
            description,
            usage: usage.map(use => prefix+use),
            category
        }
    }
}


const functions = ({prefix, modPerms}) => {return {
    "ping": new Command(
        prefix,
        ping, 
        "I respond with pong if I'm up and running", 
        [`ping`], 
        "Information"
    ),
    "random": new Command(
        prefix,
        random, 
        "if no arguments are given I'll give you a random number between 0 and 1 but if you give me an argument I'll multiply my return value by that argument",  
        ["random", "random <multiplier>", "random 'pi'", "random 'e'", "random meme", "random emoji"], 
        "Fun"
    ),
    "8ball": new Command(prefix, eightball, "ask my 8 ball a question and get a prediction", ["8ball <question>"], "Game"),
    "userinfo": new Command(prefix, userinfo,  "returns info about the message sender or given username", ["userinfo", "userinfo <username>"], "Information"),
    "rps": new Command(prefix, rps, "play rock, paper, scissors with the bot", [`rps rock || paper || scissors`], "Game"),
    "numbot": new Command(
        prefix, 
        numbot, 
        "a bot that thinks of a number that you have to guess", 
        ["numbot start", "numbot start <multiplier>", "numbot guess <guess>", "numbot status", "numbot stop"],
        "Game, Bot"
    ),
    "thisdot": new Command(
        prefix, 
        thisdot, 
        "Enters a voice chat and plays this song, will be removed from the removed from the server if leave is executed", 
        ["thisdot", "thisdot leave"], 
        "Fun",
        modPerms
    ),
    "remind": new Command(
        prefix, 
        remind, 
        "sets a reminder that will mention the chosen user after a set period of time", 
        ["remind <username> <time> <reminder>"],
        "Utility"
    ),
    "uptime": new Command(
        prefix,
        uptime,
        "get bot uptime",
        [`uptime`],
        "Information"
    ),
    "clear": new Command(
        prefix, 
        clear, 
        "deletes all messages up to a given amount (100 max)",
        ["clear <amount>"],
        "Moderation",
        modPerms
    ),
    "settings": new Command(
        prefix, 
        settings,
        "manage bot settings for this server",
        ["settings"],
        "Moderation",
        modPerms
    ),
    "mute": new Command(
        prefix, 
        mute, 
        "mute the given user",
        ["mute <user>"],
        "Moderation",
        modPerms
    ),
    "unmute": new Command(
        prefix, 
        unmute, 
        "unmute given user", 
        ["unmute <user>"], 
        "Moderation",
        modPerms
    ),
    "help": new Command(
        prefix,
        help,
        "if no parameters are given returns command list otherwise will give on the given function,\nusage: `!help [command]`",
        ["help", "help <command>"],
        "Information"
    )
}}



module.exports = async (msg, client) => {
    const { content, guild: { id: guildId }, channel: { name, id } } = msg
    if (msg.author.bot) return

    const configFile = JSON.parse(fs.readFileSync(configPath))
    let botConfig = configFile[msg.guild.id]
    if(!botConfig){
        botConfig = configFile[msg.guild.id] = {
            prefix: "!",
            botTalkId: ""
        }
        fs.writeFileSync(configPath, JSON.stringify(configFile))
    }
    const prefix = botConfig.prefix
    const botTalk = botConfig.botTalkId

    if(msg.content.startsWith(prefix)){
        if (!botTalk || msg.channel.id == botTalk) {
            const args = msg.content.split(" ")
            const command = args.shift().substr(prefix.length).toLowerCase()
            const allFunctions = functions(botConfig)
            const func = allFunctions[command]
            if(func){
                func.execute(msg, { args, functions: allFunctions, config: botConfig}, client)
            }
        }
    }
}