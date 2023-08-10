const { Thought, User, Reaction } = require('../models');

module.exports = {
    async createThought(res, req){
        try{
            const thought = Thought.create(req.body)
            res.status(200).json(thought)
        } catch (err) {
         
        }
    },
    async getOneThought(res, req) {
        try {
            const oneThought = Thought.findById( { _id: req.params.userId } )
            res.status(200).json(oneThought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getThoughts(res, req){
        try{
            const thoughts = Thought.find();
            res.status(200).json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
}