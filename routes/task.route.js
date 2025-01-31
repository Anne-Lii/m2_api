'use strict';

//includes
const TaskController = require('../controllers/task.controller');//Controller

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'GET',
        path: '/task',
        handler: TaskController.getAllTasks
    }
];