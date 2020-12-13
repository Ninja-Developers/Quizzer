import { Schema, model } from 'mongoose';

export const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

export const userModel = model('user', userSchema);


