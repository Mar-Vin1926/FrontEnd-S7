import { alertaRedireccion } from "../helpers/funciones";
import { useNavigate } from "react-router-dom";
import adminImage from "../assets/admin.png";
import teacherImage from "../assets/Teacher.png";
import studentImage from "../assets/Student.png";

const MenuLateral = () => {
  let redireccion = useNavigate();
  const rol = localStorage.getItem("rol"); // Obtener el rol del usuario

  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("rol"); // Eliminar el rol al cerrar sesión
    alertaRedireccion("Cerrando sesión", "/", redireccion);
  }

  // Seleccionar la imagen según el rol
  const getImageByRole = () => {
    if (rol === "admin") return adminImage;
    if (rol === "Teacher") return teacherImage;
    if (rol === "Student") return studentImage;
    return ""; // Imagen por defecto si no hay rol
  };

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">
        EvaluAPP <span className="aplicacion__menu-lateral-logo--resaltado"></span>
      </h1>
      <h2>Usuario: {localStorage.getItem("usuario")}</h2>
      <img
        className="aplicacion__menu-lateral-logo-imagen"
        src={getImageByRole()}
        alt={`Imagen del rol ${rol}`}
      />
      <nav className="aplicacion__menu-lateral-navegacion">
        {(rol === "Teacher" || rol === "admin") && (
          <>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Crear Examen
            </a>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Visualizar Notas
            </a>
          </>
        )}
        {(rol === "Student" || rol === "admin") && (
          <>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Realizar Examen
            </a>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Ver Mis Notas
            </a>
          </>
        )}
        {rol === "admin" && (
          <>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Gestión de Usuarios
            </a>
            <a className="aplicacion__menu-lateral-navegacion-item" href="">
              Configuración
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