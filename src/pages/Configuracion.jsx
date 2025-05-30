import MenuLateral from "../components/MenuLateral";
import MenuLateralStudent from "../components/MenuLateralStudent";

const Configuracion = () => {
  const rol = localStorage.getItem("rol");
  return (
    <div className="aplicacion">
      {rol === "admin" ? <MenuLateral /> : <MenuLateralStudent />}

      <div className="aplicacion__contenido">
        <main className="aplicacion__principal">
          <section className="aplicacion__informacion">
            <div className="card">
              <div className="card__content">
                <h3>Configuración de la Aplicación</h3>
                <p>Ejemplo de opciones de configuración:</p>
                <ul>
                  <li>Cambiar tema</li>
                  <li>Notificaciones</li>
                  <li>Idioma</li>
                </ul>
                <button className="card__button">Guardar Cambios</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Configuracion;