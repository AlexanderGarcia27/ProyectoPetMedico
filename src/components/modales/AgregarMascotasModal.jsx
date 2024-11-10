import React, { useState } from 'react';
import icon from '../../assets/IconMas.png';
import ImagModal from '../../assets/ImagMas.jpg';

export default function AgregarMascotasModal({ isOpen, onClose }) {
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
            <div className="bg-fondo rounded-lg shadow-lg w-[800px] h-[550px]  flex">
                <div className="w-1/2 flex flex-col justify-between p-8">
                    <form className="h-full">
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
                                    <img src={selectedImage} alt="Seleccionada" className="w-28 h-28 rounded-full object-cover" />
                                ) : (
                                    <img src={icon} alt="Agregar" className="w-28 h-28" />
                                )}
                            </div>
                            <p className="text-texto font-kodchasan">Agregar una foto</p>
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
