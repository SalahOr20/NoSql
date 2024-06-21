// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    activity: { type: String, required: true },
    status: { type: String, required: true },
    phone: { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Professional' }],
});

module.exports = mongoose.model('User', UserSchema);