const mongoose = require("mongoose");

const BuildSchema = new mongoose.Schema({
    component:{
        type: String,
        required: [true, 'Insert component type.']
    },
    tiers: {
        tier1: {type: mongoose.Schema.Types.ObjectId, ref: 'Component'},
        tier2: {type: mongoose.Schema.Types.ObjectId, ref: 'Component'},
        tier3: {type: mongoose.Schema.Types.ObjectId, ref: 'Component'}
    }
}, {collection: 'Build'})

module.exports = mongoose.model('Build', BuildSchema);