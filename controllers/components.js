const Component = require("../models/Component");
const ComponentAttributes = require("../models/ComponentAttributes");

// @desc    get type of components
// @route   GET /components/all/:type
exports.getComp = async (req, res, next) => {
  return res.status(200).json("hi");
};

// @desc    get type of components
// @route   GET /components/all/:type
exports.getComponents = async (req, res, next) => {
  try {
    const components = await Component.find({ type: req.params.type });
    return res.status(200).json({ components });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

// @desc    get type of components
// @route   GET /components/:type/:id
exports.getComponent = async (req, res, next) => {
  try {
    const component = await Component.findById(req.params.id);
    return res.status(200).json({ component });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

// @desc    get all attributes
// @route   GET /attributes
exports.getAttributes = async (req, res, next) => {
  try {
    const attributes = await ComponentAttributes.find();
    return res.status(200).json({ attributes });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

// @desc    get attributes of a single component type
// @route   GET /components/attributes/:type
exports.getAttribute = async (req, res, next) => {
  try {
    const attributes = await ComponentAttributes.find({
      type: req.params.type,
    });
    return res.status(200).json({ attributes });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};
