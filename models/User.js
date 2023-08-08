const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
    {
        userName: {
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
        thoughts: {

        },
        friends: {

        }
    }
);

const User = model('user', userSchema);

module.exports = User;