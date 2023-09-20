const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Funciones = require('./funciones.js');

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escanea el código QR con la aplicación de WhatsApp en tu teléfono.');
});

client.on('ready', () => {
    console.log('¡El cliente está listo!');

    const numeroDestino = "";
    const chatId = numeroDestino.substring(1) + "@c.us";

    client.sendMessage(chatId, `Inicio de sesión exitoso`);
});

// Evento de recepción de mensajes
client.on('message', msg => {
    console.log(msg.from.split('@')[0] + ': ' + msg.body);
    Funciones.nombreContacto(msg, client);
    // Función para agregar un retraso aleatorio entre 5 y 14 segundos
    const randomDelay = Math.floor(Math.random() * (14000 - 5000 + 1)) + 5000;
    Funciones.holaCitt(msg, client);

    // Llama a las funciones con el retraso aleatorio
    setTimeout(() => {
        Funciones.mostrarOpciones(msg, client);
        Funciones.contacto(msg, client);
        Funciones.whatsapp(msg, client);
        Funciones.linkedin(msg, client);
        Funciones.github(msg);
        Funciones.pagina(msg);
    }, randomDelay);
});

client.initialize();

process.on('SIGINT', async () => {
    console.log('(SIGINT) Shutting down...');
    console.log('client destroyed');

    // Espera 1 segundo antes de continuar con la destrucción del cliente
    setTimeout(async () => {
        await client.destroy();
        console.log('client destroyed');
        process.exit(0);
    }, 1000);
});
