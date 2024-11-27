export const fetchBorrarCliente = async (idCliente) => {
    try {
        const response = await fetch(`/api/clientes/${idCliente}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al eliminar el cliente');
        }

        // Recarga la página directamente al eliminar con éxito
        window.location.reload();

    } catch (error) {
        console.error('Error al eliminar la mascota:', error);
    }
};
