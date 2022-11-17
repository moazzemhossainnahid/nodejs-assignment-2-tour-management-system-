const express = require('express');
const { getTours, postTours, getTourById } = require('../Controllers/Tours.controller');

const router = express.Router();

router.route('/')
    .get(getTours)
    .post(postTours)

router.route('/:id').get(getTourById)




module.exports = router;