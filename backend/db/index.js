// backend/db/index.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'minicore_db',
    password: 'admin123',
    port: 5433,
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
