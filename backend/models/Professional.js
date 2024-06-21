// models/Professional.js
const mongoose = require('mongoose');

const ProfessionalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    rate: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    available: { type: Boolean, default: true },
    photos: { type: [String], default: [] },
});

module.exports = mongoose.model('Professional', ProfessionalSchema);