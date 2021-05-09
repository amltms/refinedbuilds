const express = require('express');
const router = express.Router();
const { getSoftwares, getUseCases } = require('../controllers/software');

router
    .route('/all/usecases')
    .get(getUseCases);

    
router
    .route('/all/software')
    .get(getSoftwares);

module.exports = router;