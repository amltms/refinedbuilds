const mongoose = require("mongoose");

const SoftwareSchema = new mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Insert software type.']
    },
    title:{
        type: String,
        required: [true, 'Insert software name.']
    }
}, {collection: 'Software'})

module.exports = mongoose.model('Software', SoftwareSchema);