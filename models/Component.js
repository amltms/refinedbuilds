const mongoose = require("mongoose");

const ComponentSchema = new mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Insert component type.']
    },
    name:{
        type: String,
        required: [true, 'Insert component name.']
    },
    price:{
        type: Number,
        required: [true, 'Insert Price.']
    }
}, {collection: 'Component'})

module.exports = mongoose.model('Component', ComponentSchema);