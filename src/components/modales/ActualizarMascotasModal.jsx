import React, { useState } from 'react';

export default function ActualizarMascotasModal({ isOpen, onClose }) {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!isOpen) return null;

    // Manejar la selección de archivo
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleCancel = () => {
        setSelectedImage(null); // Restablece la imagen a null
        onClose(); // Cierra el modal
    };

    // Manejar el clic para abrir el selector de archivos
    const handleClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-fondo rounded-lg shadow-lg p-8 w-[400px]">
                <form>
                    {/* Contenedor para la imagen y el texto */}
                    <div className="mb-4 flex flex-col items-center">
                        {/* Input de archivo oculto */}
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                        {/* Imagen o ícono */}
                        <div onClick={handleClick} className="cursor-pointer">
                            {selectedImage ? (
                                <img src={selectedImage} alt="Seleccionada" className="w-28 h-28 rounded-full object-cover" />
                            ) : (
                                <img src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="Agregar" className="w-28 h-28" />
                            )}
                        </div>
                        <p className="text-texto font-kodchasan">Cambiar Foto</p>
                    </div>
                    <div className="mb-4">
                        <input type="text" className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto" placeholder="Nombre" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto" placeholder="Raza" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto" placeholder="Alergias" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto" placeholder="Enfermedades" />
                    </div>
                    <div className="mb-4">
                        <input type="text" className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto" placeholder="Nombre del dueño" />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button type="button" className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto font-kodchasan" onClick={handleCancel}>Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto font-kodchasan">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
