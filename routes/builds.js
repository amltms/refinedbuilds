const express = require('express');
const router = express.Router();
const { getBuilds, createBuild, getTier, getTiers } = require('../controllers/builds');

router
    .route('/')
    .get(getBuilds);

router
    .route('/create')
    .put(createBuild);

router
    .route('/tiers')
    .put(getTiers);

    
module.exports = router;