const results = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'Most likely',
    'Outlook good',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Concentrate and ask again',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
]

const {randomChoice} = require("../../functions") 

module.exports = async (msg, {args}) => {
    if(args.length > 0){
        msg.channel.send(`${msg.author} ${randomChoice(results)} :8ball:`)
    }else{
        msg.channel.send("Invalid Question")
    }
}