const { Schema, model, Types } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true, 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please insert a valid email address']
        },
        // Array of _id values referencing the Thought model
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
          }],
          // Array of _id values referencing the User model (self-reference)
          friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User',
            },
        ],
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;