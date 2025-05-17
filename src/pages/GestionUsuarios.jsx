import MenuLateral from "../components/MenuLateral";

const GestionUsuarios = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />

      <div className="aplicacion__contenido">
        <main className="aplicacion__principal">
          <section className="aplicacion__informacion">
            <div className="card">
              <div className="card__content">
                <h3>Gestión de Usuarios</h3>
                <p>Ejemplo de opciones para gestionar usuarios:</p>
                <ul>
                  <li>Ver lista de usuarios</li>
                  <li>Crear nuevo usuario</li>
                  <li>Editar usuario</li>
                </ul>
                <button className="card__button">Ir a Gestión</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GestionUsuarios;