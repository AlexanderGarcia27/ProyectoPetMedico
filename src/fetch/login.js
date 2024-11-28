import Swal from 'sweetalert2';

export function autenticarUsuario(usuario, contrasena) {
  // Realiza la petición al servidor para autenticar al usuario
  return fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Para enviar cookies con la solicitud si es necesario
    body: JSON.stringify({
      name: usuario,
      password: contrasena,
    }),
  })
    .then(response => {
      if (!response.ok) {
        // Si la respuesta no es exitosa (status != 200), lanzamos un error
        throw new Error('Usuario o contraseña incorrectos');
      }
      return response.json(); // Si la autenticación es correcta, procesamos la respuesta JSON
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
      // Si la autenticación es exitosa, retornamos los datos del servidor
      return data;
    })
    .catch(error => {
      console.error('Error de autenticación:', error);
      // Si hay un error, mostramos una alerta usando SweetAlert2
      Swal.fire({
        title: 'Error en el inicio de sesión',
        text: error.message || 'Ocurrió un error al intentar autenticarte.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      // Retornamos null o un valor que indique que la autenticación falló
      return null;
    });
}
