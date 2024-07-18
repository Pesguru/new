const fs = require('fs');
const kripto = require('crypto');
require("../../../config");

module.exports = {
	type: 'tools',
	command: ['get'],
	operate: async (context) => {
		const {
			CzAx,
			m,
			q,
			prefix,
			command,
			zreply
		} = context;

		if (!q) return zreply(`Add Input (Link)\n\n*Example : ${prefix+command} https://google.com*`);

		try {
			const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
			if (!/json|html|plain/.test(res.headers['content-type'])) {
				await zreply(text)
			} else {
				zreply(util.format(res.data))
			}
		} catch (e) {
			zreply(util.format(e))
		}
	}
};