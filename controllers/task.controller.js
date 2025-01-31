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
};

//Delete a task
exports.deleteTask = async (request, h) => {
    try {
        const {id} = request.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return h.response({ message: 'Uppgiften hittades inte.' }).code(404);
        } else {
            return h.response({ message: 'Uppgiften har tagits bort.', task: deletedTask }).code(200);
        }
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
};

//Update a task
exports.updateTask = async (request, h) => {

    const {id} = request.params;
    const { title, description, status } = request.payload;

    try {
        
        const updatedTask = await Task.findByIdAndUpdate(id, {
            title,
            description,
            status
        }, { new: true });

        if (!updatedTask) {
            return h.response({ message: 'Uppgiften hittades inte.' }).code(404);
        } else {
            return h.response({ message: 'Uppgiften har uppdaterats.', task: updatedTask }).code(200);
        }
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
};