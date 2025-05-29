import MenuLateral from "../components/MenuLateral";

const VerNotasStudent = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />

      <div className="aplicacion__contenido">
        <main className="aplicacion__principal ver-notas-student__principal-con-fondo">
          <section className="aplicacion__informacion">
            <div className="card">
              <div className="card__content">
                <h3>Ver Mis Resultados</h3>
                <p>Ingresa tu nombre para ver tus notas:</p>
                <div>
                  <label>Tu Nombre:</label>
                  <input type="text" placeholder="Tu nombre completo" />
                </div>
                <button className="card__button">Buscar Notas</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default VerNotasStudent;