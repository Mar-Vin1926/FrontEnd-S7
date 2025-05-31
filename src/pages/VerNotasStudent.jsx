import MenuLateral from "../components/MenuLateral";
import MenuLateralStudent from "../components/MenuLateralStudent";
import './VerNotasStudent.css'; // <-- AGREGADO: Importación del CSS
const VerNotasStudent = () => {
  const rol = localStorage.getItem("rol");
  return (
    <div className="aplicacion">
      {rol === "admin" ? <MenuLateral /> : <MenuLateralStudent />}

      <div className="aplicacion__contenido">
        <main className="aplicacion__principal">
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