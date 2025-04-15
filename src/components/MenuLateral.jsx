import { alertaRedireccion } from "../helpers/funciones";
import { useNavigate } from "react-router-dom";

const MenuLateral = () => {
  let redireccion = useNavigate();
  const rol = localStorage.getItem("rol"); // Obtener el rol del usuario

  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("rol"); // Eliminar el rol al cerrar sesión
    alertaRedireccion("Cerrando sesión", "/", redireccion);
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">
        EvaluAPP <span className="aplicacion__menu-lateral-logo--resaltado"></span>
      </h1>
      <h2>Usuario: {localStorage.getItem("usuario")}</h2>
      <img
        className="aplicacion__menu-lateral-logo-imagen"
        src="/public/Fondo2.jpg"
        alt="Logo"
      />
      <nav className="aplicacion__menu-lateral-navegacion">
        {/* Funcionalidades según el rol */}
        {rol === "Teacher" && (
          <>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Crear Examen
            </a>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Visualizar Notas
            </a>
          </>
        )}
        {rol === "Student" && (
          <>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Realizar Examen
            </a>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Ver Mis Notas
            </a>
          </>
        )}
        <button
          onClick={cerrarSesion}
          type="button"
          className="aplicacion__menu-lateral-navegacion-item"
        >
          Cerrar sesión
        </button>
      </nav>
    </aside>
  );
};

export default MenuLateral;