// validation/validarLogin.js
import Swal from 'sweetalert2';

export function validarUsuario(usuario) {
  // Verifica si el usuario es requerido y si cumple con los requisitos
  if (!usuario || usuario.trim().length === 0) {
    return "El usuario es requerido.";
  } else if (usuario.length < 6) {
    return "El usuario debe tener al menos 6 caracteres.";
  } else if (!/[A-Z]/.test(usuario)) {
    return "El usuario debe contener al menos una letra mayúscula.";
  }
  return "";
}

export function validarContrasena(contrasena) {
  // Solo requiere que la contraseña tenga al menos 6 caracteres
  if (!contrasena) {
    return "La contraseña es requerida.";
  } else if (contrasena.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }
  return "";
}

export function validarFormulario(usuario, contrasena) {
  const errorUsuario = validarUsuario(usuario);
  const errorContrasena = validarContrasena(contrasena);

  // Si hay errores, muestra SweetAlert con los errores
  if (errorUsuario || errorContrasena) {
    Swal.fire({
      title: 'Error en el inicio de sesióon',
      html: `<p>${errorUsuario}</p><p>${errorContrasena}</p>`,
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return false;
  }

  return true;
}
