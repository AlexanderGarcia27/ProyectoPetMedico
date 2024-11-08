// components/ServiceModal.jsx
import React from 'react';

export default function ActualizarMascotaModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
                    <h2 className="text-xl font-semibold mb-4">Actualizar Información de la Mascota</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Nombre:</label>
                            <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Nombre de la mascota" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Raza:</label>
                            <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Raza" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Alergias:</label>
                            <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Alergias" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Enfermedades:</label>
                            <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enfermedades" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Imagen:</label>
                            <input type="file" className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Nombre del Dueño:</label>
                            <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Nombre del dueño" />
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
                                onClick={() => {
                                    // Aquí puedes agregar la lógica para actualizar la mascota
                                    closeUpdateModal();
                                }}
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
}
