const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "prefix",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: "Thay đổi prefix của bot",
		longDescription: "Thay đổi dấu lệnh của bot trong box chat của bạn hoặc cả hệ thống bot (chỉ admin bot)",
		category: "config",
		guide: {
			vi: "   {pn} <new prefix>: thay đổi prefix mới trong box chat của bạn"
				+ "\n   Ví dụ:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: thay đổi prefix mới trong hệ thống bot (chỉ admin bot)"
				+ "\n   Ví dụ:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: thay đổi prefix trong box chat của bạn về mặc định",
			en: "   {pn} <new prefix>: change new prefix in your box chat"
				+ "\n   Example:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: change new prefix in system bot (only admin bot)"
				+ "\n   Example:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: change prefix in your box chat to default"
		}
	},

	langs: {
		vi: {
			reset: "Đã reset prefix của bạn về mặc định: %1",
			onlyAdmin: "Chỉ admin mới có thể thay đổi prefix hệ thống bot",
			confirmGlobal: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix của toàn bộ hệ thống bot",
			confirmThisThread: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix trong nhóm chat của bạn",
			successGlobal: "Đã thay đổi prefix hệ thống bot thành: %1",
			successThisThread: "Đã thay đổi prefix trong nhóm chat của bạn thành: %1",
			myPrefix: "🌐 Prefix của hệ thống: %1\n🛸 Prefix của nhóm bạn: %2"
		},
		en: {
			reset: "Your prefix has been reset to default: %1",
			onlyAdmin: "Only admin can change prefix of system bot",
			confirmGlobal: "Please react to this message to confirm change prefix of system bot",
			confirmThisThread: "Please react to this message to confirm change prefix in your box chat",
			successGlobal: "Changed prefix of system bot to: %1",
			successThisThread: "Changed prefix in your box chat to: %1",
			myPrefix: "                    𝗣𝗥𝗘𝗙𝗜𝗫\n╒╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╕\n𝕄𝕐 ℙℝ𝔼𝔽𝕀𝕏\n➤ %1\nℂℍ𝔸𝕋 ℙℝ𝔼𝔽𝕀𝕏\n➤ %2\n𝔻𝔼𝔽𝔸𝕌𝕃𝕋 ℙℝ𝔼𝔽𝕀𝕏\n➤ %2\n╘╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╛\n                    𝗨𝗦𝗔𝗚𝗘\n╒╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╕\n𝐇𝐎𝐖 𝐓𝐎 𝐔𝐒𝐄\n𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖\n❲ ❶ ❳ %2help\n❲ ❷ ❳ %2callad\n❲ ❸ ❳ %2support\n╘╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╛\n             𝗠𝗔𝗜𝗡𝗧𝗘𝗡𝗔𝗡𝗖𝗘\n╒╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╕\n├ 𝙼𝙰𝚃𝙴𝙾 𝙲𝙷𝙰𝚃𝙱𝙾𝚃 𝚒𝚜 𝚊 𝚐𝚎𝚗𝚎𝚛𝚊𝚕 𝚋𝚘𝚝.\n├ 𝙼𝚊𝚝𝚎𝚘 𝙲𝚑𝚊𝚝𝚋𝚘𝚝 𝚠𝚊𝚜 𝚝𝚛𝚊𝚒𝚗𝚎𝚍 𝚋𝚢 𝚋𝚊𝚛𝚍 𝙰𝙸.\n├ 𝚙𝚕𝚎𝚊𝚜𝚎 𝚍𝚘𝚗'𝚝 𝚞𝚜𝚎 𝚝𝚑𝚎 𝙲𝙷𝙰𝚃 𝙱𝙾𝚃 𝚝𝚘 𝚜𝚙𝚊𝚖 𝚘𝚛 𝚐𝚘 𝚊𝚐𝚊𝚒𝚗𝚜𝚝 𝙵𝙱 𝚛𝚞𝚕𝚎 𝚝𝚘 𝚊𝚟𝚘𝚒𝚍 𝚊𝚌𝚌𝚘𝚞𝚗𝚝 𝚐𝚎𝚝𝚝𝚒𝚗𝚐 𝚜𝚞𝚜𝚙𝚎𝚗𝚜𝚒𝚘𝚗.\n├ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎 𝚋𝚘𝚝, 𝚍𝚘𝚗'𝚝 𝚛𝚎𝚙𝚘𝚛𝚝 𝚋𝚘𝚝 𝚝𝚘 𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔. \n├ 𝙾𝚗𝚕𝚢 𝚛𝚎𝚙𝚘𝚛𝚝 𝚝𝚘 𝙾𝚠𝚗𝚎𝚛\n╘╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╩╦╛\n├ 𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚞𝚜𝚒𝚗𝚐 "
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0])
			return message.SyntaxError();

		if (args[0] == 'reset') {
			await threadsData.set(event.threadID, null, "data.prefix");
			return message.reply(getLang("reset", global.GoatBot.config.prefix));
		}

		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix
		};

		if (args[1] === "-g")
			if (role < 2)
				return message.reply(getLang("onlyAdmin"));
			else
				formSet.setGlobal = true;
		else
			formSet.setGlobal = false;

		return message.reply(args[1] === "-g" ? getLang("confirmGlobal") : getLang("confirmThisThread"), (err, info) => {
			formSet.messageID = info.messageID;
			global.GoatBot.onReaction.set(info.messageID, formSet);
		});
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author)
			return;
		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		}
		else {
			await threadsData.set(event.threadID, newPrefix, "data.prefix");
			return message.reply(getLang("successThisThread", newPrefix));
		}
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "prefix")
			return () => {
				return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
			};
	}
};
