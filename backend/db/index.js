// backend/db/index.js
const { Pool } = require('pg');
const {
    PG_USER,
    PG_HOST,
    PG_DATABASE,
    PG_PASSWORD,
    PG_PORT
} = require('../config');

const pool = new Pool({
    user: PG_USER,
    host: PG_HOST,
    database: PG_DATABASE,
    password: PG_PASSWORD,
    port: PG_PORT
});

const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('Conexión a la base de datos exitosa');
        client.release();
        return true;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        return false;
    }
};

module.exports = {
    pool,
    testConnection
};
