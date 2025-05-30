import MenuLateral from "../components/MenuLateral";
import MenuLateralStudent from "../components/MenuLateralStudent";


const VisualizarNotasTeacher = () => {
  const rol = localStorage.getItem("rol");
  return (
    <div className="aplicacion">
      {rol === "admin" ? <MenuLateral /> : <MenuLateralStudent />}

      <div className="aplicacion__contenido">
        
          <main className="aplicacion__principal">
            <section className="aplicacion__informacion">
              <div className="card">
                <div className="card__content">
                  <h3>Visualizar Resultados</h3>
                  <p>Lista de estudiantes y sus notas:</p>

                  <table>
                    <thead>
                      <tr className="table__header">
                        <th>Nombre del Estudiante</th>
                        <th>Nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Marvin Esteban</td>
                        <td className="n">5.0</td>
                      </tr>
                      <tr>
                        <td>Paola Murillo</td>
                        <td className="n">4.9</td>
                      </tr>
                      <tr>
                        <td>Kevin Olivella</td>
                        <td className="n">1.5</td>
                      </tr>
                      <tr>
                        <td>Carlitos</td>
                        <td className="n">4.9</td>
                      </tr>
                      {/* Agrega más filas según sea necesario */}
                    </tbody>
                  </table>

                </div>
              </div>
            </section>

          </main>
        </div>


      </div>
    
  );
};

export default VisualizarNotasTeacher;
