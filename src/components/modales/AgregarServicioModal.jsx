import React, { useState } from "react";
import { agregarServicio } from "../../validation/fetchAgregarServicios";

export default function AgregarServicioModal({ isOpen, onClose, idCliente, idMascota }) {
    const [descripcion, setDescripcion] = useState('');
    const [costo, setCosto] = useState('');

    const handleGuardar = async () => {
        if (!descripcion || !costo) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const costoNumerico = parseFloat(costo);
        if (isNaN(costoNumerico) || costoNumerico <= 0) {
            alert("El costo debe ser un número válido y mayor a cero.");
            return;
        }

        if (!idCliente || !idMascota) {
            alert("No se pudo identificar al cliente o la mascota.");
            return;
        }

        const nuevoServicio = { id_cliente: idCliente, id_mascota: idMascota, descripcion, costo: costoNumerico };

        try {
            const response = await agregarServicio(nuevoServicio);

            if (response.ok) {
                alert("Servicio agregado con éxito");
                onClose();
            } else {
                alert(`Error: ${response.message || "Error desconocido"}`);
            }
        } catch (error) {
            alert(`Hubo un error: ${error.message || "Error desconocido"}`);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-ModalSer rounded-lg shadow-lg p-6 w-[400px]">
                <h2 className="text-xl text-TextElim font-kodchasan mb-4">
                        Estás añadiendo un nuevo servicio
                    </h2>
                    <form className="space-y-4">
                    <div>
                        <label className="text-texto font-kodchasan">Descripción:</label>
                        <input
                            type="text"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            className="w-full px-3 py-2 rounded-[20px] bg-InputSer text-TextElim placeholder-TextElim"
                            placeholder="Descripción del servicio"
                        />
                    </div>
                    <div>
                        <label className="text-texto font-kodchasan">Costo:</label>
                        <input
                            type="number"
                            value={costo}
                            onChange={(e) => setCosto(e.target.value)}
                            className="w-full px-3 py-2 rounded-[20px] bg-InputSer text-TextElim placeholder-TextElim"
                            placeholder="Costo del servicio"
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleGuardar}
                            className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
