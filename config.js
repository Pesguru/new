/*

𝕶𝖎𝖒𝖌
*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['𝕶𝖎𝖓𝖌 𝕾𝖆𝖒'] // isi nomor lu
global.ownMain = '𝕶𝖎𝖒𝖌 𝕾𝖆𝖒' // isi nomor lu
global.NamaOwner = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 𝕸𝖔𝖉𝖟' //gausah diganti
global.sessionName = 'ses'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //ganti aj klo mau
global.author = 'Mods' //ganti aj klo mau
global.packname = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //ganti aj klo mau
global.url = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //gausah diganti
global.urlWa = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.url1 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //gausah diganti

global.xcrash = {
    kz: "ᛃͣͮMods ⌕",
    xv: "🧬༑𝐂⃟⃟𝐫𝐚𝐬𝐡꙲ౄ҈҉ャ",
    xz: "🖤⟩ ༘྅𝐒𝐚𝐦𝐲 ⿻ ꧏ🤍҈ ༑",
    xk: "*👑༘⃰༡͜͡𝖉𝖎𝖋 𑅆༏",
    xc: "🔥⃟༑𝐂𝐎𝐒𝐓𝐒༑⃟🧐⃟ ⟩ 𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ☆ >",
    xq: "📱𝐞𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧-𝐙𝐞𝐭✔️"
}


global.mess = { // Custom Sesuka Lu
wait: '‹𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝗳𝗼𝗿 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴! ⟩»',
bugwait: 'sending bug. . .`',
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
owner: 'You are not the owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think Im stupid?`,
success: 'Success',
bugrespon: `Processs.....`
}

/*global.mess = { // Custom Sesuka Lu
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
owner: 'You are not the owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success Bang',
bugrespon: `Processs.....`
}*/

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})