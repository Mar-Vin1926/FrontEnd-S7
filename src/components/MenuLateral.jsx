import { useNavigate, NavLink } from "react-router-dom";
import adminImage from "../assets/admin.jpg";
import teacherImage from "../assets/Teacher.jpeg";
import studentImage from "../assets/student.jpeg";
import './MenuLateral.css'; // Importar estilos para el menú de Admin

const MenuLateral = () => {
  const redireccion = useNavigate();
  const rol = localStorage.getItem("rol");

  const getImageByRole = () => {
    if (rol === "admin") return adminImage;
    if (rol === "Teacher") return teacherImage;
    if (rol === "Student") return studentImage;
    return "";
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "aplicacion__menu-lateral-navegacion-item activo"
      : "aplicacion__menu-lateral-navegacion-item";

  return (
    <aside className="aplicacion__menu-lateral">
      {/* Añadimos las burbujas */}
      <div className="bubble" style={{ top: '10%', left: '10%' }}></div>
      <div className="bubble" style={{ top: '30%', left: '30%' }}></div>
      <div className="bubble" style={{ top: '50%', left: '50%' }}></div>
      <div className="bubble" style={{ top: '70%', left: '70%' }}></div>
      <div className="bubble" style={{ top: '90%', left: '90%' }}></div>
      <div className="bubble" style={{ top: '20%', left: '20%' }}></div>
      <div className="bubble" style={{ top: '40%', left: '40%' }}></div>
      <div className="bubble" style={{ top: '60%', left: '60%' }}></div>
      <div className="bubble" style={{ top: '80%', left: '80%' }}></div>
      
      <h1 className="aplicacion__menu-lateral-logo">
        EvaluAPP <span className="aplicacion__menu-lateral-logo--resaltado"></span>
      </h1>
      <h2>Usuario: {localStorage.getItem("usuario")}</h2>
      <img
        className="aplicacion__menu-lateral-logo-imagen"
        src={adminImage}
        alt={`Imagen del rol ${rol}`}
      />
      <nav className="aplicacion__menu-lateral-navegacion">
        {/* Enlaces para Admin */}
        <NavLink to="/crear-examen" className={navLinkClass}>
          Crear Examen
        </NavLink>
        <NavLink to="/visualizar-notas" className={navLinkClass}>
          Visualizar Resultados
        </NavLink>
        <NavLink to="/realizar-examen" className={navLinkClass}>
          Realizar Examen
        </NavLink>
        <NavLink to="/ver-notas" className={navLinkClass}>
          Ver Resultados
        </NavLink>
        <NavLink to="/gestionar-usuarios" className={navLinkClass}>
          Gestión de Usuarios
        </NavLink>
        <NavLink to="/configuraciones" className={navLinkClass}>
          Configuración
        </NavLink>
      </nav>
    </aside>
  );
};

export default MenuLateral;
//       <h2>Usuario: {localStorage.getItem("usuario")}</h2>
//       <img
//         className="aplicacion__menu-lateral-logo-imagen"
//         src={getImageByRole()}
//         alt={`Imagen del rol ${rol}`}
//       />
//       <nav className="aplicacion__menu-lateral-navegacion">
//         {(rol === "Teacher" || rol === "admin") && (
//           <>
//             <button
//               onClick={() => onMenuItemClick('crearExamen')} // Llamamos a la función al hacer clic
//               className="aplicacion__menu-lateral-navegacion-item"
//             >
//               Crear Examen
//             </button>
//             <button
//               onClick={() => onMenuItemClick('visualizarNotas')} // Llamamos a la función al hacer clic
//               className="aplicacion__menu-lateral-navegacion-item"
//             >
//               Visualizar Notas
//             </button>
//           </>
//         )}
//         {(rol === "Student" || rol === "admin") && (
//           <>
//             <button
//               onClick={() => onMenuItemClick('realizarExamen')} // Llamamos a la función al hacer clic
//               className="aplicacion__menu-lateral-navegacion-item"
//             >
//               Realizar Examen
//             </button>
//             <button
//               onClick={() => onMenuItemClick('verMisNotas')} // Llamamos a la función al hacer clic
//               className="aplicacion__menu-lateral-navegacion-item"
//             >
//               Ver Mis Notas
//             </button>
//           </>
//         )}
//         {rol === "admin" && (
//           <>
//             <button
//               onClick={() => onMenuItemClick('gestionUsuarios')} // Llamamos a la función al hacer clic
//               className="aplicacion__menu-lateral-navegacion-item"
//             >
//               Gestión de Usuarios
//             </button>
//             <button
//               onClick={() => onMenuItemClick('configuracion')} // Llamamos a la función al hacer clic
//               className="aplicacion__menu-lateral-navegacion-item"
//             >
//               Configuración
//             </button>
//           </>
//         )}
//         <button
//           onClick={cerrarSesion}
//           type="button"
//           className="aplicacion__menu-lateral-navegacion-item"
//         >
//           Cerrar sesión
//         </button>
//       </nav>
//     </aside>
//   );
// };

// export default MenuLateral;