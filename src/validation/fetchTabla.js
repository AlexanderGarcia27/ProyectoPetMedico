// src/validation/fetchTabla.js

export const fetchTabla = async () => {
    try {
      // Obtener el token del almacenamiento local o de cookies
      const token = localStorage.getItem("token"); // Cambia según cómo almacenes el token
  
      // Realizar la petición a la API
      const response = await fetch('/api/servicios', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Agrega el token en la cabecera de autorización
        },
        credentials: 'include', // Incluye cookies si es necesario
      });
  
      // Validar si la respuesta es correcta
      if (!response.ok) {
        throw new Error(`Error al obtener los servicios: ${response.status} ${response.statusText}`);
      }
  
      // Convertir la respuesta a JSON
      const data = await response.json();
  
      // Verificar que los datos sean un arreglo
      if (!Array.isArray(data)) {
        throw new Error("Los datos obtenidos no tienen el formato esperado (debería ser un arreglo).");
      }
  
      // Retornar los datos
      return data;
    } catch (error) {
      // Manejar errores y loguearlos en la consola
      console.error("Error al obtener los servicios:", error.message);
      return []; // Retornar un arreglo vacío en caso de error
    }
  };
  