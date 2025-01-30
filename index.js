'use strict';

const Hapi = require('@hapi/hapi'); //require hapi

const init = async () => {

    //initializing a Hapi server
    const server = Hapi.server({
        port: 5000,
        host: 'localhost' || '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    //starting server
    await server.start();
    console.log('Server running on: ', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init(); 