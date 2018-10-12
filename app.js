/**
 * @author Moquo (Moritz Maier) and kksgandhi (Kutub Gandhi)
 */

// Get the configuration
const config = require('./config.json')

// discord.js library
const Discord = require('discord.js');

// Client
const client = new Discord.Client();

// On ready
client.on('ready', () => {
    console.log('Ready.');
});

// On message
var urlRegex = /((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?/;
client.on('message', (msg) => {
		hasAttachment = msg.attachments.size > 0;
		hasUrl        = msg.content.match(urlRegex) != null;

		console.log(hasAttachment || hasUrl);
		if(hasAttachment || hasUrl){
			msg.react(config.react_emoji);
			msg.react(config.react_emoji2);
		}
    //msg.react("😐");
});

// Login with bot token
client.login(config.token);
