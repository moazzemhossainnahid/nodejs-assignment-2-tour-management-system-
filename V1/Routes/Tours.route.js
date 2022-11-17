const express = require('express');
const { getTours, postTours, getTourById, getTrendingTour, getCheapestTour, updateTourById } = require('../Controllers/Tours.controller');

const router = express.Router();


/**
 * @api {get} Get all the tour details here
 * @require {admin}
 */

/**
 * @api {post} Post tour here
 * required field {name, description, price, tickets (in-stock, out-of-stock)}
 */
router.route('/')
    .get(getTours)
    .post(postTours)


/**
 * @api {Get} Trending tour 
 */
/**
 * @api {Get} Cheapest tour 
 */
router.route('/trending').get(getTrendingTour)
router.route('/cheapest').get(getCheapestTour)


/**
 * @api {Get tour} get tour by using id
 */
/**
 * @api {Update tours} update tour by using id
 */

router.route('/:id')
    .get(getTourById)
    .patch(updateTourById)





module.exports = router;