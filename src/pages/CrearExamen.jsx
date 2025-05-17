import MenuLateral from "../components/MenuLateral";

const CrearExamen = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />

      <div className="aplicacion__contenido">
        

        <main className="aplicacion__principal">
          <section className="aplicacion__informacion">
            <div className="card">
              <div className="card__content">
                <h3>Crear Nuevo Examen</h3>
                <p>Formulario de ejemplo para crear un nuevo examen:</p>

                <div>
                  <label>Título del Examen:</label>
                  <input type="text" placeholder="Ingresa el título" />
                </div>

                <div>
                  <label>Número de Preguntas:</label>
                  <input type="number" placeholder="Ej: 10" />
                </div>

                <button className="card__button">Crear</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CrearExamen;
