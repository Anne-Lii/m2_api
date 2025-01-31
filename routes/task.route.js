'use strict';

//includes
const TaskController = require('../controllers/task.controller');//Controller

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Välkommen till Anne-Liis API!';
        }
    },
    {
        method: 'GET',
        path: '/task',
        handler: TaskController.getAllTasks
    },
    {
        method: 'POST',
        path: '/task',
        handler: TaskController.createNewTask
    },
    {
        method: 'DELETE',
        path: '/task/{id}',
        handler: TaskController.deleteTask
    },
    {
        method: 'PUT',
        path: '/task/{id}',
        handler: TaskController.updateTask
    }
];