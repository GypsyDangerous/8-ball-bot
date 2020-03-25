const { isNumeric, randomChoice } = require("../../functions")
const { MessageEmbed } = require("discord.js")

const {Command} = require("../../functions")

const rps = async (msg, args) => {
    const options = ["rock", "paper", "scissors"]

    if (args.length === 0 || !options.includes(args[0].toLowerCase())) {
        return msg.channel.send("Invalid or missing Move")
    }

    const playerMove = args[0].toLowerCase()

    const botMove = randomChoice(options)

    const p1 = options.indexOf(playerMove)+1
    const p2 = options.indexOf(botMove)+1
    let str = "We Tied"

    if (p1 == 1){
        if (p2 == 2){
            str = "I Win"
        }
        else if (p2 == 3) {
            str = "You Win"
        }
    }
    else if(p1 == 2){
        if (p2 == 1){
            str = "You Win"
        }
        else if(p2 == 3){
            str = "I Win"
        }
    }
    else if(p1 == 3){
        if (p2 == 1){
            str = "I Win"
        }else if(p2 == 2){
            str = "You Win"
        }   
    }

    const inline = true

    const response = new MessageEmbed()
        .setTitle("Rock Paper Scissors")
        .addFields(
            {name: "Your move", value: playerMove, inline},
            {name: "My move", value: botMove, inline},
            {name: "Winner", value: str}
        )
    msg.channel.send(response) 

}

module.exports = new Command(rps, "play rock, paper, scissors with the bot", [`rps rock || paper || scissors`], "Game")