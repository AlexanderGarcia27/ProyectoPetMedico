import React, { useState, useEffect } from 'react';
import logo1 from "../assets/logo1.jpg";
import imgDelete from "../assets/eliminar.png";
import imgUpdate from "../assets/actualizar.png";
import mas from "../assets/simbolomas.png";
import AgregarClientesModal from "./modales/AgregarClientesModal.jsx";
import EliminarClienteModal from "./modales/EliminarClienteModal.jsx";
import ActualizarClienteModal from "./modales/ActualizarClienteModal.jsx";
import Sidebar from './SideMenu.jsx';
import AgregarMascotasClienteModal from './modales/AgregarMascotasClienteModal.jsx';
import BorrarMascotaModal from "./modales/BorrarMascotaModal.jsx";
import ActualizarMascotaModal from './modales/ActualizarMascotasModal.jsx';
import AgregarServicioModal from "./modales/AgregarServicioModal.jsx";
import { fetchMascotas } from '../validation/fetchMascotas';

export default function Clientes() {
    const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
    const [isDeleteClientModalOpen, setIsDeleteClientModalOpen] = useState(false);
    const [isUpdateClientModalOpen, setIsUpdateClientModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [openClientId, setOpenClientId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
        const loadClientes = async () => {
            const fetchedMascotas = await fetchMascotas();

            const clientesMap = fetchedMascotas.reduce((acc, mascota) => {
                const { cliente } = mascota;
                if (!acc[cliente.id_cliente]) {
                    acc[cliente.id_cliente] = {
                        ...cliente,
                        mascotas: []
                    };
                }
                acc[cliente.id_cliente].mascotas.push(mascota);
                return acc;
            }, {});

            setClientes(Object.values(clientesMap));
        };
        loadClientes();
    }, []);

    const toggleAccordion = (id_cliente) => {
        setOpenClientId(prevId => (prevId === id_cliente ? null : id_cliente));
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredClientes = clientes.filter(cliente =>
        `${cliente.nombre} ${cliente.apellidos}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <nav className="border-gray-200 fixed top-0 left-0 w-full z-50 bg-transparent pt-4">
                <div className="max-w-screen-xl flex items-center justify-between pl-4">
                    <div className="flex items-center space-x-4 flex-grow">
                        <img src={logo1} className="h-16 w-16 rounded-full" alt="Logo" />
                        <div className="flex flex-col items-start">
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-texto mb-1">PET</span>
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-left text-texto">MEDICO</span>
                        </div>
                    </div>
                    <div className="flex px-4 py-2 rounded-[70px] overflow-hidden w-[400px] font-sans bg-white shadow-md border border-[#AAAAAA] justify-end">
                        <input type="text" className="w-full outline-none bg-transparent text-gray-600 text-sm" onChange={handleSearch} placeholder="Buscar cliente..." />
                    </div>
                </div>
            </nav>

            <Sidebar />

            <div className="pt-[180px] flex justify-center items-start min-h-screen w-screen">
                <div className="relative w-[1200px]">
                    {filteredClientes.map(cliente => (
                        <div key={cliente.id_cliente} className="mb-6">
                            <div 
                                className="bg-acordeon rounded-[20px] p-5 shadow-md cursor-pointer"
                                onClick={() => toggleAccordion(cliente.id_cliente)}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-kodchasan text-2xl text-texto">
                                            {cliente.nombre} {cliente.apellidos}
                                        </p>
                                        <p className="text-sm">Teléfono: {cliente.telefono}</p>
                                        <p className="text-sm">Dirección: {cliente.direccion}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img 
                                            src={imgDelete} 
                                            className="h-9 w-9 cursor-pointer hover:bg-red-100 rounded-md p-1" 
                                            alt="Delete" 
                                            onClick={() => {
                                                setSelectedClient(cliente);
                                                setIsDeleteClientModalOpen(true);
                                            }} 
                                        />
                                        <img 
                                            src={imgUpdate} 
                                            className="h-9 w-9 cursor-pointer hover:bg-blue-100 rounded-md p-1" 
                                            alt="Update" 
                                            onClick={() => {
                                                setSelectedClient(cliente);
                                                setIsUpdateClientModalOpen(true);
                                            }} 
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Mostrar las mascotas solo si el acordeón está abierto */}
                            {openClientId === cliente.id_cliente && (
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    {cliente.mascotas.map(mascota => (
                                        <div key={mascota.id_mascota} className="p-4 rounded-[15px] shadow-md">
                                            <img 
                                                src={mascota.imagen} 
                                                alt={mascota.nombre} 
                                                className="w-full h-[150px] object-cover rounded-md" 
                                            />
                                            <h3 className="text-lg font-semibold text-texto mt-2">{mascota.nombre}</h3>
                                            <p className="text-sm text-gray-600">Raza: {mascota.raza}</p>
                                            <p className="text-sm text-gray-600">Alergias: {mascota.alergias}</p>
                                            <p className="text-sm text-gray-600">Enfermedades: {mascota.enfermedades}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modales con tamaño uniforme */}
            <AgregarClientesModal className="modal-uniform" isOpen={isAddClientModalOpen} onClose={() => setIsAddClientModalOpen(false)} />
            <EliminarClienteModal className="modal-uniform" cliente={selectedClient} isOpen={isDeleteClientModalOpen} onClose={() => setIsDeleteClientModalOpen(false)} />
            <ActualizarClienteModal className="modal-uniform" cliente={selectedClient} isOpen={isUpdateClientModalOpen} onClose={() => setIsUpdateClientModalOpen(false)} />
            <AgregarMascotasClienteModal className="modal-uniform" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <BorrarMascotaModal className="modal-uniform" isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
            <ActualizarMascotaModal className="modal-uniform" isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
            <AgregarServicioModal className="modal-uniform" isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} />
        </>
    );
}
 