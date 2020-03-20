const discord = require("discord.js")
const commandHandler = require("./commands")


require("dotenv").config()

const client = new discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })

client.once("ready", async () => {
    console.log("bot ready")
    // const channel = await client.channels.cache.array().filter(ch => ch.id === "689872895849267302")[0].send("I'm Online")
})

client.login(process.env.BOT_TOKEN) 


// client.on('message', (message) => antiSpam.message(message)); 

client.on("message", msg => commandHandler(msg, client)) 

client.on("guildMemberAdd", function (member) {
    member.roles.add("690449077825175552")
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
            await reaction.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
            return;
        }
    }
    if (reaction.message.id === "690149099608997998"){
        const reactor = await reaction.message.guild.members.fetch(user.id)
        if (console.log(reactor.roles._roles.array().includes("690449077825175552"))){
            reactor.roles.remove("690449077825175552")
        }
    }
})

client.on("messageDelete", (messageDelete) => {
    const channel = client.guilds.cache.array().find(g => g.id === "689872791331405900").channels.cache.array().find(ch => ch.id === '690540825691815936')
    try{
        if(messageDelete.channel != channel){
            channel.send(`Message from ${messageDelete.author.tag}: "${messageDelete.content}"  was deleted at ${messageDelete.channel}.`)
        }
    }catch(err){
        channel.send("the most recent deleted message wasn't cached so i won't be logged")
    }
}); 