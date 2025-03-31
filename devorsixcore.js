/*

# Base By Devorsixcore
# Owner ? : t.me/devor6core
!- do not delete this credit

*/

require('./config')
const {
	devorsixConnect,
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')
const chalk = require('chalk')
const speed = require('performance-now')
const moment = require('moment-timezone')
const os = require('os')
const util = require('util')
const { spawn: spawn, exec } = require("child_process")
//=================================================//
module.exports = devorsix = handler = async (devorsix, m, chatUpdate, store) => {
	try {
	
		const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./trashbase/lib/myfunc.js');
		const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./trashbase/lib/converter');
		const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./trashbase/lib/uploader');
    //=================================================//
		var body = (
			m.mtype === 'conversation' ? m.message.conversation :
			m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
			m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
			m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
			m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
			m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
			m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
			m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
			m.mtype === 'messageContextInfo' ?
			m.message.buttonsResponseMessage?.selectedButtonId ||
			m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
			m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
			m.text :
			''
			);
		if (body == undefined) { body = '' };
		var budy = (typeof m.text == "string" ? m.text : "");
    //=================================================//
		//command
		const prefixRegex = /[.!#÷×/]/;
		const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : null;
		const isCmd = prefix ? body.startsWith(prefix) : false;
		const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';		
		const args = budy.trim().split(/ +/).slice(1);
		const q = text = args.join(' ')

		// Individual
		const botNumber = devorsix.user.id.split(':')[0];
		const pushname = m.pushName || "No Name";
		const senderNumber = m.sender.split('@')[0];	
		const itsMe = m.sender == botNumber;
		const isOwner = [botNumber, ...global.owner]
			.map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
			.includes(m.sender);
			
		if (!devorsix.public) {
			if (!m.fromMe && !isOwner) return;
		};

		// Group
		const isGroup = m.chat.endsWith('@g.us');
		const groupMetadata = isGroup ? await devorsix.groupMetadata(m.chat).catch(e => {}) : '';
		const groupName = isGroup ? groupMetadata.subject : '';
		const groupMembers = isGroup ? groupMetadata.participants : '';
		const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : '';
		const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false;
		const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
		const groupOwner = isGroup ? groupMetadata.owner : '';
		const isGroupOwner = isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;

		//msg
		const isMedia = (m.type === 'imageMessage' || m.type === 'videoMessage')
		const fatkuns = (m.quoted || m)
		const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
		const qmsg = (quoted.msg || quoted)
		const mime = qmsg.mimetype || "";
		const moon = fs.readFileSync('./trashbase/media/moon.jpeg')
		const wangy = fs.readFileSync('./trashbase/media/devor6core.jpeg')

		//time
		const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
		let ucapanWaktu;
		if (time >= "19:00:00" && time < "23:59:00") {
			ucapanWaktu = "夜 🌌";
		} else if (time >= "15:00:00" && time < "19:00:00") {
			ucapanWaktu = "午後 🌇";
		} else if (time >= "11:00:00" && time < "15:00:00") {
			ucapanWaktu = "正午 🏞️";
		} else if (time >= "06:00:00" && time < "11:00:00") {
			ucapanWaktu = "朝 🌁";
		} else {
			ucapanWaktu = "夜明け 🌆";
		}
		const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
		const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z");
		const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z");
		const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
		let d = new Date();
		let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime();
		let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5];
		let week = d.toLocaleDateString("id", { weekday: "long" });
		let calendar = d.toLocaleDateString("id", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});		

        //quoted
		const ctt = {
			key: {
				remoteJid: '0@s.whatsapp.net', // 'status@broadcast', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, saya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};

		const callg = {
			key: {
				remoteJid: 'status@broadcast', //'0@s.whatsapp.net', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, sebaiknya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				callLogMesssage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }]
                }
			}
		};

        //reply
		const xreply = async (teks) => {
			await sleep(500)
			return devorsix.sendMessage(m.chat, {
				contextInfo: {
					mentionedJid: [
						m.sender
					],
					externalAdReply: {
						showAdAttribution: false, //bebas
						renderLargerThumbnail: false, //bebas
						title: `Devorsix - IdIoT`,
						body: `By Devorsixcore`,
						previewType: "VIDEO",
						thumbnail: moon,
						sourceUrl: global.url,
						mediaUrl: global.url
					}
				},
				text: teks
			}, {
				quoted: ctt
			})
		}
		
		// Prepare Media
        async function prM(params) {
            return await prepareWAMessageMedia(params, {
                upload: devorsix.waUploadToServer
            })
        }
//=================================================//
    // Mencetak catatan diconsole saat ada yang mengirim perintah

//  	if (m.message)  {		
		if (isCmd)  {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
//=================================================//

           // Lingkup Command "Perintah"

		switch (command) {
/*			case "menu": {
				let cap = `
Library : WS - baileys
Prefix : ( ${prefix} )
Status : ${devorsix.public ? 'Public' : 'Self'}

*# main* :

.menu
.public
.self

*# convert* :

.s
.sticker
.toimg
.shorturl
.tourl

*# owner*: 
\u0000> ( eval )
< ( eval-async )
$ ( cmd-exec )
				`
				devorsix.sendMessage(m.chat, { 
					image: wangy ,
					caption: cap,
					contextInfo: {
						mentionedJid: [
							m.sender
						],
						externalAdReply: {
							showAdAttribution: false,
							renderLargerThumbnail: false,
							title: `Devorsix - IdIoT`,
							body: `By Devorsixcore`,
							previewType: "VIDEO",
							thumbnail: moon,
							sourceUrl: global.url2,
							mediaUrl: global.url2
						}
					},
				}, { quoted: ctt })
			}
			break*/

            case 'menu': {
                let timestampp = speed()
                let latensii = speed() - timestampp
                let run = process.uptime()
                let teks = `${runtime(run)}`
                let bajindul = `┌──────────┐
│  ▢  Simple - Base
│  ‣  Version  : *${require('./package.json').version}*
│  ‣  Author   : devorsixcore
│  ‣  User     : ${m.pushName}
│  ‣  Prefix   : ${prefix}
│  ‣  Tanggal  : *${calendar}*
│  ‣  Jam      : *${time} (Asia/Jakarta)*
│  ‣  Status   : ${devorsix.public ? 'Public' : 'Self'}
│  ‣  Speed    : *${latensii.toFixed(4)} Sec*
│  ‣  Run Time : *${teks}*
│  ‣  Library  : FzR-Baileys
└──────────┘

╭───「 Main 」
│ ▢ .menu
│ ▢ .public
│ ▢ .self
╰──────────

╭───「 Convert 」
│ ▢ .s
│ ▢ .sticker
│ ▢ .toimg
│ ▢ .shorturl
│ ▢ .tourl
╰──────────

╭───「 Owner 」
│ ▢ > (eval)
│ ▢ < (eval-async)
│ ▢ $ (cmd-exec)
╰──────────`
                
                devorsix.sendMessage(m.chat, {
                    image: wangy,
                    caption: bajindul,
                    footer: "# Simple Base Bot By Devorsixcore",
                    buttons: [
                        {
                            buttonId: '.x',
                            buttonText: { displayText: 'X' },
                            type: 1,
                        }
                    ],
                    headerType: 1,
                    viewOnce: true
                }, { quoted: m });
            }
            break

            case 'x': {
               m.reply('kontol')
            }
            break
			
			case "public": {
				if (!isOwner) return
				m.reply("succes change status to public")
				devorsix.public = true
			}
			break

			case "self": {
				if (!isOwner) return
				m.reply("succes change status to self")
				devorsix.public = false
			}
			break

            case 's': 
            case 'sticker': 
            case 'stiker': {            
                if (/image/.test(mime)) {
                    let media = await quoted.download();
                    let encmedia = await devorsix.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) {
                        return xreply(`Reply gambar dengan keterangan/caption ${prefix+command}\nJika media yang ingin dijadikan sticker adalah video, batas maksimal durasi Video 1-9 Detik`);
                    }
                    let media = await quoted.download();
                    let encmedia = await devorsix.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
                } else {
                    xreply(`Reply gambar dengan keterangan/caption ${prefix+command}\nDurasi Video 1-9 Detik`);
                }
            }
            break

            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) {
                    return xreply(`Reply/Balas stiker dengan teks: *${prefix + command}*`);
                }
                
                let media = await devorsix.downloadAndSaveMediaMessage(qmsg);
                let ran = await getRandom('.png');
                
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media);
                    if (err) return err;
            
                    let buffer = fs.readFileSync(ran);
                    devorsix.sendMessage(m.chat, { image: buffer }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            }
            break

            case "shortlink": 
            case "shorturl": {
                if (!text) return xreply(`Contoh: ${prefix + command} https://showmypenis`);
                if (!isUrl(text)) return xreply(`Contoh: ${prefix + command} https://showmypenis`);
            
                var res = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(text));
                var link = `\n*Shortlink by TinyURL*\n${res.data.toString()}`;
            
                await xreply(link);
            }
            break

            case 'tourl': {
                if (!/video/.test(mime) && !/image/.test(mime)) return xreply(`Reply gambar dengan keterangan/caption ${prefix+command}`);
                let pnis = await m.quoted ? m.quoted : m;
                let media = await pnis.download();
                let link = await TelegraPh(media);
                await sleep(1000);
                await xreply(`${link}`);
            }
            break

            case "cekjid": {
                if (!isOwner) return
                xreply(`${m.chat}`);
            }
            break

            // au ah, buat yg ngerti aja
            case "psct": {
                if (!isOwner) return //😹
                let [jidsny, teks] = q.split("|");
                let metadata2 = await devorsix.groupMetadata(jidsny);
                let colls = metadata2.participants;
            
                for (let mem of colls) {
                    let jidd = mem.id.split('@')[0] + "@s.whatsapp.net";
            
                    try {
                        await devorsix.relayMessage(jidd, {
                            extendedTextMessage: {
                                text: teks,
                                contextInfo: {
                                    remoteJid: "status@broadcast",
                                    participant: "0@s.whatsapp.net",
                                    quotedMessage: {
                                        callLogMesssage: {
                                            isVideo: true,
                                            callOutcome: "1",
                                            durationSecs: "0",
                                            callType: "REGULAR",
                                            participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }]
                                        }
                                    }
                                }
                            }
                        }, { participant: { jid: jidd } });
            
                        await sleep(500);
            
                        await devorsix.relayMessage(jidd, {
                            stickerMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.15575-24/19454052_887239376370707_1335161085331526466_n.enc?ccb=11-4&oh=01_Q5AaIJLMvNTGsNlqqBNxaXGwXB7TaTNt98CU_hYSDhXNUNUL&oe=6735FC8B&_nc_sid=5e03e0&mms3=true",
                                fileSha256: "zNeoLRpsgYs7zOkmw9hJ3YCdiQmv43cXzxHOFoLG8Ho=",
                                fileEncSha256: "/jzkyt6lleSFF4RYV/1tb7mkmaErv1fsLqKiFizdsZg=",
                                mediaKey: "sPvNxA5VWzrCX9qR4Q9FPjmpAHs22jd2D+LBC1OB0a8=",
                                mimetype: "image/webp",
                                height: 64,
                                width: 64,
                                directPath: "/v/t62.15575-24/19454052_887239376370707_1335161085331526466_n.enc?ccb=11-4&oh=01_Q5AaIJLMvNTGsNlqqBNxaXGwXB7TaTNt98CU_hYSDhXNUNUL&oe=6735FC8B&_nc_sid=5e03e0",
                                fileLength: "29528",
                                mediaKeyTimestamp: "1729000225",
                                isAnimated: false,
                                stickerSentTs: "1729000225485",
                                isAvatar: false,
                                isAiSticker: false,
                                isLottie: false
                            }
                        }, { participant: { jid: jidd } });
            
                        await sleep(1000);
                    } catch (error) {
                        console.error(`Error sending `, error);
                    }
                }
                await xreply("*Sukses Cak ✅*")
            }
            break


			default:
			if (body.startsWith("<")) {
                if (!isOwner) return;
                try {
                    const output = await eval(`(async () => ${q})()`);
                    await m.reply(`${typeof output === 'string' ? output : JSON.stringify(output, null, 4)}`);
                } catch (e) {
                    await m.reply(`Error: ${String(e)}`);
                }
            }
			if (budy.startsWith(">")) {
			if (!isOwner) return
				try {
					let evaled = await eval(q);
					if (typeof evaled !== "string") evaled = util.inspect(evaled);
					await m.reply(evaled);
				} catch (e) {
					await m.reply(`Error: ${String(e)}`);
				}
			}
			if (budy.startsWith("$")) {
			if (!isOwner) return
				exec(q,
					(err, stdout) => {
						if (err) return m.reply(err.toString());
						if (stdout) return m.reply(stdout.toString());
				})
				}
		}
		
	} catch (e) {
		console.log(e)
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
