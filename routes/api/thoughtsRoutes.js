const router = require('express').Router();

const { 
    createThought,
    getOneThought,
    getThoughts,
} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought)

module.exports = router;