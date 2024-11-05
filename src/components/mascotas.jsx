import React, { useState } from 'react';
import logo3 from "../assets/logo3.png";
import imgDelete from "../assets/eliminar.png";
import imgUpdate from "../assets/actualizar.png";

export default function Mascotas() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">N
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
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primario dark:hover:text-black" aria-current="page">Clientes</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primario dark:hover:text-black">Mascotas</a>
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

            <div className="h-screen w-screen flex justify-center items-center">
                <div className="relative flex flex-col my-6 bg-primario shadow-sm border border-slate-200 rounded-[20px] pd-8 w-60 h-80">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="card-image" />
                        <div className="p-4">
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                Nombre:
                            </h6>
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                Dueño:
                            </h6>
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-5">
                        <img src={imgDelete} className="h-9 w-9 rounded-full" alt="Delete" />
                        <img src={imgUpdate} className="h-9 w-9 rounded-full" alt="Update" />
                    </div>
                </div>
            </div>
        </>
    );
}
