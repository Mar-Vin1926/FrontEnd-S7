import './Home.css'
import MenuLateral from './components/MenuLateral'

const Home = () => {
  const rol = localStorage.getItem("rol"); // Obtener el rol del usuario

  if (!rol) {
    return <h1>No tienes acceso a esta página</h1>; // Manejo de error si no hay rol
  }

  return (
    <div className="aplicacion">
      <MenuLateral />
      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>
        <main className="aplicacion__principal">
          <section className="aplicacion__eslogan">
            <h2 className="aplicacion__eslogan-texto">
              <span></span>
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;