const Software = require('../models/Software');
const SoftwareUseCase = require('../models/SoftwareUseCase');
exports.getSoftwares = async(req, res, next) =>{
    try {
        const softwares = await Software.find();
        return res.status(200).json({softwares})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

exports.getUseCases = async(req, res, next) =>{
    try {
        const useCases = await SoftwareUseCase.find();
        return res.status(200).json({useCases})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

exports.addSoftware = async(req, res, next) =>{
    try {
        const software = req.body;
        await Product.create(software)
        return res.status(201).json({software})     
    } catch (err) {
        return res.status(400).json({ error:err}) 
    }
}