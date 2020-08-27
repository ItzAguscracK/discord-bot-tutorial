//Instalacion de libreria 
//$ npm i discord.js
const Discord = require('discord.js');// Hacemos un llamado a la libreria
const Client = new Discord.Client();
//Se crea la varible Client para instanciar una nueva clase Client() de la variable Discord referenciado, 
//Client representa a la clase Client() que es el eje principal para interactuar con la API de Discord 
//y el punto de partida para cualquier BOT en discordjs.


//Luego agregamos este codigo
Client.on('ready', () => {

    console.log(`BOT Iniciado`);
 });
 
 //En la linea 11 la varible Client activa el evento llamado ready, ready es el evento de inicio cuando se activa un BOT en discord.js, 
 //se puede ingresar un mensaje o funcion que se ejecutara cuando el BOT se halla activado correctamente.

 Client.on('message', (message) => {
   if(message.content.startsWith('ping')) {//Si el contenido del mensaje empieza con "ping"
     message.channel.send(`pong 🏓!!`);//Se envia a el canal "pong 🏓!!"
   }
 
 });
//Utilizamos tambien el evento message, message es el manejador de los mensajes y argumentos de un servidor, 
//detro del mismo podemos crear comandos(funciones/tareas) para su BOT. 
//Un ejemplo basico es el comando ping. dentro de una condicion if() basica
 
 client.login('TOKEN-BOT');//Reemplazar por su TOKEN

 //Y por ultimo y no menos importante la funcion login, 
 // que se encarga de iniciar seccion de su BOT y autenticarlo con la API de Discord.

 //Por ultimo guardamos todo con 'CNTRL + S'