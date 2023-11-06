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

function start(client){
    client.onMessage((message) => { 
    /*if (message.body.toLocaleLowerCase()) {
            client
                .sendImage(
                    message.from,
                    'imagens/charles.jpg',
                    'image-name',
                    'Charts Leclerc'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
            });
    }


        if (message.body.toLocaleLowerCase()) {
            client
                .sendText(message.from, 'Oi! Como posso ajudar?🅰️')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        if (message.body.toLocaleLowerCase()) {
            client
                .sendFile(
                    message.from,
                    'documentos/Estudo de caso 1 - MATC92.pdf',
                    'file_name',
                    'See my file in pdf'
                )       
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
        }*/
        if (message.body.toLocaleLowerCase()) {
            client
                .sendListMessage(message.from, {
                    buttonText: 'Click here',
                    description: 'Choose one option',
                    sections: [
                        {
                            title: 'Section 1',
                            rows: [
                                {
                                    rowId: 'my_custom_id',
                                    title: 'Test 1',
                                    description: 'Description 1',
                                },
                                {
                                    rowId: '2',
                                    title: 'Test 2',
                                    description: 'Description 2',
                                },
                            ],
                        },
                    ],
                });
        }

        if (message.body.toLocaleLowerCase()) {
            client
                .sendMessageOptions(
                    message.from,
                    'This is a reply!',
                    'sim',
                    'não',
                    {
                        quotedMessageId: reply, 
                    }
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

});
}