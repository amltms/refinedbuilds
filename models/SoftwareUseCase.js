const mongoose = require("mongoose");

const SoftwareUseCaseSchema = new mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Insert software use case type.']
    },
    title:{
        type: String,
        required: [true, 'Insert software use case name.']
    }
}, {collection: 'SoftwareUseCase'})

module.exports = mongoose.model('SoftwareUseCase', SoftwareUseCaseSchema);