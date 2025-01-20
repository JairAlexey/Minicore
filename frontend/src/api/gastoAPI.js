import client from './axios';

export const getGastos = async (fechaIni, fechaFin) => {
    try {
        const response = await client.get('/gastos', {
            params: { fechaIni, fechaFin },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener gastos:', error);
        throw error;
    }
};
