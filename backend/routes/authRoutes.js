// authRoutes.js

const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Rutas de autenticación
router.post('/login', authController.login);
router.post('/register', authController.registro);

module.exports = router;
