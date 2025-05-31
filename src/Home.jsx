import MenuLateral from "./components/MenuLateral";
import MenuLateralStudent from "./components/MenuLateralStudent";
import "./Home.css";

const Home = () => {
  const rol = localStorage.getItem("rol");

  return (
    <div className="aplicacion">
      {rol === "admin" ? <MenuLateral /> : <MenuLateralStudent />}
      <main className="aplicacion__principal">
        <section className="aplicacion__informacion">
          <div className="card">
            <div className="card__content">
              <div className="contBienvenido">
                <h3 className="StyBienvenido">Bienvenido</h3>
              </div>
              <p className="DescripcionBienvenido">Selecciona una opción del menú lateral para comenzar.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;