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
    const [selectedClienteId, setSelectedClienteId] = useState(null);

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

    const openServiceModal = (clienteId, mascota) => {
        setSelectedClienteId(clienteId); // Guarda el ID del cliente seleccionado
        setSelectedMascota(mascota); // Guarda la mascota seleccionada
        setIsServiceModalOpen(true); // Abre el modal de servicio
    };

    const closeServiceModal = () => {
        setIsServiceModalOpen(false);
        setSelectedMascota(null);
        setSelectedClienteId(null);
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
                                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500 bg-acordeon rounded-[20px]"
                                    onClick={() => toggleAccordion(cliente.id_cliente)}
                                    aria-expanded={isOpen === cliente.id_cliente}
                                >
                                    <span className="flex items-center">
                                        <img src={logo1} alt="Usuario" className="h-16 w-16 rounded-full" />
                                        <div className="flex flex-col ml-2">
                                            <span className="font-kodchasan text-2xl">{`${cliente.nombre} ${cliente.apellidos}`}</span>
                                        </div>
                                    </span>
                                </button>
                            </h2>
                            {isOpen === cliente.id_cliente && (
                                <div className="p-5 border border-t-0 border-gray-200 bg-mostrar rounded-[20px] overflow-y-auto max-h-[500px]">
                                    <div className="flex flex-wrap gap-4">
                                        {cliente.mascota.map((mascota) => (
                                            <div key={mascota.id_mascota} className="flex flex-col justify-center bg-primario shadow-sm border border-slate-200 rounded-[20px] p-6 w-60">
                                                <img src={mascota.imagen} alt="Pet" className="object-cover h-56 rounded-md cursor-pointer" />
                                                <h6 className="text-xl font-semibold">Nombre: {mascota.nombre}</h6>
                                                <h6 className="text-xl font-semibold">Raza: {mascota.raza}</h6>
                                                <div className="flex justify-center space-x-5">
                                                    <img
                                                        src={mas}
                                                        className="h-9 w-9 rounded-full cursor-pointer"
                                                        alt="Service"
                                                        onClick={() => openServiceModal(cliente.id_cliente, mascota)}
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
            <AgregarServicioModal
                isOpen={isServiceModalOpen}
                onClose={closeServiceModal}
                idCliente={selectedClienteId}
                idMascota={selectedMascota?.id_mascota}
            />
        </>
    );
}
