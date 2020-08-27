![introduccion1](img/introduccion.png)

Discord.js es una biblioteca que facilita la interacción con la API de Discord. En comparación con la mayoría de las otras bibliotecas de Discord, utiliza un enfoque más orientado a objetos para que el código de su bot sea más limpio y más fácil de entender.

# A tener en Cuenta

Estás a punto de ver el script del lenguaje de programación JavaScript JS. 

Para desarrollar un bot con discord.js, debes tener un conocimiento bastante bueno de JavaScript, ya que si no tenemos conocimiento solo nos complicaremos y nos perderemos en esta guia. 
Si tienes alguna dificultad puedes entrar a nuestro servidor de Discord.

# No hagas C&P
Se recomienda escribir el código a mano mientras sigues esta guía (sin copiar y pegar). Esto te ayudará a desarrollar una memoria muscular y un entendimiento de lo que estás agregando mucho más sólido.

![separador](img/separador.png)
![Instalacion](img/Instalacion.png)

# Editor de codigo
Un buen editor de código nos ayudará a simplificar y mejorar su código legible, nos dirá donde están los errores, validar y en algunos ejecutar su código por usted.

Para las guias y ejemplos vamos a utilizar el editor Visual Studio Code (VSC), es un editor de código fuente muy ligero y potente que soportar diferentes lenguajes de programación como: (.JS, C ++, C #, Python, PHP, Go) y runtimes (como .NET y Unity), adaptable para Windows, macOS y Linux, muy recomendado.

# Instalar VSC

Siga estos pasos:
- Ingrese a la pagina web de [VSC](https://code.visualstudio.com/download "VSC")
- Descargar la versión que se adapte a su PC.

![VSC](img/VSC.png)

- Una vez descargado, ejecute el instalador (VSCodeSetup-version).exe, esto solo tomará unos minutos, dependiendo de sus computadoras.

# Otros editores de codigo
- [Notepad++](https://notepad-plus-plus.org/downloads/ "Notepad++")
- [Brackets](http://brackets.io "Brackets")
- [Sublime Text 3](https://www.sublimetext.com/3 "Sublime Text 3")
- [Atom](https://atom.io "Atom")

![separador1](img/separador.png)
![crearbot](img/crearbot.png)

El primer paso para crear un primer BOT es crear una aplicación Discord. El bot utilizará la API de Discord, que requiere la creación de una cuenta Discord para propósitos de autenticación. No te preocupes, es súper simple.

Para crear la aplicación, diríjase a la página de [Discord Developer Portal](https://discord.com/developers/applications "Discord Developer Portal")  e inicie sesión, llegará a una página que se vera así:

![ddp](img/ddp.png)

Haga clic en `New Application` Esto lo llevará a la siguiente página, donde debe ingresar un nombre para la aplicación y un avatar/icon (el nombre de la aplicacion sera para el bot inicial). La descripción para la aplicación es opcional.

![tutorial1](img/tutorial1.png)

Para guardar todos datos ingresados, clic en en el botón `Save Changes` en la parte de abajo.

![separador2](img/separador.png)
# Crear usuario BOT
Después de crear la aplicación Discord, ir a la opción `Bot`, y hacer clic en `Add Bot`.

![addbot](img/addbot.png)

Luego damos clic en `Yes, Do it!`.

![yes](img/yes.png)


Usted a completado el proceso de crear la aplicación y su bot discord, darle clic en `Public Bot`.

![public](img/public.png)

Si esto es así, haga clic en `Save Changes` para guardar la configuración y cambios realizados.

### Obtener token de su BOT
> ATENCIÓN: Esta parte es realmente importante, el token de su bot está destinado a ser SECRETO. Es la forma en que Discord autentica su bot, así como cuando inicias sesión con un nombre de usuario y una contraseña. Revelar su token es como poner su contraseña en público, si su token llega a ser pública y usado por otros, genere uno nuevo de inmediato.

El token es secreto, como lo acabo de mencionar, es la forma en que su bot se autentica a Discord.

Para obtener su token, debe ir a la opción de `Bot`, y hacer clic en `Reveal Token`.

![token](img/token.png)


A continuación, se visualizará el `Token Secreto` de su BOT.

![token1](img/token1.png)

![separador3](img/separador.png)
# Agregar su BOT a un servidor
Bien, incluso si no ha escrito ni una sola línea de código para su bot, ya puede invitarlo a un servidor.

Para invitar a su bot, necesita tener los permisos de `ADMINISTRADOR` en el servidor a donde agregará el bot o ser el creador del mismo. De esa forma podrá agregar o invitar su bot a un servidor.

Copiar el ID de su bot, en la página de la aplicación.

![id](img/id.png)

Para generar el link de invitación de su bot utilizaremos una herramienta API de permisos, diríjase a esta página de [Discord Permissons Calculator](https://discordapi.com/permissions.html#8 "Discord Permissons Calculator") para generar el link de invitación.

Pegar el ID del bot en `CLIENT ID` de la siguiente forma.

![invitar](img/invitar.png)


Abrir el link de invitación generado, se muestra una ventana que le permite elegir el servidor donde podrá agregar su bot, simplemente seleccione el servidor y haga clic en `Autorizar`.

![separador4](img/separador.png)
![instalardn](img/instalardn.png)

Para usar discord.js y empezar a programar necesitará un par de cosas instaladas. Por lo menos:

- Mínimo: `node.js` versión 10 o superior.
- Tener un editor de código real. Si no tienen instalado un editor de código ir a la Instalación editor de código

# Instalacion de Nodejs
Node es un entorno de ejecución para JavaScript, usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.

Para instalar Node, vamos a la siguiente página web [Nodejs.org](https://nodejs.org/es/)

![nodejs](img/nodejs.png)
Descargar la versión recomendada e instalar en su PC. (Reinicié su PC si es necesario)

# Preparando el entorno de desarrollo para el BOT

Una vez que tenga el software requerido, el siguiente paso es preparar un espacio para empezar a programar.

- Crear una carpeta en el escritorio o en una unidad de disco duro o partición.
- Darle un nombre a la carpeta (Ej. BOT, BotDiscord, discord-bot-tutorial, etc.).
- Una vez que haya creado una carpeta, abrir la consola (en este caso la consola de VSC).

![vscterminal](img/vscterminal.png)

# Instalacion de discord.js

Una vez dentro de la consola, vamos a instalar discord.js.

Pero primero vamos a inicializar esta carpeta con node y npm (NPM = Node Package Manager - Administrador de paquetes/librerias para node), esto asegurará que cualquier otro módulo instalado se instale dentro de la carpeta creada.

Para iniciar escribimos dentro de la consola, npm init -y , luego pulse enter dentro de la consola.

![consolavsc](img/consolavsc.png)

Se creara un nuevo archivo llamado package.json, esto significa que has iniciado correctamente. Si desea saber más información sobre package.json, haga [clic aquí](https://docs.npmjs.com/files/package.json).

### Ahora instalamos Discord.js a través de npm:

Escribir `npm install discord.js` en la consola y pulse enter.

![discordjsvsc](img/discordjsvsc.png)

La instalación es muy rápida y mostrará el proceso de la instalacián en la pantalla de la consola.

Una vez completada la instalación de Discord.js, nos fijamos en la carpeta y se dará cuenta de que hay una nueva carpeta creada llamada node_modules. Esto contiene todos los paquetes instalados para el funcionamiento de Discord.js.

Significa que Discord.js se ha instalado correctamente. ¡Bien hecho! Ahora vayamos a desarrollar su primer BOT.

![separador5](img/separador.png)
![devbot](img/devbot.png)

Empezamos a codificar los eventos y funciones para desarrollar su BOT, con una estructura basica de inicio.

- Abrir la carpeta de su BOT creado, con Visual Studio Code o con el editor que tenga instalado.
- Crear un nuevo archivo y darle un nombre con la extencion .js (archivo JavaScript).
- Ejemplos: proyectobot.js, bot.js, app.js, etc. (Para esta guía utilizaré index.js)