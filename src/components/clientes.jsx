import React, { useState } from 'react';
import logo1 from "../assets/logo1.jpg";
import imgDelete from "../assets/eliminar.png";
import imgUpdate from "../assets/actualizar.png";

export default function Clientes() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="border-gray-200 fixed top-0 left-0 w-full z-50 bg-transparent pt-4">
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
                </div>
            </nav>
            <div className="flex justify-center items-center h-screen w-screen mt-0">
                <div className="relative">
                    <div id="accordion-open" data-accordion="open" className="w-[1200px]">
                        <h2 id="accordion-open-heading-1">
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 bg-acordeon rounded-[20px]`}
                                onClick={toggleAccordion}
                                aria-expanded={isOpen}
                                aria-controls="accordion-open-body-1"
                            >
                                <span className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <img src={logo1} alt="Usuario" className="h-16 w-16 rounded-full" />
                                        <div className="flex flex-col ml-2"> {/* Añadido ml-2 para espacio reducido */}
                                            <span className='font-kodchasan'>NOMBRE DEL USUARIO</span>
                                            <span className='items-start text-sm'>Teléfono: 71717177117</span>
                                            <span className='text-sm'>Dirección: 235263273</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1 ml-2">
                                        <img src={imgDelete} className="h-9 w-9 rounded-full" alt="Delete" />
                                        <img src={imgUpdate} className="h-9 w-9 rounded-full" alt="Update" />
                                    </div>
                                </span>
                                <svg data-accordion-icon className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>

                        {isOpen && (
                            <div id="accordion-open-body-1" className="p-5 border border-t-0 border-gray-200 bg-mostrar rounded-[20px]">
                                <p className="font-kodchasan text-texto text-[30px]">
                                    Mascotas
                                </p>
                                <div className="flex justify-center items-center mt-4">
                                    <div className="relative flex justify-items-center flex-col my-6 bg-primario shadow-sm border border-slate-200 rounded-[20px] p-4 w-60 h-64">
                                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                            <img src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="card-image" className=" flex justify-center h-20 w-20" /> {/* Añadir object-cover para que la imagen se ajuste */}
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
