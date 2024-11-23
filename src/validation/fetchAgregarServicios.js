export const agregarServicio = async (data) => {
    try {
        const response = await fetch('/api/servicios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            // Leer el cuerpo de la respuesta de error para obtener más detalles
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al agregar el servicio');
        }

        return await response.json();  // Devuelve la respuesta en formato JSON si la solicitud fue exitosa
    } catch (error) {
        console.error('Error en fetchAgregarServicios:', error);
        throw error;  // Lanza el error para que pueda ser capturado en el componente
    }
};
