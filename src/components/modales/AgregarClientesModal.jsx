import ImagModal from '../../assets/ImagClient.jpg';

export default function AgregarClientesModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-fondo rounded-lg shadow-lg w-[800px] h-[550px] flex">
                <div className="w-1/2 relative p-0 m-0">
                    <img
                        src={ImagModal}
                        alt="Imagen Modal"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center p-8">
                    <form className="w-[80%]">
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Apellidos"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Dirección"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 rounded-[70px] border-GrisBorde border-2 bg-white font-kodchasan text-texto placeholder-texto"
                                placeholder="Teléfono"
                            />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto font-kodchasan"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-mostrar rounded-[70px] border-AzulBorde border-2 text-texto font-kodchasan"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
