const router = require('express').Router();

const { 
    createThought,
    getOneThought,
    getThoughts,
    updateThought,
    deleteThought,
    createReaction,
} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/createReaction').post(createReaction)

module.exports = router;