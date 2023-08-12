const { Thought, User, Reaction } = require('../models');

module.exports = {
    async createThought(req, res){
        try{
            const thought = await Thought.create(req.body)
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getOneThought(req, res) {
        try {
            const oneThought = await Thought.findOne( { _id: req.params.thoughtId } )
            res.status(200).json(oneThought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getThoughts(req, res){
        try{
            const thoughts = await Thought.find();
            res.status(200).json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateThought(req, res){
        try {
        oneThought = await Thought.findOneAndUpdate( { _id: req.params.thoughtId }, 
        { $set: req.body }, { new: true });
        res.status(200).json(oneThought);
        } catch(err) {
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try {
            const deletedThought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId })
            res.status(200).json(deletedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}