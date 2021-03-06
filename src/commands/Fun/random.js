const fetch = require("node-fetch")
const {isNumeric, randomChoice} = require("../../functions")

const emoji = "🎢 🕕 🎩 📡 ☯ 🔦 🖱 🎅 ⚛ 👽 ♐️ ⏩ 💔 👕 🏢 🍛 🍃 🐍 🍔 🎃 🆑 🔽 🛢 🔸 👼 2️⃣ ✡ 🆘 🌕 😾 ♑️ ✔️ 🐚 ☮ 🌩 🚣 📗 🙈 🔔 🚛 🗡 😍 ◀️ 🏙 🐮 🕑 ☃ 👘 🍳 ⚰ 🐌 ⚜ 🍅 🌀 🌍 🦂 🙃 📻 🐎 🙁 ⛳️ 🍂 🚋 👉 🏠 🕐 🐘 🍬 🌼 🌶 ➰ 🍼 🐖 🚇 🛤 🔇 🐳 ⛈ 🍧 🚴 🍎 🏃 🎰 🐼 🏅 ❤️ 🛐 🚥 🌡 🏣 🏩 🦃 🚾 ▫️ 🔨 🖌 👇 📃 ▶️ 🉑 ⏪ 🚸 🔹 🌓 🔌 ♦️ ♌️ 🍵 🐞 🔐 ↕️ 🔠 💁 📦 🏖 💖 ⛲️ ⏰ 🕘 🍕 ☔️ 🔩 📀 ⏬ 🏓 🐑 👦 👭 🎬 👿 ⌚️ 🏟 🎉 👱 🖋 👤 🏒 🎸 🐈 📼 🎐 🕦 😖 🛬 🕌 🎈 🏵 ⛷ 🌨 📣 🗨 🛀 🛏 🤓 🎓 🍴 🐅 🏗 👙 ◻️ ☑️ 🚔 💿 🌵 🐻 🔑 ✉️ 📹 🔴 💗 🌁 ♒️ 🐀 💂 🏏 🚅 🚵 ⛑ 🏀 🎵 🏺 🛃 📝 ⏭ 🎞 🍟 💶 ⬆️ 🐤 8️⃣ 🐣 💼 🔍 🐏 🍙 📛 🈵 🤑 😥 *⃣ 🐜 🚼 ➖ 😎 👡 📵 👂 🎗 🗃 🌅 🎲 📭 👀 😐 🙀 🚽 🔘 📬 🕶 💄 🚖 😨 🕤 🈹 🕸 🚲 💋 🏨 🎑 🗑 🤔 💎 🈶 🔁 🕋 ✋ 🐭 👻 👲 🌞 💟 ⏏ 🏥 📑 👩 4️⃣ 👆 🈳 💈 🛌 ⛸ 🗿 ☢ 📎 😿 💏 💭 🚳 3️⃣ 🕞 🎴 🌿 🌒 💴 📐 7️⃣ 🍮 🚓 😅 ⚪️ 🐓 👺 ☪ ⛩ 🐟 🌂 🈯️ 🔊 🐝 😉 👅 😮 📤 👓 🛰 📙 ⚠️ ☺️ 🔖 🌠 ☘ 🐡 🐢 🛁 📠 Ⓜ️ 👏 🕹 🔚 📜 ❕ 🔀 😳 ♍️ 🏄 ☹ 🔧 🚞 ❌ 🍩 ▪️ 🆓 🕷 🌮 🎤 ↘️ 🌽 😌 🚎 🤐 🏆 🍷 💱 ⚡️ 😶 ✝ 🎊 🍤 📰 🚂 ⏯ 😈 💛 🔮 🔛 😰 🚗 ⚱ ⚗ 🌇 🌜 🚒 🌺 🀄️ 🕛 🏹 🕊 ⬜️ 🔒 ✖️ 🚍 📅 😹 🏸 🌻 👝 🏌 ⛹ 🚃 〰️ ⛪️ 👨 ✒️ 🕍 📌 🅾️ 😦 🗻 👢 😠 🔉 🎆 🧀 😑 👳 🏛 ⬅️ 🖇 🔟 🌃 🔬 🚮 💣 🕧 🍥 😂 🔰 ♥️ 💃 🔼 🐸 ☀️ 👶 👟 🙆 🌟 📥 📨 🆖 🗼 😄 🗝 🏐 1️⃣ 🎪 🈺 🌆 🙉 😽 🏑 ♋️ 🔻 🔢 👚 🔡 📆 🐦 🌴 💩 💹 🍐 🗞 🕗 🎇 🎭 🔭 💢 ☣ 🎮 👃 🍦 🕖 👵 😕 👖 👮 👹 ◾️ ♿️ 🙊 😵 🍶 🖍 💆 🔆 🌛 ⚫️ 🗣 💀 🏔 ⏺ 😘 👾 💓 😴 🎽 🈚️ 🐙 ©️ 🚕 🐴 🆗 🚈 🎿 🈴 🚝 🗳 🎚 💚 🌑 🌳 🛫 😼 🚄 🔺 ⛎ 🐇 💒 🔞 🔷 🐂 🐔 ⛴ ✳️ ❄️ 🍾 👗 🚪 🏤 🆎 🏝 📸 🎧 📏 🕔 🕡 🎱 ↗️ 🚻 🐬 📱 🏋 ⤴️ 🈂️ 🎋 🐹 🕝 💕 🎥 ⏸ 🈁 🤒 🏕 🅿️ 🍚 🚀 🏍 🗜 🌤 ✈️ 🍺 📧 💠 😃 🏉 ⛱ 🌫 🍉 🍇 🐆 🍭 ➗ ☕️ 🛳 ⛓ 👸 🍨 😪 🐨 🚘 💝 ✂️ 🎶 🙄 🔳 🐪 👥 ❓ 🔏 📘 📔 ⛺️ 🖲 ❇️ 🐉 💾 🚨 💍 🏊 🗾 🎠 ❔ 😓 😩 🎍 🉐 🌊 🈸 🕜 🎻 🌄 🚑 😸 📿 🈲 ®️ 📺 🚤 🦄 🐾 🏷 ❎ 👄 🙋 🖥 🛡 ⚖ 🃏 👯 🍰 🈷️ 🦁 ⏹ 🗂 🚭 📓 🎏 🔄 ㊗️ 🌯 🏈 ✌️ 💜 🎷 🐩 📚 📢 🙇 🐯 ⛔️ 🚷 🏁 👎 🍞 🚩 🔋 ⛰ 🔤 🚶 ↙️ 🚧 🆔 🕣 🌰 📋 🎫 🚐 ⭐️ ✴️ 🍓 🔎 🍣 🍆 🍹 🌙 🌝 📂 ☦ ⛄️ 💷 ♨️ 🕰 📁 📲 🌈 🎺 💦 ℹ️ 🦀 🤗 ✅ 😙 🛅 🚱 ⛽️ 📖 🌸 🌦 🎣 🎦 🔯 🏬 💻 ➡️ ⤵️ 🍻 💘 🐄 ㊙️ 💸 🚹 🚟 🅰️ 🌲 🗽 🕎 🌐 🏞 💮 🍍 🐗 🎀 📞 💲 🔓 ♓️ 🍘 🚦 ☠ 🎎 ‼️ ♏️ ↔️ 👍 🚏 📩 〽️ 🐫 🖊 ♠️ 🤖 ⬛️ 💫 🕳 💳 🔜 🍋 🔲 😲 🆙 ⏫ 💥 #️⃣ ♎️ 🌏 🐧 📮 🏧 📉 🍈 🚺 🎄 💽 🍠 📈 🎼 🛣 🕉 🕟 ⚒ ➿ 💙 🌖 ♊️ 💉 🆕 👁 😤 🚙 🍗 🔅 👊 🔵 💡 ♣️ ✨ ↪️ 🔫 👪 👑 🐠 😻 🌎 📕 🚬 🛋 🐕 9️⃣ 🏜 🙅 😯 📟 🕠 💞 🛥 ☎️ 👰 😋 🍊 👣 😱 🚁 🍫 💅 💌 🌘 🔙 🔕 ✍ 🌹 🏳 👐 🍡 🔈 🚚 💵 🐵 📴 🏯 🍑 🐰 🍄 📊 ⛅️ 🚫 ↩️ 🍱 🕓 🐺 ➕ 🔣 👜 🎖 🎨 🕙 🐽 🎛 🗓 🆒 ⚓️ 🐁 🙂 ❣ 🏎 ⚙ 🕴 🙎 😺 👋 🔶 🐋 🎌 ⚔ 🚢 🙍 🐃 🔥 🖨 5️⃣ 🗒 ◼️ ⏲ 😞 🍏 🚊 🕚 🍿 ☝️ 🎡 💰 ☁️ 🐶 🚰 🍖 🚿 😛 🖼 🏰 🔝 📳 🗺 🍒 💯 ⏮ 🍢 ♉️ 🏴 🐲 🎙 🌉 💬 🗯 🐊 🌌 ☄ 🚆 🎳 ⚾️ 📪 🌥 🖐 😷 ◽️ 👌 ⛵️ 🍝 ⭕️ 🍲 🛂 🔃 🏪 😆 👛 💑 🐥 🕵 🎾 🏭 🛄 🔂 😇 💇 🚯 🍁 🆚 ⁉️ 🕯 🍯 🏚 🚉 👬 🐱 🎒 💨 👷 🛩 🍀 😟 😢 💊 🚠 👫 🐷 😗 🛎 🐿 🖖 💪 📫 😝 😚 📽 👠 🎯 🌷 🎂 😔 🎟 🅱️ 👒 👔 ⏱ 😬 🌾 🌔 ❗️ 🐐 📒 🏇 🎁 😀 📯 😭 💤 💺 ☸ ✏️ ♈️ 🏡 🌋 😁 🌪 💐 🏫 ✊ 🏂 🌱 🌗 ⌨ 🔪 🐒 🕢 🍌 6️⃣ 🏮 🛠 🌬 😣 ↖️ ♻️ 🔗 ⚽️ 🚡 🤕 😊 🖕 😧 🍸 🐛 🍪 🍜 0️⃣ 🕒 🌭 ⏳ 🙌 🤘 🏦 💧 🙏 🛍 🎹 😏 👧 😫 👈 ™️ 🏘 🚜 🌚"

const apiLink = "https://meme-api.herokuapp.com/gimme"

const {Command} = require("../../functions")

const random = async (msg, args, client) => {
    
    let mult = 1
    if(args.length === 0){
        return msg.channel.send(`\`${Math.random() * mult}\``)
    }
    if(isNumeric(args[0])){
        mult = Number(args[0].replace(",", "."))
    }else if(args[0] == "emoji"){
        return msg.channel.send(randomChoice(emoji.split(" ")))
    }
    else if(args[0] === "meme"){
        const response = await fetch(apiLink)
        const data = await response.json()
        return msg.channel.send(data.url)
    }else if(args[0].toLowerCase() == "pi"){
        mult = Math.PI
    }else if(args[0].toLowerCase() == "e"){
        mult = Math.E
    }
    msg.channel.send(`\`${Math.random() * mult}\``)
}

module.exports = new Command(
    random,
    "if no arguments are given I'll give you a random number between 0 and 1 but if you give me an argument I'll multiply my return value by that argument",
    ["random", "random <multiplier>", "random 'pi'", "random 'e'", "random meme", "random emoji"],
    "Fun"
)