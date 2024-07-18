const fs = require('fs');
const kripto = require('crypto');
require("../../../config");

module.exports = {
    type: 'tools',
    command: ['ambilq', 'getq'],
    operate: async (context) => {
        const { CzAx, m, q, prefix, command, zreply } = context;
        if (!m.quoted) return zreply(`*Reply pesan yang quotednya mau diambil*`);
        
        let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
        let jeneng = `MessageData_${kripto.randomBytes(8).toString('hex')}.json`;

        await fs.writeFileSync(jeneng, penis);
        await zreply(penis);
        await CzAx.sendMessage(m.chat, { document: { url: `./${jeneng}` }, fileName: jeneng, mimetype: '*/*' }, { quoted: m });
        await fs.unlinkSync(jeneng);
    }
};