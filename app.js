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
client.on('message', (msg) => {
    msg.react("480854406263472138");
    msg.react("💩");
});

// Login with bot token
client.login(config.token);
