export const agregarCliente = async (clienteData) => {
    try {
        const response = await fetch('/api/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteData),
        });

        if (!response.ok) {
            throw new Error('Error al agregar el cliente');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al enviar los datos', error);
        throw error;
    }
};
