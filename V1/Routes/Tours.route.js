const express = require('express');
const { getTours, postTours, getTourById, getTrendingTour, getCheapestTour } = require('../Controllers/Tours.controller');

const router = express.Router();

router.route('/')
    .get(getTours)
    .post(postTours)

router.route('/trending').get(getTrendingTour)
router.route('/cheapest').get(getCheapestTour)

router.route('/:id').get(getTourById)





module.exports = router;