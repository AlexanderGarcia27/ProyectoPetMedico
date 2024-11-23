import React from 'react';
import borrar from '../../assets/borrar.png';
import tache from '../../assets/tache.png';
import { fetchBorrarMascota } from '../../validation/fetchBorrarMascota.js';

export default function BorrarMascotaModal({ isOpen, onClose, idMascota, onDeleteSuccess }) {
    if (!isOpen) return null;

    const handleEliminar = async () => {
        if (!idMascota) {
            alert('ID de mascota no proporcionado');
            return;
        }

        const result = await fetchBorrarMascota(idMascota);

        if (result.ok) {
            alert(result.message);
            onDeleteSuccess(); // Llama a la función para actualizar la lista de mascotas
            onClose(); // Cierra el modal
        } else {
            alert(`Error: ${result.message}`);
        }
    };

    return (
        <div className="fixed inset-0 bg-transparent flex justify-evenly items-center z-50">
            <div className="bg-MoElim rounded-lg shadow-lg p-6 w-[350px]">
                {/* Contenedor para la imagen y el texto de atención */}
                <div className="flex items-center justify-between mb-4">
                    <img src={tache} alt="tache" className="w-5 h-5 cursor-pointer" onClick={onClose} />
                    <h2 className="text-base text-TextAten font-kodchasan text-right">¡ATENCIÓN!</h2>
                </div>
                <h2 className="text-sm mb-4 text-TextElim font-kodchasan text-center">¿Estás seguro de eliminar esta mascota?</h2>
                <div className="flex justify-center space-x-4">
                    <button
                        type="button"
                        className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan flex items-center"
                        onClick={handleEliminar}
                    >
                        <span>Eliminar</span>
                        <img src={borrar} alt="Borrar" className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
