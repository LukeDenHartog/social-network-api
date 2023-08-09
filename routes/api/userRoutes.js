const router = require('express').Router();

const { 
    createUser,
    getUsers,
    getOneUser,
    updateUser
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser);

module.exports = router;