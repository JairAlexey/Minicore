import React from 'react';

const DateRangePicker = ({ fechaIni, fechaFin, setFechaIni, setFechaFin }) => {
    return (
        <div className="flex gap-4 items-center mb-6">
            <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Fecha Inicio:</label>
                <input
                    type="date"
                    value={fechaIni}
                    onChange={(e) => setFechaIni(e.target.value)}
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-gray-700 mb-2">Fecha Fin:</label>
                <input
                    type="date"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default DateRangePicker;