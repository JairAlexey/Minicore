// backend/routes/gastoRoutes.js
const express = require('express');
const { obtenerGastos } = require('../controllers/gastosController');
const router = express.Router();

router.get('/gastos', obtenerGastos);

module.exports = router;
