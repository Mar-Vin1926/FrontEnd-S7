import MenuLateral from "../components/MenuLateral";

const RealizarExamen = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />

      <div className="aplicacion__contenido">
        <main className="aplicacion__principal">
          <section className="aplicacion__informacion">
            <div className="card">
              <div className="card__content">
                <h3>Examen Disponible</h3>
                <p>Ejemplo de un examen listo para realizar:</p>
                <p>Pregunta 1: ¿Cuál es la capital de...?</p>
                <button className="card__button">Empezar Examen</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default RealizarExamen;