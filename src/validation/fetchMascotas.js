// src/validation/fetchMascotas.js

export const fetchMascotas = async () => {
  try {
    // Obtener el token de almacenamiento local o de cookies
    const token = localStorage.getItem("token"); // Cambia según cómo almacenes el token

    const response = await fetch('/api/mascotas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Agrega el token en la cabecera de autorización
      },
      credentials: 'include', // Si es necesario para las cookies
    });

    if (!response.ok) {
      throw new Error(`Error al obtener las mascotas: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Los datos obtenidos no tienen el formato esperado (debería ser un arreglo).");
    }

    return data; // Retorna los datos correctamente
  } catch (error) {
    console.error("Error al obtener las mascotas:", error.message);
    return []; // Retorna un arreglo vacío en caso de error
  }
};
