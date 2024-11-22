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
    const [servicios, setServicios] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Llamada a la API para obtener las mascotas y agruparlas por cliente
    useEffect(() => {
        const loadClientes = async () => {
            const fetchedMascotas = await fetchMascotas();

            // Agrupamos las mascotas por cliente
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

            // Convertimos el objeto de clientes en un array
            setClientes(Object.values(clientesMap));
        };
        loadClientes();
    }, []);

    // Llamada a la API para obtener los servicios
    useEffect(() => {
        const fetchServicios = async () => {
            const data = await fetchTabla();
            if (Array.isArray(data)) {
                setServicios(data); // Asumimos que el API devuelve un array de objetos de servicios
            } else {
                console.error("Error: los datos obtenidos no son un array");
            }
        };

        fetchServicios();
    }, []);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openAddClientModal = () => {
        setIsAddClientModalOpen(true);
    };

    const closeAddClientModal = () => {
        setIsAddClientModalOpen(false);
    };

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const openDeleteClientModal = () => {
        setIsDeleteClientModalOpen(true);
    };

    const closeDeleteClientModal = () => {
        setIsDeleteClientModalOpen(false);
    };

    const openUpdateModal = () => {
        setIsUpdateModalOpen(true);
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
    };

    const openUpdateClientModal = () => {
        setIsUpdateClientModalOpen(true);
    };

    const closeUpdateClientModal = () => {
        setIsUpdateClientModalOpen(false);
    };

    const openServiceModal = () => {
        setIsServiceModalOpen(true);
    };

    const closeServiceModal = () => {
        setIsServiceModalOpen(false);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filtramos los clientes según la búsqueda
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
                    <div className="flex items-center space-x-4 ml-8 pr-4">
                        <p className="font-kodchasan text-texto text-[25px]">Clientes</p>
                        <input 
                            type="text" 
                            className="p-2 border rounded" 
                            placeholder="Buscar cliente..." 
                            value={searchQuery} 
                            onChange={handleSearch} 
                        />
                        <img src={mas} className="h-6 w-6 rounded-full cursor-pointer" alt="Add" onClick={() => setIsAddClientModalOpen(true)} />
                    </div>
                </div>
            </nav>

            <Sidebar />

            <div className="pt-[180px] flex justify-center items-start min-h-screen w-screen">
                <div className="relative w-[1200px]">
                    {filteredClientes.map(cliente => (
                        <div key={cliente.id_cliente} className="mb-6">
                            <div className="bg-acordeon rounded-[20px] p-5 shadow-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-kodchasan text-2xl text-texto">
                                            {cliente.nombre} {cliente.apellidos}
                                        </p>
                                        <p className="text-sm">Teléfono: {cliente.telefono}</p>
                                        <p className="text-sm">Dirección: {cliente.direccion}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img src={imgDelete} className="h-9 w-9 cursor-pointer hover:bg-red-100" alt="Delete" onClick={() => setIsDeleteClientModalOpen(true)} />
                                        <img src={imgUpdate} className="h-9 w-9 cursor-pointer hover:bg-blue-100" alt="Update" onClick={() => setIsUpdateClientModalOpen(true)} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                {cliente.mascotas.map(mascota => (
                                    <div key={mascota.id_mascota} className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-[15px] shadow-md">
                                        <img src={mascota.imagen} alt={mascota.nombre} className="w-full h-32 object-cover rounded-md" />
                                        <h3 className="text-xl font-semibold text-texto">{mascota.nombre}</h3>
                                        <p className="text-sm text-gray-600">Raza: {mascota.raza}</p>
                                        <p className="text-sm text-gray-600">Alergias: {mascota.alergias}</p>
                                        <p className="text-sm text-gray-600">Enfermedades: {mascota.enfermedades}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isAddClientModalOpen && <AgregarClientesModal onClose={() => setIsAddClientModalOpen(false)} />}
            {isDeleteClientModalOpen && <EliminarClienteModal onClose={() => setIsDeleteClientModalOpen(false)} />}
            {isUpdateClientModalOpen && <ActualizarClienteModal onClose={() => setIsUpdateClientModalOpen(false)} />}
            <AgregarMascotasClienteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <BorrarMascotaModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
            <ActualizarMascotaModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
            <AgregarServicioModal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} />
        </>
    );
}
