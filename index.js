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
    //----  ----------------mensagem de saudação e menu principal---------------------------------------------------//
        if (message.body.toLocaleLowerCase() && contador === 0) {
            contador++;
            client
                .sendText(message.from, 'Olá! Para que eu possa te ajudar, por favor, escolha o número correspondente ao assunto desejado:\n1️⃣ - Dúvidas\n2️⃣ - Documentos\n3️⃣ - Tutorial\n4️⃣ - Sugestões\n#️⃣ - Sair')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    //--------------------------------------------------------------------------------------------------------------//


        //submenu 1
            //opção 1 - dúvidas
            if (message.body === '1' && contador === 1) {
                client
                    .sendText(message.from, '*Por favor, escolha o assunto desejado:*\n\n[A] -Aproveitamento de estudos\n[B] - Área de concentração\n[C] - Atividade complementar\n[D] - B.I.-CPL')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
                }

    //----------------------------------------Submenu de Dúvidas-------------------------------------------------//
        //[A]
        if (message.body.toLocaleLowerCase() === "a" && contador === 1) {
            client
                .sendText(message.from, '*Aproveitamento de estudos*\n\n*Por favor, escolha o assunto desejado:*\n[A1] - O que é aproveitamento de estudos?\n[A2] - Como solicito o aproveitamento de estudos?\n[A3] - É possível aproveitar carga horária de disciplinas como atividade complementar?\n[A4] - Qual o limite ou a porcentagem  para aproveitamento de estudos?')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //[B]
        if (message.body === "b" && contador === 1) {
            client
                .sendText(message.from, '*Área de concentração*\n\n*Por favor, escolha o assunto desejado:*\n[B1] - O que é área de concentração?\n[B2] - Quais são os tipos de áreas de concentração? \n[B3] - Como entro em área de concentração?\n[B4] - Quais são as Áreas de Concentração do BI em Artes?')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //[C]
        if (message.body === "c" && contador === 1) {
            client
                .sendText(message.from, '*Atividade complementar*\n\n*Por favor, escolha o assunto desejado:*\n[C1] - O que são atividades complementares? \n[C2] - Qual é a carga horária de atividades complementares do meu curso?\n[C3] - Quantas horas de atividades complementares preciso fazer?\n[C4] - Quantas horas de atividades complementares preciso fazer para concluir o curso?')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //[D]
        if (message.body === "d" && contador === 1) {
            client
                .sendText(message.from, '*B.I. CPL*\n\n*Por favor, escolha o assunto desejado:*\n[D1] - Tem como escolher mestrado como a terceira opção do B.I. CPL?\n[D2] - No CPL pode colocar o mesmo curso em diferentes semestres, em diferentes opções?')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    //--------------------------------------------------------------------------------------------------------------//


    //----------------------------------------Respostas da Dúvidas--------------------------------------------------//
            //[A1]
        if (message.body.toLocaleLowerCase() === "a1" && contador === 1) {
                client
                    .sendText(message.from, '*O que é aproveitamento de estudos?*\n\nEstudantes que já tenham cursado - anteriormente ao ingresso no BI - disciplinas em instituições de ensino superior (na UFBA ou em outra instituição) poderão solicitar aproveitamento desses estudos a partir de requerimento, que será apreciado pelo Colegiado de curso.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[A2]
        if (message.body.toLocaleLowerCase() === "a2" && contador === 1) {
                client
                    .sendText(message.from, '*Como solicito o aproveitamento de estudos?*\n\nO requerimento para aproveitamento deverá ser realizado junto ao Núcleo de Atendimento ao Estudante(NAE / CARE), acompanhado do histórico escolar, das ementa(s) e conteúdo(s) programático(s) do (s) estudo(s) realizado(s) e outros documentos específicos indicados no site da SUPAC. Para facilitar o processo de análise dos pedidos e, consequentemente, torná - los mais ágeis, os pedidos devem ser acompanhados da folha de aproveitamento de estudos, bastando preencher e anexar ao pedido. Clique aqui para baixar a folha de aproveitamento.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[A3]
        if (message.body.toLocaleLowerCase() === "a3" && contador === 1) {
                client
                    .sendText(message.from, '*É possível aproveitar carga horária de disciplinas como atividade complementar?*\n\nA solicitação de aproveitamento de carga horária de disciplinas cursadas na UFBA como atividades complementares deve ser solicitada no Colegiado do curso, de acordo com as orientações contidas na Resolução de atividades complementares.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[A4]
        if (message.body.toLocaleLowerCase() === "a4" && contador === 1) {
                client
                    .sendText(message.from, '*Qual o limite ou a porcentagem  para aproveitamento de estudos?*\n\nA apreciação do requerimento de aproveitamento de estudos deverá respeitar, no máximo, o percentual de sessenta por cento (60%) da carga horária total do curso, o que equivale, no caso dos BIs, a 1.440 horas. Esta regra não se aplica a casos de estudante transferido ex-officio ou reingressante em qualquer modalidade de reingresso.\nNo caso de aproveitamento de estudos no BI Saúde, é necessário observar o que determina a Resolução n.º 01 / 2015 UFBA / IHAC / BISAUDE.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
        //--------------------------------------------------------------------------------//
            //[B1]
        if (message.body.toLocaleLowerCase() === "b1" && contador === 1) {
                client
                    .sendText(message.from, '*O que é área de concentração?*\n\nProfissional específica, quanto a possibilidade de uma formação que permita a atuação em áreas profissionais que demandem um perfil inter/transdisciplinar. Existem Áreas de Concentração organizadas e coordenadas pelo IHAC (as internas) e há outras oferecidas por outras unidades da UFBA (as externas ao IHAC).\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[B2]
        if (message.body.toLocaleLowerCase() === "b2" && contador === 1) {
                client
                    .sendText(message.from, '*Quais são os tipos de áreas de concentração?*\n\n*a) As Áreas de Concentração internas são:* Políticas e Gestão da Cultura; Relações Internacionais e Arte; Tecnologias Contemporâneas.\n\n *b) Áreas de Concentração externas ao IHAC são:* Estudos da Subjetividade e do Comportamento Humano; Estudos Jurídicos; Escrita Criativa; Cinema e Audiovisual; Estudos de Gênero; Teatro e Estudos Coreográficos.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[B3]
        if (message.body.toLocaleLowerCase() === "b3" && contador === 1) {
                client
                    .sendText(message.from, '*Como entro em área de concentração?*\n\nSegundo a RESOLUÇÃO Nº 01/2011, os estudantes poderão ingressar em uma Área de Concentração somente após ter cursado com aprovação todos os componentes curriculares obrigatórios da Grande Área do seu BI, o que costuma ocorrer após três semestres cursando o Bacharelado.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[B4]
        if (message.body.toLocaleLowerCase() === "b4" && contador === 1) {
                client
                    .sendText(message.from, '*Quais são as Áreas de Concentração do BI em Artes?*\n\nCinema e Audiovisual, Estudos Coreográficos, Escrita Criativa, Estudos das Subjetividades e do Comportamento Humano, Políticas e Gestão da Cultura e Teatro.\nA área de Artes e Tecnologias Contemporâneas está sendo reformulada.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
        //------------------------------------------------------------------//
            //[C1]
        if (message.body.toLocaleLowerCase() === "c1" && contador === 1) {
                client
                    .sendText(message.from, '*O que são atividades complementares? *\n\nSão atividades acadêmicas e culturais realizadas pelos estudantes, durante o curso, que não se encontram incluídas entre os componentes curriculares obrigatórios e optativos de cada Bacharelado Interdisciplinar. Partem do princípio de que a formação da/o estudante não se limita aos componentes curriculares cursados em sala de aula e, além de oferecer alternativas para que a/o estudante complemente sua formação, fomentam a autonomia para a realização dos percursos acadêmicos.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[C2]
        if (message.body.toLocaleLowerCase() === "c2" && contador === 1) {
                client
                    .sendText(message.from, '*Qual é a carga horária de atividades complementares do meu curso?*\n\nTodo estudante deverá cumprir obrigatoriamente um total de 360h de atividades complementares.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[C3]
        if (message.body.toLocaleLowerCase() === "c3" && contador === 1) {
                client
                    .sendText(message.from, '*Quantas horas de atividades complementares preciso fazer?*\n\nTodo estudante deverá cumprir obrigatoriamente um total de 360h de atividades complementares.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[C4]
        if (message.body.toLocaleLowerCase() === "c4" && contador === 1) {
                client
                    .sendText(message.from, '*Quantas horas de atividades complementares preciso fazer para concluir o curso?*\n\nTodo estudante deverá cumprir obrigatoriamente um total de 360h de atividades complementares.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
        //------------------------------------------------------------------//
            //[D1]
        if (message.body.toLocaleLowerCase() === "d1" && contador === 1) {
                client
                    .sendText(message.from, '*Tem como escolher mestrado como a terceira opção do B.I. CPL?*\n\nNão.\n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[D2]
        if (message.body.toLocaleLowerCase() === "d2" && contador === 1) {
                client
                    .sendText(message.from, '*No CPL pode colocar o mesmo curso em diferentes semestres, em diferentes opções?*\n\nSim. No momento da inscrição, a/o candidata/o poderá optar por até três cursos, e indicará a ordem de sua preferência. \n\nPara *sair* digite #️⃣')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
    //------------------------------------------------------------------------------------------------------------//
        //submenu 1
        //opção 2 - documentos
        if (message.body === '2') {
            contador = 2;
            client
                .sendText(message.from, '*Documentos*\n\n*Por favor, selecione o seu B.I.:*\n[A] - Artes\n[B] - Ciência e Tecnologia\n[C] - Humanidades\n[D] - Saúde')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    //------------------------Submenu de Documentos----------------------------------------------------------------//
            //[A]
            if (message.body.toLocaleLowerCase() === "a" && contador === 2) {
                client
                    .sendText(message.from, '*B.I. de Artes*\n\n*Por favor, escolha o assunto desejado:*\n[A1] - Word\n[A2] - Excel\n[A3] - Powerpoint\n[A4] - PDF\n[A5] - Imagem')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[B]
            if (message.body.toLocaleLowerCase() === "b" && contador === 2) {
                client
                    .sendText(message.from, '*B.I. de Ciência e Tecnologia*\n\n*Por favor, escolha o assunto desejado:*\n[A1] - Word\n[A2] - Excel\n[A3] - Powerpoint\n[A4] - PDF\n[A5] - Imagem')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[C]
            if (message.body.toLocaleLowerCase() === "c" && contador === 2) {
                client
                    .sendText(message.from, '*B.I. de Humanidades*\n\n*Por favor, escolha o assunto desejado:*\n[A1] - Word\n[A2] - Excel\n[A3] - Powerpoint\n[A4] - PDF\n[A5] - Imagem')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
            //[D]
            if (message.body.toLocaleLowerCase() === "d" && contador === 2) {
                client
                    .sendText(message.from, '*B.I. de Saúde*\n\n*Por favor, escolha o assunto desejado:*\n[A1] - Word\n[A2] - Excel\n[A3] - Powerpoint\n[A4] - PDF\n[A5] - Imagem')
                    .then((result) => {
                        console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                        console.error('Error when sending: ', erro); //return object error
                    });
            }
        //---------------------------------------------------------------------------------------------------------//

        

    //--------------------------------------Respostas de Documentos--------------------------------------------//
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
        }
    
    if (message.body.toLocaleLowerCase() === "a5" && contador === 2) {
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


    
    //-------------------------------------------------------------------------------------------------------------//
        
        //opção 3 - Tutorial
        if (message.body === '3' && contador < 2) {
            contador++;
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
        if (message.body === '4' && contador < 2) {
            contador++;
            client
                .sendText(message.from, 'Sugestões\n*Pode hablar*')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //opção # - sair
        if (message.body === '#' || message.body === '#️⃣') {
            contador = 0;
            client
                .sendText(message.from, 'Espero ter ajudado! Até a próxima! :)')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }



    });
}