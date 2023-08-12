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
            const oneThought = Thought.findById( { _id: req.params.userId } )
            res.status(200).json(oneThought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getThoughts(req, res){
        try{
            const thoughts = Thought.find();
            res.status(200).json(thoughts)
        } catch (err) {
         
        }
    },   
}