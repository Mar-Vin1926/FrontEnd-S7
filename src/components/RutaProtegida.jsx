import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import BotonCerrarSesion from './BotonCerrarSesion';
import { alertaRedireccion } from '../helpers/funciones';

function RutaProtegida({ children, rolesPermitidos }) {
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");
  const location = useLocation();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("rol");
    alertaRedireccion("Cerrando sesión", "/", navigate);
  };

  if (!token || (rolesPermitidos && !rolesPermitidos.includes(rol))) {
    return <Navigate to="/" replace />;
  }

  // Mostrar botón en todas las rutas excepto en /realizar-examen
  const mostrarBotonCerrarSesion = location.pathname !== '/realizar-examen';

  return (
    <>
      {mostrarBotonCerrarSesion && <BotonCerrarSesion onCerrarSesion={cerrarSesion} />}
      {children}
    </>
  );
}

export default RutaProtegida;