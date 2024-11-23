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

    useEffect(() => {
        const fetchDatosMascotas = async () => {
            const mascotasData = await fetchMascotas();
            setMascotas(mascotasData);
        };
        fetchDatosMascotas();
    }, []);

    const openDeleteModal = (mascota) => {
        setSelectedMascota(mascota);
        setIsDeleteModalOpen(true);
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
            {/* Navbar */}
            <nav className="border-gray-200 fixed top-0 left-0 w-full z-50 bg-fondo pt-4">
                <div className="max-w-screen-xl flex items-center justify-between pl-4">
                    <div className="flex items-center space-x-4 flex-grow">
                        <img src={logo1} className="h-16 w-16 rounded-full" alt="Flowbite Logo" />
                        <div className="flex flex-col items-start">
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-texto mb-1">PET</span>
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-left text-texto">MEDICO</span>
                        </div>
                    </div>
                </div>
            </nav>
            <Sidebar />
            <div className="pt-[120px]">
                <div className="flex justify-center items-center">
                    <div className="flex flex-wrap justify-center gap-6">
                        {mascotas.map((mascota, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center mx-6 my-6 bg-primario shadow-sm border border-slate-200 rounded-[20px] p-6 w-60 ${
                                    expandedCard === index ? 'h-auto' : 'h-[400px]'
                                } transition-all duration-300`}
                            >
                                <div className="relative h-[200px] m-2.5 overflow-hidden text-white rounded-md">
                                    <img
                                        src={mascota.imagen || "https://defaultimage.url"}
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
                                </div>
                                <div className="flex justify-center items-center space-x-5">
                                    <img
                                        src={imgDelete}
                                        className="h-9 w-9 rounded-full cursor-pointer"
                                        alt="Delete"
                                        onClick={() => openDeleteModal(mascota)}
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
                                        alt="Add Service"
                                        onClick={() => openServiceModal(mascota)}
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
                idMascota={selectedMascota?.id_mascota}
                onDeleteSuccess={() => {
                    setMascotas((prevMascotas) =>
                        prevMascotas.filter((mascota) => mascota.id_mascota !== selectedMascota?.id_mascota)
                    );
                }}
            />
            <ActualizarMascotaModal
                isOpen={isUpdateModalOpen}
                onClose={closeUpdateModal}
                mascota={selectedMascota}
            />
            <AgregarServicioModal
                isOpen={isServiceModalOpen}
                onClose={closeServiceModal}
                mascota={selectedMascota}
            />
        </>
    );
}
