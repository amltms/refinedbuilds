const express = require("express");
const router = express.Router();
const {
  getComp,
  getComponents,
  getComponent,
  getAttributes,
  getAttribute,
} = require("../controllers/components");

router.route("/").get(getComp);
router.route("/all/:type").get(getComponents);

router.route("/attributes").get(getAttributes);

router.route("/attributes/:type").get(getAttribute);

router.route("/:type/:id").get(getComponent);

module.exports = router;
