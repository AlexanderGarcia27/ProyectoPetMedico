// components/ServiceModal.jsx
import React from 'react';

export default function AgregarServicioModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
                <h2 className="text-xl font-semibold mb-4">Agregar Servicio</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Descripción:</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Descripción del servicio"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Costo:</label>
                        <input
                            type="number"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Costo del servicio"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Fecha:</label>
                        <input
                            type="date"
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
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
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={onClose}
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
