const { Schema, model, Types } = require('mongoose');

const reaction = require('./Reaction')

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
          },
          userId: {
            type: Types.ObjectId,
            ref: 'user'
          },
    }, 
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
     }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;