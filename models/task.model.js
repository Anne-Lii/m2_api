'use strict'

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    id:          { type: Number, unique: true},
    title:       { type: String, required: true},
    description: { type: String, required: true},
    status:      { type: String, required: true, enum: ['Ej påbörjad', 'Pågående', 'Avklarad']},
    createdAt:   { type: Date, default: Date.now }

});

module.exports = mongoose.model('Task', taskSchema)