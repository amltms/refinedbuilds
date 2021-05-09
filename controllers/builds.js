const Build = require('../models/Build');
const Component = require('../models/Component');

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
        const builds = await Build.find({component: req.params.type}).populate('tier'+req.params.id);
        return res.status(200).json({builds})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}

exports.getTiers = async (req, res, next) =>{
    try {
        const tiers = req.body;
        let budget = 0;
        let  components = {cpu: {}, gpu:{}, ram:{}, storage:{}}
        const component = Object.keys(tiers).map(async type => {
            return await Build.findOne({component: type}).populate('tiers.tier'+tiers[type])
        })
        const results = await Promise.all(component)

        results.map(r => {
            budget += r.tiers[`tier${tiers[r.component]}`].price
            components[r.tiers[`tier${tiers[r.component]}`].type] = r.tiers[`tier${tiers[r.component]}`];
        })
        console.log(components)
        console.log(budget)
        return res.status(200).json({results})
    } catch (err) {
        return res.status(404).json({error: err})
    }
}