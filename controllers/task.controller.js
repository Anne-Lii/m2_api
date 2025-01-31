'use strict'

const Task = require('../models/task.model');

//Get all tasks
exports.getAllTasks = async (request, h) => {

    try {
        const task = await Task.find();

        if (task) {
            return h.response(task).code(200);
        } else {
            return h.response({ message: 'There is no tasks.' }).code(404); 
        }
    } catch (err) {
        return h.response({message: err.message}).code(500);
    }
};