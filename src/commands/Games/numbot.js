const { isNumeric } = require("../../functions")

const { Command } = require("../../functions")
let high = 100
let status = false
let thought = Math.ceil(Math.random()*high)
let currentGuess = 0
let trys = 0

const startHandler = (msg, args) => {
    if (status) {
        msg.channel.send(`I have already been started, the current guess is \`${currentGuess}\``)
    } else {
        status = true
        if(args.length === 0 || !isNumeric(args[0])) {
            high = 100
        }else{
            high = Number(args[0])
        }
        thought = Math.ceil(Math.random() * high)
        trys = 0
        msg.channel.send("Started! I am thinking of a number betweeen 1 and "+high)
    }
}

const guessHandler = (msg, args) => {
    if(status){
        if(args.length === 0 || !isNumeric(args[0])){
            msg.channel.send("Invalid or missing guess, current guess is " + currentGuess)
        }else{
            currentGuess = Number(args[0])
            trys++
            if(currentGuess > high){
                return msg.channel.send("That guess is way to high, I will only pick numbers between 1 and "+high)
            }if(currentGuess <= 0){
                return msg.channel.send("That guess is way to low I will never choose a number less than 1")
            }
            if(currentGuess > thought){
                msg.channel.send("Your guess is to high")
            }else if(currentGuess < thought){
                msg.channel.send("Your guess is to low")
            }else if(currentGuess === thought){
                msg.channel.send(`You got it in ${trys} guesses!`)
                status = false
                // msg.channel.send("I'm shutting down, wake me up with !numbot start")
            }
        }
    }
}

const stopHandler = msg => {
    if(status){
        msg.channel.send("shutting down")
        status = false
    }
}


const guessCommands = {
    "guess": guessHandler,
    "start": startHandler,
    "stop": stopHandler,
    "status": msg => msg.channel.send(status ? "online" : "offline")
}


const numbot = async (msg, args) => {
    let action = args.shift()

    const validActions = Object.keys(guessCommands)

    if(status && !action){
        action = "guess"
    }

    if(!action || !validActions.includes(action.toLowerCase())) {
        return msg.channel.send("Invalid or missing action")
    }
    action = action.toLowerCase()
    
    const command = guessCommands[action]
    if(command){
        command(msg, args)
    }
    if(!status && action !== "status"){
        msg.channel.send("Numbot offline, type !numbot start to start me up")
    }
}

module.exports = new Command(
    numbot,
    "a bot that thinks of a number that you have to guess",
    ["numbot start", "numbot start <multiplier>", "numbot guess <guess>", "numbot status", "numbot stop"],
    "Game, Bot"
)