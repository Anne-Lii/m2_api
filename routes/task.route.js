'use strict';

//includes
const TaskController = require('../controllers/task.controller');//Controller

module.exports = [
    {   //GET route for root '/' and returns a Welcome message
        method: 'GET',//HTTP method
        path: '/',//URL path
        handler: (request, h) => {//function that handles the request

            return 'Välkommen till Anne-Liis API!';//response to klient
        }
    },
    {   //GET route to get all tasks
        method: 'GET',
        path: '/task',
        handler: TaskController.getAllTasks //calls the getAllTasks function in the controller
    },
    {   //POST route to create new tasks
        method: 'POST',
        path: '/task',
        handler: TaskController.createNewTask
    },
    {   //DELETE route to delete a task by id
        method: 'DELETE',
        path: '/task/{id}',
        handler: TaskController.deleteTask
    },
    {   //PUT route to update a task by id
        method: 'PUT',
        path: '/task/{id}',
        handler: TaskController.updateTask
    }
];