// routes/serviceRoutes.js
const express = require('express');
const { getProfessionals, getProfessional, createProfessional, updateProfessional, deleteProfessional } = require('../controllers/serviceController');

const router = express.Router();

router.get('/', getProfessionals);
router.get('/:id', getProfessional);
router.post('/', createProfessional);
router.put('/:id', updateProfessional);
router.delete('/:id', deleteProfessional);

module.exports = router;