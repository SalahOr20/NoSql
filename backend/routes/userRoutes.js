// routes/userRoutes.js
const express = require('express');
const { signup, login, getUsers, getUser, createUser, updateUser, deleteUser, addFavorite } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:id/favorites', addFavorite);

module.exports = router;