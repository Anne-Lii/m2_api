'use strict';

//includes
const Hapi = require('@hapi/hapi'); //require hapi
require('dotenv').config();// Get environment variables from the .env file
const mongoose = require('mongoose');// Imports Mongoose library 
const taskRoutes = require('./routes/task.route');

const init = async () => {

    // Creates a new Hapi server instance with CORS enabled
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: 'localhost', 
        routes: {
            cors: {
                origin: ['*'], // Allow all origins.
            }
        },
        
    });

    //Connect to MongoDB database
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Kopplad till MongoDB');
    }).catch((error) => {
        console.error('Kunde inte koppla till MongoDB', error);
    });

    //Routes
    server.route(taskRoutes);

    //starting server
    await server.start(taskRoutes);
    console.log('Server igång på: ', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

//Call the init function to start the server
init(); 