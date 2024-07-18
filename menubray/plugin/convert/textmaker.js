require("../../../config");

module.exports = {
    type: 'convert',
    command: ['textmaker'],
    operate: async (context) => {
        const { CzAx, m, q, prefix, command, reaction, sleep, zreply, toTelegra, quoted } = context;
        
        if (!q) {
            await zreply(`Add input, Example: *${prefix + command} teks atas|teks bawah*`);
            await reaction(m.chat, "❗");
            return;
        }
        
        let [peenis, pepekk] = q.split("|");
        pepekk = pepekk ? pepekk : " ";

/*        if (!peenis || !pepekk) {
            await zreply(`Invalid input. Ensure you have both top and bottom text separated by '|'. Example: *${prefix + command} teks atas|teks bawah*`);
            await reaction(m.chat, "❗");
            return;
        }*/

        try {
            let dwnld = await CzAx.downloadAndSaveMediaMessage(quoted)
            let Bjirka = await toTelegra(dwnld);
            let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(peenis)}/${encodeURIComponent(pepekk)}.png?background=${Bjirka}`;

            await reaction(m.chat, "🔁");
//            await sleep(1500)
            await CzAx.sendMessage(m.chat, {
                image: { url: smeme },
                caption: '© Jotaro Client - #TrashDex'
            }, { quoted: m });

            await reaction(m.chat, "✅");
        } catch (error) {
            console.error('Error:', error);
            await zreply('Failed to generate meme. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
}