import { useNavigate, NavLink } from "react-router-dom";
import teacherImage from "../assets/Teacher.jpeg";
import studentImage from "../assets/student.jpeg";
import './MenuLateralStudent.css'; // Importar el CSS aunque esté vacío por ahora

const MenuLateralStudent = () => {
  const redireccion = useNavigate();
  const rol = localStorage.getItem("rol");

  const getImageByRole = () => {
    if (rol === "Teacher") return teacherImage;
    if (rol === "Student") return studentImage;
    return ""; // Fallback, aunque no debería ocurrir si este componente se usa correctamente
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
        src={getImageByRole()}
        alt={`Imagen del rol ${rol}`}
      />
      <nav className="aplicacion__menu-lateral-navegacion">
        {rol === "Teacher" && (
          <>
            <NavLink to="/crear-examen" className={navLinkClass}>
              Crear Examen
            </NavLink>
            <NavLink to="/visualizar-notas" className={navLinkClass}>
              Visualizar Resultados
            </NavLink>
          </>
        )}
        {rol === "Student" && (
          <>
            <NavLink to="/realizar-examen" className={navLinkClass}>
              Realizar Examen
            </NavLink>
            <NavLink to="/ver-notas" className={navLinkClass}>
              Ver Mis Resultados
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
};

export default MenuLateralStudent;
