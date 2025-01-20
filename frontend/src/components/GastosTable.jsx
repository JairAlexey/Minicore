import React from 'react';

const GastosTable = ({ gastos }) => {
    return (
        <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">Departamento</th>
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {gastos.map((gasto, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{gasto.departamento}</td>
                            <td className="px-6 py-4">${Number(gasto.total).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GastosTable;