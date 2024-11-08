export function autenticarUsuario(usuario, contrasena) {
  return fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: usuario,
      password: contrasena,
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
      return data; // Ahora retorna los datos correctamente
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Usuario o contraseña incorrectos');
      return null; // Retorna null en caso de error
    });
}
