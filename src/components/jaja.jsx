import React from "react";

export default function AgregarServicioModal({ isOpen, onClose }) {
    // No renderizar si el modal no está abierto
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="bg-ModalSer rounded-lg shadow-lg p-6 w-[400px]">
                <h2 className="text-xl text-TextElim font-kodchasan mb-4">
                    Estás añadiendo un nuevo servicio
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="text-texto font-kodchasan">Descripción:</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 rounded-[20px] bg-InputSer text-TextElim placeholder-TextElim"
                            placeholder="Descripción del servicio"
                        />
                    </div>
                    <div>
                        <label className="text-texto font-kodchasan">Costo:</label>
                        <input
                            type="number"
                            className="w-full px-3 py-2 rounded-[20px] bg-InputSer text-TextElim placeholder-TextElim"
                            placeholder="Costo del servicio"
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-BotCan rounded-[20px] text-TextElim font-kodchasan"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
