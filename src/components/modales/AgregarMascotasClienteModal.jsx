// components/ServiceModal.jsx
import React from 'react';

export default function AgregarMascotasClienteModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[400px]">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Agregar Mascota</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Nombre de la mascota" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Raza</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Raza de la mascota" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Alergias</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Alergias de la mascota" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Enfermedades</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Enfermedades de la mascota" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Foto</label>
                        <input type="file" className="w-full p-2 border rounded" />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
