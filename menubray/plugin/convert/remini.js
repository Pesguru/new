require("../../../config");

module.exports = {
    type: 'convert',
    command: ['hdr', 'enhance', 'hd', 'remini'],
    operate: async (context) => {
        const { CzAx, m, quoted, reaction, zreply, remini } = context;

        if (!m.quoted) {
            await zreply(`Reply to an image with the command to enhance it.`);
            await reaction(m.chat, "❗");
            return;
        }

        try {
            await reaction(m.chat, "⚡");

            let media = await quoted.download();
            let enhancedImage = await remini(media, "enhance");

            await CzAx.sendMessage(m.chat, { 
                image: enhancedImage, 
                caption: '© Jotaro Client - #TrashDex' 
            }, { quoted: m });

            await reaction(m.chat, "✅");
        } catch (error) {
            console.error('Error:', error);
            await zreply('Failed to enhance the image. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};