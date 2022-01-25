import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    authCred: String
});

export const userModel = mongoose.model('User', userSchema, 'user');