const Build = require('../models/Build');
const Component = require('../models/Component');

function roundUp(value) {
    return (~~((value + 99) / 100) * 100);
}

exports.getBuilds = async(req, res, next) =>{
    try {
        const builds = await Build.find();
        return res.status(200).json({builds})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}


exports.createBuild = async(req, res, next) =>{
    try {
        const buildAttributes = req.body;
        buildAttributes.tier1 = await Component.find({type: buildAttributes.type}).distinct( "_id" );
        const build = await Build.create(buildAttributes);
        return res.status(201).json({build})
    } catch (err) {
        return res.status(500).json({error: err})
    }
}

exports.getTier = async(req, res, next) =>{
    try {
        const builds = await Build.find({component: req.params.type}, `tiers.tier`+req.params.id).populate('tiers.tier'+req.params.id);
        return res.status(200).json({builds})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

exports.getTiers = async (req, res, next) =>{
    try {
        let tiers = req.body;
        tiers.motherboard = tiers.cpuCooler = tiers.cpu;
        tiers.powerSupply = tiers.case = tiers.gpu;
        let budget = 0; 
        const  components={};

        //get all the associated components to the tiers
        const component = Object.keys(tiers).map(async type => {
            const comp = await Build.findOne({component: type}, `tiers.tier${tiers[type]}`).populate(`tiers.tier${tiers[type]}`);
            components[type] = comp.tiers[`tier${tiers[type]}`];

            budget += components[type][0].price;
            return components[type];
        })
        
        Promise.all(component).then(() => {
            budget = roundUp(budget);
            return res.status(200).json({components, budget})
        })
        
    } catch (err) {
        return res.status(404).json({error: err})
    }
}