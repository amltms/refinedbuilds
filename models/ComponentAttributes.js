const mongoose = require("mongoose");

const AttributesSechema = new mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Insert component type.']
    },
    title:{
        type: String,
        required: [true, 'Insert type title.']
    },
    attributes:{
        type: Array,
        required: [true, 'Insert attributes.']
    }
}, {collection: 'ComponentAttributes'})

module.exports = mongoose.model('ComponentAttributes', AttributesSechema);