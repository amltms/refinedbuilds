const Component = require('../models/Component');
const ComponentAttributes = require('../models/ComponentAttributes');

exports.getComponents = async(req, res, next) =>{
    try {
        const components = await Component.find({type: req.params.type});
        return res.status(200).json({components})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

exports.getComponent = async(req, res, next) =>{
    try {
        const component = await Component.findById(req.params.id);
        return res.status(200).json({component})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

exports.getAttributes = async(req, res, next) =>{
    try {
        const attributes = await ComponentAttributes.find();
        return res.status(200).json({attributes})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

exports.getAttribute = async(req, res, next) =>{
    try {
        const attributes = await ComponentAttributes.find({type: req.params.type});
        return res.status(200).json({attributes})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

