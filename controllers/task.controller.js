'use strict'

const Task = require('../models/task.model');

//Get all tasks
exports.getAllTasks = async (request, h) => {

    try {
        const tasks = await Task.find();

        if (tasks.length > 0) {
            return h.response({ message: 'Uppgifter hämtade.', tasks }).code(200);
        } else {
            return h.response({ message: 'Det finns inga uppgifter att hämta.' }).code(404); 
        }
    } catch (err) {
        return h.response({message: err.message}).code(500);
    }
};

//Create a new task
exports.createNewTask = async (request, h) => {
    const { title, description, status } = request.payload;

    try {
        const newTask = new Task({
            title,
            description,
            status
        });

        const savedTask = await newTask.save();
        return h.response({message: 'Uppgiften har lagts till.', task: savedTask}).code(201);
        
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
}