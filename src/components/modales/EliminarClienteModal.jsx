// components/ServiceModal.jsx
import React from 'react';

export default function EliminarClienteModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-[300px]">
                    <h2 className="text-xl font-semibold mb-4 text-cyan-700">¿Seguro que desea eliminar este cliente?</h2>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 rounded"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => {
                                // Aquí puedes agregar la lógica para eliminar la mascota
                                closeDeleteModal();
                            }}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
    );
}
