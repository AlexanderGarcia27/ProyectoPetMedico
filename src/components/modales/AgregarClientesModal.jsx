import { useState } from 'react';
import ImagModal from '../../assets/ImagClient.jpg';
import { agregarCliente } from '../../validation/fetchAgregarCliente'; // Cambiar la importación

export default function AgregarClientesModal({ isOpen, onClose }) {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    // Función para enviar los datos a la API
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Objeto con los datos que vamos a enviar
        const nuevoCliente = {
            nombre,
            apellidos,
            telefono,
            direccion,
        };

        try {
            // Llamada a la función de validación para agregar el cliente
            await agregarCliente(nuevoCliente);
            onClose(); // Cierra el modal después de agregar el cliente
            window.location.reload(); // Recarga la página después de agregar el cliente
        } catch (error) {
            alert('Error al agregar el cliente');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-fondo rounded-lg shadow-lg w-[800px] h-[550px] flex">
                <div className="w-1/2 relative p-0 m-0">
                    <img
                        src={ImagModal}
                        alt="Imagen Modal"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center p-8">
                    <form className="w-[80%]" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Apellidos"
                                value={apellidos}
                                onChange={(e) => setApellidos(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Dirección"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Teléfono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>
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
                                className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto font-kodchasan"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
