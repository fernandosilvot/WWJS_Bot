const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Funciones = require('./funciones_2.js');
const dotenv = require('dotenv');
const readlineSync = require('readline-sync');
dotenv.config();

// Pregunta al usuario qué cliente desea utilizar
const selectedClient = readlineSync.question('¿Deseas iniciar con el cliente 1 o cliente 2? (1/2): ');

// Inicializa el cliente correspondiente
let client;
if (selectedClient === '1') {
    client = createClient('cliente-1');
} else if (selectedClient === '2') {
    client = createClient('cliente-2');
} else {
    console.log('Selección no válida. Debes elegir 1 o 2.');
    process.exit(1);
}

// Función para crear un cliente con la configuración dada
function createClient(clientId) {
    return new Client({
        authStrategy: new LocalAuth({ clientId }),
    });
}

// Manejar eventos del cliente
client.on('qr', onQRCode);
client.on('ready', onClientReady);
client.on('message', onMessageReceived);
client.initialize();

// Manejar cierre del programa
process.on('SIGINT', async () => {
    console.log('(SIGINT) Shutting down...');

    // Espera 1 segundo antes de continuar con la destrucción del cliente
    setTimeout(async () => {
        await client.destroy();
        console.log('Client destroyed');
        process.exit(0);
    }, 1000);
});

// Funciones para manejar eventos
function onQRCode(qr) {
    qrcode.generate(qr, { small: true });
    console.log('Escanea el código QR con la aplicación de WhatsApp en tu teléfono.');
}

function onClientReady() {
    console.log('¡El cliente está listo!');

    const numeroDestino = process.env.NUMERO_DESTINO;
    const chatId = numeroDestino.substring(1) + "@c.us";

    client.sendMessage(chatId, `Inicio de sesión exitoso`);
}

function onMessageReceived(msg) {
    chat = msg.from.split('@')[0];
    console.log(chat + ': ' + msg.body);
    
    if (chat.length <= 11) {
        Funciones.Saludo(msg, client);
        Funciones.Contacto(msg, client);
        const randomDelay = Math.floor(Math.random() * (14000 - 5000 + 1)) + 5000;

        // Llama a las funciones con el retraso aleatorio
        setTimeout(() => {
            Funciones.Proyectos(msg, client);
            Funciones.Pagina(msg, client);

        }, randomDelay);
    }
}
