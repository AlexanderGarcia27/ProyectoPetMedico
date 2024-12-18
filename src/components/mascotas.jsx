import React, { useState, useEffect } from 'react';
import logo1 from "../assets/logo1.jpg";
import imgDelete from "../assets/eliminar.png";
import imgUpdate from "../assets/actualizar.png";
import mas from "../assets/simbolomas.png";
import AgregarServicioModal from "./modales/AgregarServicioModal.jsx";
import BorrarMascotaModal from "./modales/BorrarMascotaModal.jsx";
import ActualizarMascotaModal from './modales/ActualizarMascotasModal.jsx';
import Sidebar from './SideMenu.jsx';
import { fetchMascotas } from '../validation/fetchMascotas.js';

export default function Mascotas() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
    const [mascotas, setMascotas] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);
    const [selectedMascota, setSelectedMascota] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchDatosMascotas = async () => {
            try {
                const mascotasData = await fetchMascotas();
                setMascotas(mascotasData || []);
            } catch (error) {
                console.error("Error fetching mascotas:", error);
                setMascotas([]); // Establece un estado vacío para evitar errores en el renderizado
            }
        };
        fetchDatosMascotas();
    }, []);

    const openDeleteModal = (mascota) => {
        setSelectedMascota(mascota); // Guarda la mascota seleccionada
        setIsDeleteModalOpen(true); // Abre el modal de eliminación
    };

    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    const openUpdateModal = (mascota) => {
        setSelectedMascota(mascota);
        setIsUpdateModalOpen(true);
    };

    const closeUpdateModal = () => setIsUpdateModalOpen(false);

    const openServiceModal = (mascota) => {
        setSelectedMascota(mascota); // Guarda la mascota seleccionada
        setIsServiceModalOpen(true);
    };

    const closeServiceModal = () => setIsServiceModalOpen(false);

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <>
            <nav className="border-gray-200 fixed top-0 left-0 w-full z-50 bg-fondo pt-4">
                <div className="max-w-screen-xl flex items-center justify-between pl-4 flex-wrap">
                    <div className="flex items-center space-x-4 flex-grow">
                        <img src={logo1} className="h-16 w-16 rounded-full" alt="Flowbite Logo" />
                        <div className="flex flex-col items-start">
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-texto mb-1">PET</span>
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-left text-texto">MEDICO</span>
                        </div>
                    </div>
                    <div className="flex px-4 py-2 rounded-[70px] overflow-hidden w-[400px] font-sans bg-white shadow-md border border-[#AAAAAA] justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600 mr-3 rotate-90">
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                        <input
                            type="text"
                            className="w-full outline-none bg-transparent text-gray-600 text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar mascota..."
                        />
                    </div>
                </div>
            </nav>
            <Sidebar />
            <div className="pt-[120px]">
                <div className="flex justify-center items-center">
                    <div className="flex flex-wrap justify-center gap-6">
                    {mascotas
                            .filter(mascota =>
                                mascota.nombre.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por nombre
                            )
                            .map((mascota, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center mx-6 my-6 bg-primario shadow-sm border border-slate-200 rounded-[20px] p-6 w-60 ${expandedCard === index ? 'h-auto' : 'h-[400px]'} transition-all duration-300`}
                            >
                                <div className="relative h-[200px] m-2.5 overflow-hidden text-white rounded-md">
                                    <img
                                        src={mascota.imagen || "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"}
                                        alt="card-image"
                                        className="w-full h-full object-cover cursor-pointer"
                                        onClick={() => toggleExpand(index)}
                                    />
                                </div>
                                <div className="p-4">
                                    <h6 className="mb-2 text-slate-800 text-[20px] font-kodchasan flex justify-center">
                                        {mascota.nombre}
                                    </h6>
                                    <h6 className="mb-2 text-slate-800 text-[17px] font-kodchasan">
                                        Dueño: {mascota.cliente ? `${mascota.cliente.nombre} ${mascota.cliente.apellidos}` : 'No disponible'}
                                    </h6>
                                    {expandedCard === index && (
                                        <div className="mt-4 text-slate-800 text-[15px] font-kodchasan">
                                            <p><strong>Raza:</strong> {mascota.raza}</p>
                                            <p><strong>Alergias:</strong> {mascota.alergias}</p>
                                            <p><strong>Enfermedades:</strong> {mascota.enfermedades}</p>
                                            <p><strong>Teléfono:</strong> {mascota.cliente ? mascota.cliente.telefono : 'No disponible'}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center items-center space-x-5">
                                    <img
                                        src={imgDelete}
                                        className="h-9 w-9 rounded-full cursor-pointer"
                                        alt="Delete"
                                        onClick={() => openDeleteModal(mascota)} // Pasa la mascota seleccionada
                                    />
                                    <img
                                        src={imgUpdate}
                                        className="h-9 w-9 rounded-full cursor-pointer"
                                        alt="Update"
                                        onClick={() => openUpdateModal(mascota)}
                                    />
                                    <img
                                        src={mas}
                                        className="h-9 w-9 rounded-full cursor-pointer"
                                        alt="Service"
                                        onClick={() => openServiceModal(mascota)} // Pasa la mascota seleccionada
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modales */}
            <BorrarMascotaModal
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
                idMascota={selectedMascota?.id_mascota || ''} // Pasa el id de la mascota al modal
                deletedMascota={selectedMascota || null} // Pasa la mascota completa
            />
            <ActualizarMascotaModal
                isOpen={isUpdateModalOpen}
                onClose={closeUpdateModal}
                selectedMascota={selectedMascota}
            />
            <AgregarServicioModal
                isOpen={isServiceModalOpen}
                onClose={closeServiceModal}
                idCliente={selectedMascota?.cliente?.id_cliente || ''}
                idMascota={selectedMascota?.id_mascota || ''}
            />
        </>
    );
}
