const router = require('express').Router();

const { 
    createThought,
    getOneThought,
    getThoughts,
} = require('../../controllers/thoughtController')

router.route('/')

module.exports = router;