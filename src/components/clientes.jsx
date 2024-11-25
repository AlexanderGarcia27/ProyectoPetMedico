import React, { useState, useEffect } from 'react';
import logo1 from "../assets/logo1.jpg";
import imgDelete from "../assets/eliminar.png";
import imgUpdate from "../assets/actualizar.png";
import mas from "../assets/simbolomas.png";
import AgregarMascotasModal from './modales/AgregarMascotasModal.jsx';
import BorrarMascotaModal from "./modales/BorrarMascotaModal.jsx";
import ActualizarMascotaModal from './modales/ActualizarMascotasModal.jsx';
import AgregarServicioModal from "./modales/AgregarServicioModal.jsx";
import EliminarClienteModal from "./modales/EliminarClienteModal.jsx";
import ActualizarClienteModal from './modales/ActualizarClienteModal.jsx';
import AgregarClientesModal from "./modales/AgregarClientesModal.jsx";
import Sidebar from './SideMenu.jsx';

export default function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [isOpen, setIsOpen] = useState(null); // Para identificar cuál acordeón está abierto
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
    const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
    const [isDeleteClientModalOpen, setIsDeleteClientModalOpen] = useState(false);
    const [isUpdateClientModalOpen, setIsUpdateClientModalOpen] = useState(false);
    const [selectedMascota, setSelectedMascota] = useState(null);
    const [expandedCard, setExpandedCard] = useState(null);
    const [selectedClienteId, setSelectedClienteId] = useState(null);



    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };
    const openDeleteModal = (mascota) => {
        setSelectedMascota(mascota); // Guarda la mascota seleccionada
        setIsDeleteModalOpen(true); // Abre el modal de eliminación
    };
    const closeDeleteModal = () => setIsDeleteModalOpen(false);
    const openUpdateModal = (mascota) => {
        setSelectedMascota(mascota); // Guarda toda la información de la mascota seleccionada, incluida la imagen
        setIsUpdateModalOpen(true); // Abre el modal
    };
    const closeUpdateModal = () => setIsUpdateModalOpen(false);
    const openServiceModal = (mascota) => {
        setSelectedMascota(mascota); // Guarda la mascota seleccionada
        setIsServiceModalOpen(true);
    };
    const closeServiceModal = () => setIsServiceModalOpen(false);
    const openModal = (id_cliente) => {
        setSelectedClienteId(id_cliente);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openAddClientModal = () => {
        setIsAddClientModalOpen(true);
    }
    const closeAddClientModal = () => {
        setIsAddClientModalOpen(false)
    }
    const openDeleteClientModal = () => {
        setIsDeleteClientModalOpen(true);
    };
    const closeDeleteClientModal = () => {
        setIsDeleteClientModalOpen(false);
    };
    const openUpdateClientModal = () => {
        setIsUpdateClientModalOpen(true);
    };
    const closeUpdateClientModal = () => {
        setIsUpdateClientModalOpen(false);
    };

    // Obtener datos de clientes al cargar el componente
    useEffect(() => {
        fetch("/api/clientes")
            .then((response) => response.json())
            .then((data) => {
                setClientes(data);
            })
            .catch((error) => {
                console.error("Error al obtener los clientes:", error);
            });
    }, []);

    const toggleAccordion = (id) => {
        setIsOpen(isOpen === id ? null : id); // Abre/cierra el acordeón correspondiente
    };
    return (
        <>
            <nav className="border-gray-200 fixed top-0 left-0 w-full z-50 bg-fondo pt-4">
                <div className="max-w-screen-xl flex items-center justify-between pl-4">
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
                        <input type="text" className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                    </div>
                    <div className="flex items-center space-x-4 ml-8 pr-4">
                        <p className="font-kodchasan text-texto text-[25px]">Clientes</p>
                        <img src={mas} className="h-6 w-6 rounded-full cursor-pointer" alt="Add" onClick={() => setIsAddClientModalOpen(true)} />
                    </div>
                </div>
            </nav>
            <Sidebar />
            <div className="pt-[180px] flex justify-center items-start min-h-screen w-screen">
                <div className="relative w-[1200px]">
                    {clientes.map((cliente) => (
                        <div key={cliente.id_cliente} className="mb-4">
                            <h2>
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 bg-acordeon rounded-[20px]`}
                                    onClick={() => toggleAccordion(cliente.id_cliente)}
                                    aria-expanded={isOpen === cliente.id_cliente}
                                >
                                    <span className="flex items-center">
                                        <img src={logo1} alt="Usuario" className="h-16 w-16 rounded-full" />
                                        <div className="flex flex-col ml-2">
                                            <span className='font-kodchasan text-2xl'>{`${cliente.nombre} ${cliente.apellidos}`}</span>
                                            {isOpen === cliente.id_cliente && (
                                                <>
                                                    <span className='text-sm'>Teléfono: {cliente.telefono}</span>
                                                    <span className='text-sm'>Dirección: {cliente.direccion}</span>
                                                </>
                                            )}
                                        </div>
                                    </span>
                                    {isOpen === cliente.id_cliente && (
                                        <div className="flex items-center space-x-1 ml-2">
                                            <img src={imgDelete} className="h-9 w-9 rounded-full" alt="Delete " onClick={() => setIsDeleteClientModalOpen(true)} />
                                            <img src={imgUpdate} className="h-9 w-9 rounded-full" alt="Update" onClick={() => setIsUpdateClientModalOpen(true)} />
                                        </div>
                                    )}
                                    <svg data-accordion-icon className={`w-6 h-6 transition-transform ${isOpen === cliente.id_cliente ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            {isOpen === cliente.id_cliente && (
                                <div className="p-5 border border-t-0 border-gray-200 bg-mostrar rounded-[20px] overflow-y-auto max-h-[500px]">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <p className="font-kodchasan text-texto text-[30px]">Mascotas</p>
                                        <img
                                            src={mas}
                                            className="h-6 w-6 rounded-full cursor-pointer"
                                            alt="Add"
                                            onClick={() => openModal(cliente.id_cliente)}
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {cliente.mascota.map((mascota) => (
                                            <div key={mascota.id_mascota} className={`flex flex-col justify-center mx-6 my-6 bg-primario shadow-sm border border-slate-200 rounded-[20px] p-6 w-60 ${expandedCard === mascota ? 'h-auto' : 'h-[400px]'} transition-all duration-300`}>
                                                <img src={mascota.imagen} alt="Pet" className="object-cover h-56 rounded-md cursor-pointer" onClick={() => toggleExpand(mascota)} />
                                                <div className="p-4">
                                                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">Nombre: {mascota.nombre}</h6>
                                                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">Raza: {mascota.raza}</h6>
                                                    {expandedCard === mascota && (
                                                        <div className="mt-4 text-slate-800 text-[15px] font-kodchasan">
                                                            <p><strong>Alergias:</strong> {mascota.alergias}</p>
                                                            <p><strong>Enfermedades:</strong> {mascota.enfermedades}</p>
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
                            )}
                        </div>
                    ))}
                </div>
            </div>
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
            <AgregarMascotasModal
                isOpen={isModalOpen}
                onClose={closeModal}
                idCliente={selectedClienteId}
            />
            <ActualizarClienteModal isOpen={isUpdateClientModalOpen} onClose={closeUpdateClientModal} />
            <EliminarClienteModal isOpen={isDeleteClientModalOpen} onClose={closeDeleteClientModal} />
            <AgregarClientesModal isOpen={isAddClientModalOpen} onClose={closeAddClientModal} />
            <AgregarServicioModal
                isOpen={isServiceModalOpen}
                onClose={closeServiceModal}
                idCliente={selectedMascota?.cliente?.id_cliente || ''}
                idMascota={selectedMascota?.id_mascota || ''}
            />
        </>
    );
}
