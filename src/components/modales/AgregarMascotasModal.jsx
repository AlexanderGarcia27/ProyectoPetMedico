import React, { useState } from 'react';
import icon from '../../assets/IconMas.png';
import ImagModal from '../../assets/ImagMas.jpg';
import { fetchAgregarMascota } from '../../validation/fetchAgregarMascota';

export default function AgregarMascotasModal({ isOpen, onClose, idCliente }) {
    const [selectedImage, setSelectedImage] = useState(null); // Almacena la imagen seleccionada

    if (!isOpen) return null;

    // Manejar la selección de archivo
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file); // Almacena el archivo para enviarlo
        }
    };

    // Clic para abrir el selector de archivos
    const handleClick = () => {
        document.getElementById('fileInput').click();
    };

    // Cancelar y cerrar modal
    const handleCancel = () => {
        setSelectedImage(null);
        onClose();
    };

    // Enviar datos al backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('nombre', e.target.nombre.value);
            formData.append('raza', e.target.raza.value);
            formData.append('alergias', e.target.alergias.value);
            formData.append('enfermedades', e.target.enfermedades.value);
            formData.append('id_cliente', idCliente); // Incluye el id_cliente
            if (selectedImage) {
                formData.append('imagen', selectedImage); // Incluye la imagen seleccionada
            }

            // Llamar a la función fetchAgregarMascota
            const response = await fetchAgregarMascota(formData);
            console.log('Mascota agregada con éxito:', response);
            onClose()
            window.location.reload(); // Cierra el modal después de guardar
        } catch (error) {
            console.error('Error al agregar la mascota:', error.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-fondo rounded-lg shadow-lg w-[800px] h-[550px] flex">
                <div className="w-1/2 flex flex-col justify-between p-8">
                    <form className="h-full" onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col items-center">
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                            <div onClick={handleClick} className="cursor-pointer">
                                {selectedImage ? (
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Seleccionada"
                                        className="w-28 h-28 rounded-full object-cover"
                                    />
                                ) : (
                                    <img src={icon} alt="Agregar" className="w-28 h-28" />
                                )}
                            </div>
                            <p className="text-texto font-kodchasan">Agregar una foto</p>
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="nombre"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="raza"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Raza"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="alergias"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Alergias"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="enfermedades"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Enfermedades"
                            />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto font-kodchasan"
                                onClick={handleCancel}
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
                <div className="w-1/2 relative p-0 m-0">
                    <img
                        src={ImagModal}
                        alt="Imagen Modal"
                        className="w-full h-full object-cover object-fit-cover rounded-r-lg top-0 right-0"
                    />
                </div>
            </div>
        </div>
    );
}