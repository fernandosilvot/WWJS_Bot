# Chatbot básico con WhatsApp Web JS

Este proyecto implementa un chatbot básico utilizando la librería WhatsApp Web JS (https://github.com/pedroslopez/whatsapp-web.js) para interactuar con la plataforma WhatsApp. El chatbot responde a mensajes específicos con información sobre el creador, proyectos en GitHub, información de contacto y una página web.

## Configuración

Antes de ejecutar el chatbot, asegúrate de configurar las siguientes variables de entorno en un archivo `.env`:

```plaintext
NUMERO_DESTINO=xxxxxx          # Número de teléfono de destino para recibir mensajes
CORREO=tucorreo@gmail.com      # Dirección de correo electrónico para contacto
LINKEDIN=tulinkedin            # Perfil de LinkedIn para contacto
GITHUB_USERNAME=tuusername     # Nombre de usuario de GitHub para obtener proyectos
PAGINA_WEB=tupaginaweb.com     # URL de tu página web
```

## Iniciar el Chatbot

1. Ejecuta el archivo `test.js` usando Node.js:

   ```bash
   node test.js
   ```

2. Selecciona el cliente (1 o 2) al que deseas conectar.

3. Escanea el código QR con la aplicación de WhatsApp en tu teléfono.

4. ¡Listo! El chatbot responderá a mensajes específicos con información útil.

## Comandos Disponibles

- **!contacto**: Proporciona información de contacto del creador.
- **!proyectos**: Muestra una lista de proyectos en GitHub del creador.
- **!pagina-web**: Proporciona la URL de la página web del creador.

## Funcionalidades Implementadas

- Saludo personalizado al recibir un mensaje con el texto "hola".
- Respuestas detalladas a comandos específicos.
- Retraso aleatorio en la respuesta para simular un comportamiento más humano.

## Estructura del Proyecto

- `test2.js`: Archivo principal que inicia el cliente de WhatsApp y maneja eventos.
- `funciones_2.js`: Contiene funciones para manejar diferentes comandos y respuestas.

**Nota**: Este chatbot es una implementación básica y puede ser extendido según las necesidades específicas del usuario. 
![Imagen del proyecto](https://github.com/fernandosilvot/WWJS_Bot/blob/version1/Imagen_proyecto.jpg)
