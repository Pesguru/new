const fs = require('fs');
const path = require('path');
const text2png = require('text2png');
require("../../../config");

module.exports = {
    type: 'convert',
    command: ['ttp', 'text2png'],
    operate: async (context) => {
        const { CzAx, m, q, prefix, command, reaction, sleep, zreply } = context;
        
        if (!q) {
            await zreply(`Add input, Example: *${prefix + command} Hello World|50*`);
            await reaction(m.chat, "❗");
            return;
        }
        
        let [myText, ...params] = q.split("|");
        let fontSize = params.join("|");

        if (!myText || !fontSize) {
            await zreply(`Invalid input. Ensure you have both text and font size separated by '|'. Example: *${prefix + command} Hello World|50*`);
            await reaction(m.chat, "❗");
            return;
        }
        
        let outputFile = 'output.png';
        let fontPath = path.resolve(__dirname, '../../../trashbase/font/roboto-negro.ttf');
        
        fs.writeFileSync(outputFile, text2png(myText, {
            font: `${fontSize}px 'roboto-bold'`,
            localFontPath: fontPath,
            localFontName: 'roboto-bold',
            color: 'white',
            backgroundColor: 'transparent',
            lineSpacing: 10,
            padding: 20
        }));
        
        await reaction(m.chat, "🔁");
        await sleep(1500);
        await CzAx.sendImageAsSticker(m.chat, fs.readFileSync(outputFile), m, { packname: global.packname, author: global.author });
        await reaction(m.chat, "✅");
    }
};