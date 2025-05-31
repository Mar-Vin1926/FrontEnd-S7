import Login from '../pages/Login.jsx';
import Home from '../Home.jsx';
import CrearExamen from '../pages/CrearExamen';
import VisualizarNotasTeacher from '../pages/VisualizarNotasTeacher';
import RealizarExamen from '../pages/RealizarExamen';
import VerNotasStudent from '../pages/VerNotasStudent';
import GestionUsuarios from '../pages/GestionUsuarios';
import Configuracion from '../pages/Configuracion';
import RutaProtegida from '../components/RutaProtegida';
import LandingPage from '../pages/LandingPage';
import AsignarExamen from '../pages/AsignarExamen';
import { Navigate } from 'react-router-dom'; // <-- ¡Importamos LandingPage!

// Es importante que este 'enrutador' sea un array de objetos de configuración
// que luego se usará con React Router DOM en tu main.jsx (o index.js)
const enrutador = [
  {
    path: '/',
    element: <LandingPage />, // <-- Ahora la página de inicio es la LandingPage
  },
  {
    path: '/login', // Mantener la ruta de login separada
    element: <Login />,
  },

  // Pantallas principales por rol
  // Redirigen a Home, donde la lógica de renderizado condicional se maneja internamente
  {
    path: '/home', // Ruta general para Teacher y Admin después del login
    element: (
      <RutaProtegida rolesPermitidos={['Teacher', 'admin']}>
        <Home />
      </RutaProtegida>
    ),
  },
  {
    path: '/student', // Ruta específica para Student después del login
    element: (
      <RutaProtegida rolesPermitidos={['Student', 'admin']}>
        <Home /> {/* Student también irá a Home y Home renderizará lo suyo */}
      </RutaProtegida>
    ),
  },
  // La ruta '/admin' si se usa como una URL de navegación directa
  // si el admin siempre va a '/home' (como lo tienes en Login.jsx) esta ruta podría ser redundante
  // a menos que tengas un enlace directo a /admin en algún lugar
  {
    path: '/admin',
    element: (
      <RutaProtegida rolesPermitidos={['admin']}>
        <Home />
      </RutaProtegida>
    ),
  },

  // Rutas para las funciones específicas (Teacher + Admin)
  // Estas rutas se usan si cada una de estas funcionalidades tiene su propia URL directa.
  // Si estas funcionalidades se muestran DENTRO de Home.jsx, no necesitas rutas separadas aquí.
  // Pero si quieres que se puedan acceder directamente por URL (ej. /crear-examen), mantenlas.
  {
    path: '/crear-examen',
    element: (
      <RutaProtegida rolesPermitidos={['Teacher', 'admin']}>
        <CrearExamen />
      </RutaProtegida>
    ),
  },
  {
    path: '/asignar-examen/:examenId',
    element: (
      <RutaProtegida rolesPermitidos={['Teacher', 'admin']}>
        <AsignarExamen />
      </RutaProtegida>
    ),
  },
  {
    path: '/visualizar-notas',
    element: (
      <RutaProtegida rolesPermitidos={['Teacher', 'admin']}>
        <VisualizarNotasTeacher />
      </RutaProtegida>
    ),
  },

  // Rutas para las funciones específicas (Student + Admin)
  {
    path: '/realizar-examen',
    element: (
      <RutaProtegida rolesPermitidos={['Student', 'admin']}>
        <RealizarExamen />
      </RutaProtegida>
    ),
  },
  {
    path: '/ver-notas',
    element: (
      <RutaProtegida rolesPermitidos={['Student', 'admin']}>
        <VerNotasStudent />
      </RutaProtegida>
    ),
  },

  // Rutas para las funciones específicas (Solo Admin)
  {
    path: '/gestionar-usuarios',
    element: (
      <RutaProtegida rolesPermitidos={['admin']}>
        <GestionUsuarios />
      </RutaProtegida>
    ),
  },
  {
    path: '/configuraciones',
    element: (
      <RutaProtegida rolesPermitidos={['admin']}>
        <Configuracion />
      </RutaProtegida>
    ),
  },

  // Ruta de fallback para cualquier URL no definida.
  // Redirige al login o a la página de inicio (LandingPage)
  {
    path: '*',
    element: <Navigate to="/" replace />, // Redirige a la LandingPage por defecto
  },
];

export default enrutador;