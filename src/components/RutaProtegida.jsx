import { Navigate } from 'react-router-dom';

function RutaProtegida({ children, rolRequerido }) {
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");

  if (!token || (rol !== rolRequerido && rol !== "admin")) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RutaProtegida;