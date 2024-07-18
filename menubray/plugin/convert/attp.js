require("../../../config");

module.exports = {
    type: 'convert',
    command: ['attp'],
    operate: async (context) => {
        const { CzAx, m, q, prefix, command, reaction, zreply } = context;

        if (!q) {
            await zreply(`Add input, Example: *${prefix + command} aku adalah gay*`);
            await reaction(m.chat, "❗");
            return;
        }

        try {
            const lubangtile = `https://widipe.com/attp?text=${encodeURIComponent(q)}`;

            await reaction(m.chat, "🔁");
            await CzAx.sendVideoAsSticker(m.chat, lubangtile, m, {
                packname: global.packname,
                author: global.author
            });

            await reaction(m.chat, "✅");
        } catch (error) {
            console.error('Error:', error);
            await zreply('Failed to generate meme. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};