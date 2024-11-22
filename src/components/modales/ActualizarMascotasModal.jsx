import React, { useEffect, useState } from 'react';

export default function ActualizarMascotasModal({ isOpen, onClose, selectedMascota, onSuccess }) {
    const [nombre, setNombre] = useState(selectedMascota?.nombre || "");
    const [raza, setRaza] = useState(selectedMascota?.raza || "");
    const [alergias, setAlergias] = useState(selectedMascota?.alergias || "");
    const [enfermedades, setEnfermedades] = useState(selectedMascota?.enfermedades || "");
    const [image, setImage] = useState(selectedMascota?.imagen || ""); // La imagen actual, ya sea un archivo o URL
    const [initialImage, setInitialImage] = useState(selectedMascota?.imagen || ""); // La imagen original
    const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        if (selectedMascota) {
            setNombre(selectedMascota.nombre);
            setRaza(selectedMascota.raza);
            setAlergias(selectedMascota.alergias);
            setEnfermedades(selectedMascota.enfermedades);
            setImage(selectedMascota.imagen);
            setInitialImage(selectedMascota.imagen);
        }
    }, [selectedMascota]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file); // Actualiza la imagen con el archivo cargado
        }
    };

    const handleCancel = () => {
        setImage(initialImage); // Restaurar la imagen original si se cancela
        onClose(); // Cerrar modal
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        if (!selectedMascota?.id_mascota) {
            console.error('Error: selectedMascota no tiene un ID válido.', selectedMascota);
            setError('No se encontró la mascota seleccionada.');
            setIsLoading(false);
            return;
        }

        // Crea un FormData y añade los datos
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('raza', raza);
        formData.append('alergias', alergias);
        formData.append('enfermedades', enfermedades);
        if (image instanceof File) {
            formData.append('imagen', image); // Solo añade si es un archivo
        }

        try {
            const response = await fetch(`/api/mascotas/actualizar/${selectedMascota.id_mascota}`, {
                method: 'PATCH',
                body: formData, // Enviar el FormData directamente
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la mascota');
            }

            const data = await response.json();
            if (onSuccess) onSuccess(data);

            onClose();
        } catch (err) {
            console.error('Error en la solicitud:', err);
            setError('Hubo un error al actualizar la mascota. Intenta nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-fondo rounded-lg shadow-lg p-8 w-[400px]">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center mb-4">
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                        <div onClick={() => document.getElementById('fileInput').click()} className="cursor-pointer">
                            {image ? (
                                // Si la imagen es un archivo, mostrarla como una vista previa
                                image instanceof File ? (
                                    <img
                                        src={URL.createObjectURL(image)} // Crear una URL temporal para la vista previa
                                        alt="Seleccionada"
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                ) : (
                                    // Si la imagen es una URL (original), mostrarla
                                    <img
                                        src={image}
                                        alt="Original"
                                        className="w-32 h-32 object-cover rounded-full"
                                    />
                                )
                            ) : (
                                <p>No hay imagen</p>
                            )}
                        </div>
                        <p className="text-texto font-kodchasan flex justify-center">Cambiar foto</p>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="nombre" className="block mb-2 text-texto font-kodchasan">
                            Nombre
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Nombre"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="raza" className="block mb-2 text-texto font-kodchasan">
                            Raza
                        </label>
                        <input
                            id="raza"
                            type="text"
                            value={raza}
                            onChange={(e) => setRaza(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Raza"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="alergias" className="block mb-2 text-texto font-kodchasan">
                            Alergias
                        </label>
                        <input
                            id="alergias"
                            type="text"
                            value={alergias}
                            onChange={(e) => setAlergias(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Alergias"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="enfermedades" className="block mb-2 text-texto font-kodchasan">
                            Enfermedades
                        </label>
                        <input
                            id="enfermedades"
                            type="text"
                            value={enfermedades}
                            onChange={(e) => setEnfermedades(e.target.value)}
                            className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                            placeholder="Enfermedades"
                        />
                    </div>

                    {error && <p className="text-texto text-center">{error}</p>}

                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto"
                            onClick={handleCancel}
                            disabled={isLoading}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Guardando...' : 'Guardar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
