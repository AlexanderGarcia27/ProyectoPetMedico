export const fetchBorrarMascota = async (idMascota) => {
    try {
        const response = await fetch(`/api/mascotas/${idMascota}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al eliminar la mascota');
        }

        // Recarga la página directamente al eliminar con éxito
        window.location.reload();

    } catch (error) {
        console.error('Error al eliminar la mascota:', error);
    }
};
