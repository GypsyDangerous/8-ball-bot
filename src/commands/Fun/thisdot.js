const ytdl = require('ytdl-core');

const voice_channel_id = "690338225994465450"

module.exports = async (msg, {args}, client) => {
    const channels = (client.channels.cache.array())
    const channel = channels.find(ch => ch.id == voice_channel_id);
    if (!channel) return console.error("The channel does not exist!");

    if(args[0] === "leave"){
        return channel.leave()
    }

    channel.join().then(connection => {
        console.log("Successfully connected.");
        const dispatcher = connection.play(ytdl("https://www.youtube.com/watch?v=M5d7vygUPoQ&t=2s", { quality: "highestaudio", filter: "audioonly" }))
            .on("end", () => {
                console.log("Music Ended")
                channel.leave()
            })
            .on("error", error => { console.error(error) })
            .setVolume(1)
    }).catch(e => {
        console.error(e);
    });
}