import React, { useState } from 'react';
import logo3 from "../assets/logo3.png";
import { useNavigate } from 'react-router-dom';

export default function Inicio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate(); 
    const handleLogin = () => {
        navigate('/mascotas'); 
    };
    const clientes = () =>{
        navigate('/clientes')
    };

    return (
        <>
            <nav className="border-gray-200 bg-primario fixed top-0 left-0 w-full z-50 shadow-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between pl-4">
                    <div className="flex flex-col items-start">
                        <img src={logo3} className="h-20" alt="Flowbite Logo" />
                        <span className="text-2xl font-semibold whitespace-nowrap dark:text-black">PetMedico</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <select className="p-2 bg-white rounded-lg text-sm text-black">
                            <option value="option1">Clientes</option>
                            <option value="option2">Mascotas</option>
                        </select>
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-96 p-2 ps-10 text-sm rounded-lg bg-white dark:placeholder-black text-black"
                                placeholder="Search..."
                            />
                        </div>
                        <button
                            onClick={toggleMenu}
                            className="absolute right-4 inline-flex items-center justify-center p-2 bg-white text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-fondo dark:focus:ring-gray-600"
                            aria-controls="navbar-hamburger"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-24 right-4 bg-white border  rounded-lg shadow-lg dark:bg-fondo dark:border-gray-700">
                                <ul className="flex flex-col p-4 space-y-2">
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primario dark:hover:text-black" onClick={clientes}>Clientes</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primario dark:hover:text-black " onClick={handleLogin} >Mascotas</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primario dark:hover:text-black">Servicios</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primario dark:hover:text-black">Facturas</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div className="h-screen w-screen flex justify-center items-center min-h-screen bg-gray-50">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[1200px]">
                    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 border-collapse">
                        <thead className="text-xs uppercase  bg-primario text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3 border border-black 200">
                                    Cliente
                                </th>
                                <th scope="col" className="px-6 py-3 border border-black 200">
                                    Mascota
                                </th>
                                <th scope="col" className="px-6 py-3 border border-black 200">
                                    Descripcion
                                </th>
                                <th scope="col" className="px-6 py-3 border border-black 200">
                                    Costo
                                </th>
                                <th scope="col" className="px-6 py-3 border border-black 200">
                                    Precio
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-fondo">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-black"></th>
                                <td className="px-6 py-4 border border-black"></td>
                                <td className="px-6 py-4 border border-black"></td>
                                <td className="px-6 py-4 border border-black"></td>
                                <td className="px-6 py-4 border border-black"></td>
                            </tr>
                            <tr className="bg-fondo">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-black">
                                    
                                </th>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                            </tr>
                            <tr className="bg-fondo">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-black">
                                    
                                </th>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                                <td className="px-6 py-4 border border-black">
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
