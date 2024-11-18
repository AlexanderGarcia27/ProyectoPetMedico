import React, { useState, useEffect } from 'react';
import logo1 from "../assets/logo1.jpg";
import patita from "../assets/Patita.png";
import client from "../assets/client.png";
import serv from "../assets/serv.png";
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ onSidebarToggle }) {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (event.clientX < 50) {
                setIsVisible(true);
                onSidebarToggle(true);
            } else if (event.clientX > 200) {
                setIsVisible(false);
                onSidebarToggle(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [onSidebarToggle]);

    return (
        <div
            className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'} bg-white shadow-lg w-64`}>
            <div className="flex items-center justify-center space-x-4 flex-grow mt-6">
                <img src={logo1} className="h-16 w-16 rounded-full" alt="Flowbite Logo" />
                <div className="flex flex-col items-start">
                    <span className="text-3xl font-kodchasan font-bold leading-5 text-texto mb-1">PET</span>
                    <span className="text-3xl font-kodchasan font-bold leading-5 text-texto">MEDICO</span>
                </div>
            </div>
            <ul className="p-8">
                <li className="mb-4 cursor-pointer text-[25px] font-kodchasan text-texto flex items-center justify-center" onClick={() => navigate('/inicio')}>
                    <img src={client} alt="Clientes" className="h-8 w-8 mr-4" />
                    Inicio
                </li>
                <li className="mb-4 cursor-pointer text-[25px] font-kodchasan text-texto flex items-center justify-center" onClick={() => navigate('/clientes')}>
                    <img src={client} alt="Clientes" className="h-8 w-8 mr-4" />
                    Clientes
                </li>
                <li className="mb-4 cursor-pointer text-[25px] font-kodchasan text-texto flex items-center justify-center" onClick={() => navigate('/mascotas')}>
                    <img src={patita} alt="Mascotas" className="h-8 w-8 mr-4" />
                    Mascotas
                </li>
                <li className="mb-4 cursor-pointer text-[25px] font-kodchasan text-texto flex items-center justify-center" onClick={() => navigate('/servicios')}>
                    <img src={serv} alt="Servicios" className="h-8 w-8 mr-4" />
                    Servicios
                </li>
            </ul>
        </div>
    );
}

