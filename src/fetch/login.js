export function autenticarUsuario(usuario, contrasena) {
  fetch('https://backend-veterinaria-ew45.onrender.com/auth/login', {
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
      return data; // Retorna los datos para manejar la respuesta en el componente que lo llame
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Usuario o contraseña incorrectos');
    });
}
