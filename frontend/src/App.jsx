import React, { useState } from 'react';
import DateRangePicker from './components/DateRangePicker.jsx';
import GastosTable from './components/GastosTable.jsx';
import { getGastos } from './api/gastoAPI';

function App() {
    const [fechaIni, setFechaIni] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [gastos, setGastos] = useState([]);

    const fetchGastos = async () => {
        try {
            const data = await getGastos(fechaIni, fechaFin);
            setGastos(data);
        } catch (error) {
            console.error('Error al obtener gastos:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Filtrar Gastos</h1>
            
            <DateRangePicker
                fechaIni={fechaIni}
                fechaFin={fechaFin}
                setFechaIni={setFechaIni}
                setFechaFin={setFechaFin}
            />

            <button
                onClick={fetchGastos}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-8"
            >
                Buscar Gastos
            </button>

            {gastos.length > 0 && <GastosTable gastos={gastos} />}
        </div>
    );
}

export default App;