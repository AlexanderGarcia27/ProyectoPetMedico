import React from 'react';
import logo1 from "../assets/logo1.jpg";

export default function Inicio() {
    return (
        <>
            <nav className="border-gray-200 fixed top-0 left-0 w-full z-50 bg-transparent pt-4">
                <div className="max-w-screen-xl flex items-center justify-between pl-4 flex-wrap">
                    <div className="flex items-center space-x-4 flex-grow">
                        <img src={logo1} className="h-16 w-16 rounded-full" alt="Flowbite Logo" />
                        <div className="flex flex-col items-start">
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-texto mb-1">PET</span>
                            <span className="text-3xl font-kodchasan font-bold leading-5 text-texto">MEDICO</span>
                        </div>
                    </div>
                    <div className="flex items-center w-40 sm:w-40 md:w-40 lg:w-40 relative">
                        <select className="p-2 pr-10 bg-transparent rounded-lg text-2xl text-texto font-KiwiMaru w-full appearance-none">
                            <option value="option1">Clientes</option>
                            <option value="option2">Mascotas</option>
                        </select>
                        <svg
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-texto pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>


                    <div className="flex w-full sm:w-[300px] md:w-[400px] lg:w-[500px] px-4 py-2 mt-2 sm:mt-0 rounded-[70px] bg-white shadow-md border border-[#AAAAAA]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192.904 192.904"
                            width="16px"
                            className="fill-gray-600 mr-3 rotate-90"
                        >
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                        <input type="text" className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                    </div>
                </div>
            </nav>
            <div className="h-screen w-screen flex justify-center items-center min-h-screen p-4">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-screen-lg">
                    <table className="w-full text-base text-center border-collapse border-Tborder">
                        <thead className="uppercase bg-Thead font-kodchasan text-texto text-1xl border-Tborder">
                            <tr>
                                <th scope="col" className="px-6 py-3 border border-Tborder">Cliente</th>
                                <th scope="col" className="px-6 py-3 border border-Tborder">Mascota</th>
                                <th scope="col" className="px-6 py-3 border border-Tborder">Descripción</th>
                                <th scope="col" className="px-6 py-3 border border-Tborder">Costo</th>
                                <th scope="col" className="px-6 py-3 border border-Tborder">Precio</th>
                            </tr>
                        </thead>
                        <tbody className="bg-Tbody text-black border-Tborder">
                            <tr>
                                <td className="px-6 py-4 border border-Tborder"></td>
                                <td className="px-6 py-4 border border-Tborder"></td>
                                <td className="px-6 py-4 border border-Tborder"></td>
                                <td className="px-6 py-4 border border-Tborder"></td>
                                <td className="px-6 py-4 border border-Tborder"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
