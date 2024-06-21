// controllers/serviceController.js
const Professional = require('../models/Professional');

exports.getProfessionals = async (req, res) => {
    try {
        const professionals = await Professional.find();
        res.json(professionals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProfessional = async (req, res) => {
    try {
        const professional = await Professional.findById(req.params.id);
        if (!professional) return res.status(404).json({ message: 'Professional not found' });
        res.json(professional);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createProfessional = async (req, res) => {
    const professional = new Professional(req.body);
    try {
        const newProfessional = await professional.save();
        res.status(201).json(newProfessional);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateProfessional = async (req, res) => {
    try {
        const updatedProfessional = await Professional.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProfessional) return res.status(404).json({ message: 'Professional not found' });
        res.json(updatedProfessional);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProfessional = async (req, res) => {
    try {
        const professional = await Professional.findById(req.params.id);
        if (!professional) return res.status(404).json({ message: 'Professional not found' });
        await professional.remove();
        res.json({ message: 'Professional deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};