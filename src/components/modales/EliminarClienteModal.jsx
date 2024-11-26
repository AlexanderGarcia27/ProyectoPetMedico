import React from 'react';
import borrar from '../../assets/borrar.png';
import tache from '../../assets/tache.png';
import { fetchBorrarCliente } from '../../validation/fetchEliminarCliente.js';

export default function EliminarClienteModal({ isOpen, onClose, idCliente, onDeleteSuccess }) {
    if (!isOpen) return null; // Si el modal no está abierto, no se muestra nada

    const handleEliminar = async () => {
        if (!idCliente) {
            console.error('No se ha proporcionado un ID de cliente válido');
            return;
        }

        try {
            const result = await fetchBorrarCliente(idCliente); // Llamamos a la función para borrar el cliente

            if (result && result.success) {
                onDeleteSuccess(); // Actualiza la lista de clientes
                onClose(); // Cierra el modal
                window.location.reload(); // Recarga la página
            } else {
                console.error(`Error: ${result.message || 'Hubo un problema al eliminar el cliente'}`);
            }
        } catch (error) {
            console.error('Error al eliminar el cliente:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-transparent flex justify-evenly items-center z-50">
            <div className="bg-MoElim rounded-lg shadow-lg p-6 w-[350px]">
                {/* Contenedor para la imagen y el texto de atención */}
                <div className="flex items-center justify-between mb-4">
                    <img
                        src={tache}
                        alt="Cerrar"
                        className="w-5 h-5 cursor-pointer"
                        onClick={onClose} // Cierra el modal
                    />
                    <h2 className="text-base text-TextAten font-kodchasan text-right">¡ATENCIÓN!</h2>
                </div>
                <h2 className="text-sm mb-4 text-TextElim font-kodchasan text-center">
                    ¿Estás seguro de eliminar este cliente?
                </h2>
                <div className="flex justify-center space-x-4">
                    <button
                        type="button"
                        className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan"
                        onClick={onClose} // Cierra el modal sin realizar acción
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan flex items-center"
                        onClick={handleEliminar} // Llama a la función para eliminar el cliente
                    >
                        <span>Eliminar</span>
                        <img src={borrar} alt="Borrar" className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
