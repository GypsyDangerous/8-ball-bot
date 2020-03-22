const ytdl = require('ytdl-core');

const voice_channel_id = "690338225994465450"

let dispatcher

module.exports = async (msg, {args}, client) => {
    const channels = (client.channels.cache.array())
    // const channel = channels.find(ch => ch.id == voice_channel_id);
    const channel = msg.member.voice.channel
    if (!channel) return msg.channel.send("You are not in any channel right now!");

    if(args[0] === "leave"){
        dispatcher = false
        return channel.leave()
    }
    if(!dispatcher){
        channel.join().then(connection => {
            console.log("Successfully connected.");
            dispatcher = connection.play(ytdl("https://www.youtube.com/watch?v=M5d7vygUPoQ&t=2s", { quality: "highestaudio", filter: "audioonly" }))
                .on("end", () => {
                    console.log("Music Ended")
                    channel.leave()
                    dispatcher = false
                })
                .on("error", error => { console.error(error) })
                .setVolume(1)
        }).catch(e => {
            console.error(e);
        });
    }else{
        await msg.channel.send(`This dot already running in ${client.voice.connections.array()[0].channel}`)
    }
}