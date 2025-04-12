import { alertaRedireccion } from "../helpers/funciones"
import { useNavigate } from "react-router-dom"
const MenuLateral = () => {
  let redireccion = useNavigate()
  function cerrarSesion(){ 
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    alertaRedireccion("Cerrando sesion", "/", redireccion)
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">EvaluAPP <span className="aplicacion__menu-lateral-logo--resaltado"></span></h1>
      <h2>Usuario: { localStorage.getItem("usuario")}</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/public/Fondo2.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Inicio</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Evaluaciones</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Notas</a>
        <button onClick={cerrarSesion} type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral