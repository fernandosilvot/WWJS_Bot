const { MessageMedia } = require('whatsapp-web.js');

async function nombreContacto(msg, client) {
    const minuscula = msg.body.toLowerCase();
    if (minuscula.includes('!nombre')) {
        msg.reply('hola muchas gracias facilitarme tu nombre. ')
        const tuNumero = "+56959056682";
        const chatId = tuNumero.substring(1) + "@c.us";
        const numeroUsuario = msg.from.split('@')[0];
        client.sendMessage(chatId, `La consulta del usuario +${numeroUsuario} es: \n${msg.body}`);
    }
}
async function holaCitt(msg, client) {
    const minuscula = msg.body.toLowerCase();
    if (minuscula.includes('hola')) {
        const filePath = 'C:\\Users\\Lenovo\\OneDrive\\Documentos\\Proyectos\\personal\\proyecto_1\\hol_citt.jpg';
        const media = MessageMedia.fromFilePath(filePath);

        try {
            await client.sendMessage(msg.from, media);
            console.log('Archivo local enviado con éxito.');
        } catch (error) {
            console.error('Error al enviar archivo local:', error);
        }
        msg.reply('Bienvenido al chat de Citt, en que te puedo ayudar?')
        
    }
}

async function mostrarOpciones(msg, client) {
    const options = [
        `¡Hola! ¿En qué puedo ayudarte?`,
        '(!contacto) - Obtener información de contacto',
        '(!linkedin) - Enlace al perfil de LinkedIn',
        '(!github) - Enlace al perfil de GitHub',
        '(!pagina) - Enlace a la página web personal',
    ];

    const minuscula = msg.body.toLowerCase();
    if (minuscula === '!opciones') {
        const remoteUrl = 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif';
        try {
            const media = await MessageMedia.fromUrl(remoteUrl);
            await client.sendMessage(msg.from, media);
            console.log('Archivo desde URL remota enviado con éxito.');
        } catch (error) {
            console.error('Error al enviar archivo desde URL remota:', error);
        }
        msg.reply(options.join('\n'));
    }
}

function contacto(msg, client) {
    const minuscula = msg.body.toLowerCase();
    if (minuscula === '!contacto') {
        msg.reply('Mi nombre es Fernando Silva\nMi correo es: fernandosilvot@gmail.com\nPuedes escribirme por correo o escribe \'!whatsapp\' junto a consulta, tratare de responder a la brevedad');
        msg.reply('Ejemplo: \n!whatsapp Hola, necesito ayuda con mi proyecto');
        const tuNumero = "+56959056682";
        const chatId = tuNumero.substring(1) + "@c.us";
        const numeroUsuario = msg.from.split('@')[0];
        client.sendMessage(chatId, `El usuario ${numeroUsuario} solicitó tu contacto`);
    }
}

function whatsapp(msg, client) {
    const minuscula = msg.body.toLowerCase();
    if (minuscula.includes('!whatsapp')) {
        msg.reply('Muchas Gracias, tratare de responderte a la brevedad');
        const tuNumero = "+56959056682";
        const chatId = tuNumero.substring(1) + "@c.us";
        const numeroUsuario = msg.from.split('@')[0];
        client.sendMessage(chatId, `La consulta del usuario +${numeroUsuario} es: \n${msg.body}`);
    }
}

async function linkedin(msg, client) {
    const minuscula = msg.body.toLowerCase();
    if (minuscula === '!linkedin') {
        const filePath = 'C:\\Users\\Lenovo\\OneDrive\\Documentos\\Proyectos\\personal\\proyecto_1\\Imagen-cv.jpg';
        const media = MessageMedia.fromFilePath(filePath);

        try {
            await client.sendMessage(msg.from, media);
            console.log('Archivo local enviado con éxito.');
        } catch (error) {
            console.error('Error al enviar archivo local:', error);
        }
        msg.reply('https://www.linkedin.com/in/fernando-silvo-t/');
    }
}

function github(msg) {
    const minuscula = msg.body.toLowerCase();
    if (minuscula === '!github') {
        msg.reply('https://github.com/fernandosilvot');
    }
}

function pagina(msg) {
    const minuscula = msg.body.toLowerCase();
    if (minuscula === '!pagina') {
        msg.reply('https://fernandosilvot.github.io/');
    }
}


module.exports = {
    mostrarOpciones,
    contacto,
    whatsapp,
    linkedin,
    github,
    pagina,
    nombreContacto,
    holaCitt
}
