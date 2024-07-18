const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
require("../../../config");

module.exports = {
    type: 'convert',
    command: ['removebg', 'rmbg'],
    operate: async (context) => {
        const { CzAx, m, q, prefix, command, reaction, zreply, sleep, quoted, toTelegra, mime } = context;

        if (!/image/.test(mime)) {
            await zreply(`Reply to a image with caption *${prefix + command}*`);
            return;
        }

        try {
            let dwnld = await CzAx.downloadAndSaveMediaMessage(quoted);
            let bjirka = await toTelegra(dwnld);

            let formData = new FormData();
            formData.append('size', 'auto');
            formData.append('image_url', bjirka);

            let response = await axios({
                method: 'post',
                url: 'https://api.remove.bg/v1.0/removebg',
                data: formData,
                responseType: 'arraybuffer',
                headers: {
                    ...formData.getHeaders(),
                    'X-Api-Key': 'NvVp3ZfAFhtLEc1hpvWiJYfm',
                },
                encoding: null
            });

            if (response.status != 200) {
                console.error('Error:', response.status, response.statusText);
                await zreply('Failed to remove background. Please try again later.');
                await reaction(m.chat, "❌");
                return;
            }

            fs.writeFileSync('no-bekgron.png', response.data);
            await reaction(m.chat, "🔁");
            await sleep(1500);
            await CzAx.sendMessage(m.chat, {
                image: { url: 'no-bekgron.png' },
                caption: 'Background removed successfully!'
            }, {
                quoted: m
            });
            await reaction(m.chat, "✅");
            fs.unlinkSync('no-bekgron.png');
        } catch (error) {
            console.error('Request failed:', error);
            await zreply('Failed to remove background. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};