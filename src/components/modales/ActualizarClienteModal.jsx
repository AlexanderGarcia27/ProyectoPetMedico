import React, { useEffect, useState } from "react";

export default function ActualizarClienteModal({
    isOpen,
    onClose,
    selectedCliente,
    onSuccess,
}) {
    const [nombre, setNombre] = useState(selectedCliente?.nombre || "");
    const [apellidos, setApellidos] = useState(selectedCliente?.apellidos || "");
    const [telefono, setTelefono] = useState(selectedCliente?.telefono || "");
    const [direccion, setDireccion] = useState(selectedCliente?.direccion || "");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedCliente) {
            setNombre(selectedCliente.nombre || "");
            setApellidos(selectedCliente.apellidos || "");
            setTelefono(selectedCliente.telefono || "");
            setDireccion(selectedCliente.direccion || "");
        }
    }, [selectedCliente]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        if (!selectedCliente?.id_cliente) {
            setError("Cliente no encontrado. ID inválido.");
            setIsLoading(false);
            return;
        }

        // Datos en formato JSON
        const payload = {
            nombre,
            apellidos,
            telefono,
            direccion,
        };

        try {
            const response = await fetch(`/api/clientes/actualizar/${selectedCliente.id_cliente}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error al actualizar el cliente");
            }

            const data = await response.json();
            if (onSuccess) onSuccess(data);

            onClose();
            window.location.reload();
        } catch (err) {
            setError(err.message || "Hubo un error al actualizar el cliente.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-fondo rounded-lg shadow-lg p-6 w-[400px]">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Apellidos"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Dirección"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Teléfono"
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto font-kodchasan"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto"
                            disabled={isLoading}
                        >
                            {isLoading ? "Guardando..." : "Guardar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
