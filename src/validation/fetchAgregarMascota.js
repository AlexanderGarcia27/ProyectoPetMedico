export async function fetchAgregarMascota(formData) {
    try {
        const response = await fetch('/api/mascotas', {
            method: 'POST',
            body: formData, // Enviar el FormData directamente
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al crear la mascota');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en fetchAgregarMascota:', error);
        throw error;
    }
}
