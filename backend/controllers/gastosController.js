// backend/controllers/gastosController.js
const { getGastosByDateRange } = require('../models/gastoModel');

const obtenerGastos = async (req, res) => {
    const { fechaIni, fechaFin } = req.query;
    try {
        const gastos = await getGastosByDateRange(fechaIni, fechaFin);
        res.json(gastos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { obtenerGastos };
