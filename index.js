const fs = require('fs');
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
    .create({
        session: 'sessionName',
        catchQR: (base64Qr, asciiQR) => {
            console.log(asciiQR); // Optional to log the QR in the terminal
            var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};

            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');

            var imageBuffer = response;
            require('fs').writeFile(
                'out.png',
                imageBuffer['data'],
                'binary',
                function (err) {
                    if (err != null) {
                        console.log(err);
                    }
                }
            );
        },
        logQR: false,
    })
    .then((client) => start(client))
    .catch((error) => console.log(error));

var contador = 0;

function start(client) {
    client.onMessage((message) => {
        if (message.body.toLocaleLowerCase() && contador < 1) {
            contador++;
            client
                .sendText(message.from, 'Olá! Para que eu possa te ajudar, por favor, escolha o número correspondente ao assunto desejado:\n1️⃣ - Dúvidas\n2️⃣ - Documentos\n3️⃣ - Tutorial\n4️⃣ - Sugestões')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //opção 1 - dúvidas
        if (message.body === '1') {
            client
                .sendText(message.from, 'Dúvidas\n*Por favor, escolha o assunto desejado:*')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //opção 2 - documentos
        if (message.body === '2') {
            client
                .sendText(message.from, 'Documentos\n*Por favor, escolha o assunto desejado:*')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //opção 3 - Tutorial
        if (message.body === '3') {
            client
                .sendText(message.from, 'Tutorial\n*Para saber como usar veja o vídeo abaixo*')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //opção 4 - sugestões
        if (message.body === '4') {
            client
                .sendText(message.from, 'Sugestões\n*Pode hablar*')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    });
}