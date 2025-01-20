// backend/models/gastoModel.js
const { pool } = require('../db');

const getGastosByDateRange = async (fechaIni, fechaFin) => {
    const result = await pool.query(
        `SELECT d.nombre AS departamento, CAST(SUM(g.monto) AS DECIMAL(10,2)) AS total
            FROM gasto g
            JOIN departamento d ON g.id_departamento = d.id
            WHERE g.fecha BETWEEN $1 AND $2
            GROUP BY d.nombre`,
        [fechaIni, fechaFin]
    );
    return result.rows;
};

module.exports = { getGastosByDateRange };
