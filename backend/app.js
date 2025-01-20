// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const gastoRoutes = require('./routes/gastoRoutes');
const { testConnection } = require('./db');
const { FRONTEND_URL } = require('./config');

dotenv.config();

const app = express();

// Middlewares
app.use(
    cors({
        origin: FRONTEND_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Ruta base
app.get('/', (req, res) => res.json({ message: 'API de Gastos' }));

// Rutas
app.use('/api', gastoRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: err.message,
    });
});

// Prueba de conexión a la base de datos
testConnection()
    .then(success => {
        if (!success) {
            console.error('La aplicación se iniciará sin conexión a la base de datos');
        }
    })
    .catch(error => {
        console.error('Error al probar la conexión:', error);
    });

console.log('CORS configuration:', {
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
