const { Thought, User } = require('../models');

module.exports = {
    //Create a User
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getOneUser(req, res) {
        try {
            const oneUser = await User.findById({ _id: req.params.userId });
            res.status(200).json(oneUser)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate({ _id: req.params.userId },
            { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete({ _id: req.params.userId })
            res.status(200).json(deletedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}