const fs = require("fs");
require("../../../config");

module.exports = {
    type: 'convert',
    command: ['s', 'sticker', 'tosticker'],
    operate: async (context) => {
        const { CzAx, m, prefix, command, quoted, reaction, mime, zreply } = context;
        
        if (!m.quoted) {
            await reaction(m.chat, "❗");
            await zreply(`Kirim gambar atau video, lalu balas dengan "${prefix + command}". Durasi video maksimal 10 detik.`);
            return;
        }

        if (/image/.test(mime)) {
            await reaction(m.chat, "💟");
            try {
                let media = await quoted.download();
                let encmedia = await CzAx.sendImageAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                });
                await fs.promises.unlink(encmedia);
            } catch (error) {
                console.error(error);
                await reaction(m.chat, "❗");
                await zreply("Terjadi kesalahan saat mengolah gambar.");
            }
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 10) {
                await reaction(m.chat, "❗");
                await zreply("Video terlalu panjang untuk dijadikan Sticker. Durasi maksimal adalah 10 detik.");
                return;
            }
            try {
                let media = await quoted.download();
                await reaction(m.chat, "💟");
                let encmedia = await CzAx.sendVideoAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                });
                await fs.promises.unlink(encmedia);
            } catch (error) {
                console.error(error);
                await reaction(m.chat, "❗");
                await zreply("Terjadi kesalahan saat mengolah video.");
            }
        } else {
            await reaction(m.chat, "❗");
            await zreply(`Kirim gambar atau video, lalu balas dengan "${prefix + command}". Durasi video maksimal 10 detik.`);
        }
    }
};