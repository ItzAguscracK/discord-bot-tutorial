//Instalacion de libreria 
//$ npm i discord.js
const Discord = require('discord.js');
const Client = new Discord.Client();




Client.on('ready', () => {

    console.log(`BOT iniciado, todo esta OK!`);
 });
 
 Client.on('message', (message) => {
   if(message.content.startsWith('ping')) {
     message.channel.send(`pong 🏓!!`);
   }
 
 });

 
 Client.login('TU-TOKEN');