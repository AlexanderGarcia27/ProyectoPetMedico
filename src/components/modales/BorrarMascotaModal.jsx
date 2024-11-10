// components/ServiceModal.jsx
import React from 'react';
import borrar from '../../assets/borrar.png';

export default function BorrarMascotaModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-transparent flex justify-evenly items-center z-50">
            <div className="bg-MoElim rounded-lg shadow-lg p-6 w-[350px]">
                <h2 className="text-base mb-4 text-TextAten font-kodchasan text-right">¡ATENCIÓN!</h2>
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
                        onClick={() => {
                            // Aquí puedes agregar la lógica para eliminar la mascota
                            closeDeleteModal();
                        }}
                    >
                        <span>Eliminar</span>
                        <img src={borrar} alt="Borrar" className="w-5 h-5 ml-2" /> {/* La imagen a la derecha */}
                    </button>
                </div>
            </div>
        </div>
    );
}
