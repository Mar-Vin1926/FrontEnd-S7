import MenuLateral from "./components/MenuLateral";
import "./Home.css";

const Home = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />
        <main className="aplicacion__principal">
          <section className="aplicacion__informacion">
            <div className="card">
              <div className="card__content">
                <h3>Bienvenido</h3>
                <p>Selecciona una opción del menú lateral para comenzar.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
};

export default Home;



// import './Home.css'
// import MenuLateral from './components/MenuLateral'
// import { useState } from 'react';

// const Home = () => {
//   const rol = localStorage.getItem("rol");
//   const [selectedMenu, setSelectedMenu] = useState(null); // Estado para la opción ক্লিকada

//   const handleMenuItemClick = (menuItem) => {
//     setSelectedMenu(menuItem);
//   };

//   if (!rol) {
//     return <h1>No tienes acceso a esta página</h1>;
//   }

//   return (
//     <div className="aplicacion">
//       <MenuLateral onMenuItemClick={handleMenuItemClick} /> {/* Pasamos la función como prop */}
//       <div className="aplicacion__contenido">
//         <div className="aplicacion__contenido-fondo"></div>
//         <main className="aplicacion__principal">
//           <section className="aplicacion__informacion">
//             {selectedMenu === 'crearExamen' && (
//               <div className="card">
//                 <div className="card__content">
//                   <h3>Crear Nuevo Examen</h3>
//                   <p>Formulario de ejemplo para crear un nuevo examen:</p>
//                   <div>
//                     <label>Título del Examen:</label>
//                     <input type="text" placeholder="Ingresa el título" />
//                   </div>
//                   <div>
//                     <label>Número de Preguntas:</label>
//                     <input type="number" placeholder="Ej: 10" />
//                   </div>
//                   <button className="card__button">Crear</button>
//                 </div>
//               </div>
//             )}

//             {selectedMenu === 'visualizarNotas' && (
//               <div className="card">
//                 <div className="card__content">
//                   <h3>Lista de Notas de Estudiantes</h3>
//                   <p>Ejemplo de visualización de notas:</p>
//                   <ul>
//                     <li>Estudiante 1: 8.5</li>
//                     <li>Estudiante 2: 9.2</li>
//                     <li>Estudiante 3: 7.8</li>
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {selectedMenu === 'realizarExamen' && (
//               <div className="card">
//                 <div className="card__content">
//                   <h3>Examen Disponible</h3>
//                   <p>Ejemplo de un examen listo para realizar:</p>
//                   <p>Pregunta 1: ¿Cuál es la capital de...?</p>
//                   <button className="card__button">Empezar Examen</button>
//                 </div>
//               </div>
//             )}

//             {selectedMenu === 'verMisNotas' && (
//               <div className="card">
//                 <div className="card__content">
//                   <h3>Ver Mis Notas</h3>
//                   <p>Ingresa tu nombre para ver tus notas:</p>
//                   <div>
//                     <label>Tu Nombre:</label>
//                     <input type="text" placeholder="Tu nombre completo" />
//                   </div>
//                   <button className="card__button">Buscar Notas</button>
//                   {/* Aquí podríamos simular la aparición de las notas */}
//                 </div>
//               </div>
//             )}

//             {selectedMenu === 'gestionUsuarios' && (
//               <div className="card">
//                 <div className="card__content">
//                   <h3>Gestión de Usuarios</h3>
//                   <p>Ejemplo de opciones para gestionar usuarios:</p>
//                   <ul>
//                     <li>Ver lista de usuarios</li>
//                     <li>Crear nuevo usuario</li>
//                     <li>Editar usuario</li>
//                   </ul>
//                   <button className="card__button">Ir a Gestión</button>
//                 </div>
//               </div>
//             )}

//             {selectedMenu === 'configuracion' && (
//               <div className="card">
//                 <div className="card__content">
//                   <h3>Configuración de la Aplicación</h3>
//                   <p>Ejemplo de opciones de configuración:</p>
//                   <ul>
//                     <li>Cambiar tema</li>
//                     <li>Notificaciones</li>
//                     <li>Idioma</li>
//                   </ul>
//                   <button className="card__button">Ir a Configuración</button>
//                 </div>
//               </div>
//             )}

//             {/* Si no se ha seleccionado ninguna opción, o para el estado inicial */}
//             {!selectedMenu && (
//               <div className="cards">
//                 {/* Aquí podríamos mostrar un mensaje de bienvenida o instrucciones */}
//                 <div className="card">
//                   <div className="card__content">
//                     <h3>Bienvenido</h3>
//                     <p>Selecciona una opción del menú lateral para ver el contenido.</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;