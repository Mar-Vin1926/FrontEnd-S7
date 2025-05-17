
import Login from '../pages/Login.jsx';
import Home from '../Home';
import CrearExamen from '../pages/CrearExamen';
import VisualizarNotasTeacher from '../pages/VisualizarNotasTeacher';
import RealizarExamen from '../pages/RealizarExamen';
import VerNotasStudent from '../pages/VerNotasStudent';
import GestionUsuarios from '../pages/GestionUsuarios';
import Configuracion from '../pages/Configuracion';
import RutaProtegida from '../components/RutaProtegida';

const enrutador = [
  {
    path: '/',
    element: <Login />,
  },

  // Pantallas principales por rol
  {
    path: '/home',
    element: (
      <RutaProtegida rolesPermitidos={['Teacher', 'admin']}>
        <Home />
      </RutaProtegida>
    ),
  },
  {
    path: '/student',
    element: (
      <RutaProtegida rolesPermitidos={['Student', 'admin']}>
        <Home />
      </RutaProtegida>
    ),
  },
  {
    path: '/admin',
    element: (
      <RutaProtegida rolesPermitidos={['admin']}>
        <Home />
      </RutaProtegida>
    ),
  },

  // Teacher + Admin
  {
    path: '/crear-examen',
    element: (
      <RutaProtegida rolesPermitidos={['Teacher', 'admin']}>
        <CrearExamen />
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

  // Student + Admin
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

  // Solo Admin
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
];

export default enrutador;



// import Login from '../pages/Login.jsx';
// import Home from '../Home';
// import RutaProtegida from '../components/RutaProtegida';

// const enrutador = [
//   {
//     path: '/',
//     element: <Login />,
//   },
//     {
//     path: '/home',
//     element: (
//       <RutaProtegida rolRequerido="Teacher">
//         <Home />
//       </RutaProtegida>
//     ),
//   },
//   {
//     path: '/student',
//     element: (
//       <RutaProtegida rolRequerido="Student">
//         <Home />
//       </RutaProtegida>
//     ),
//   },
//   {
//     path: '/admin',
//     element: (
//       <RutaProtegida rolRequerido="admin">
//         <Home /> 
//       </RutaProtegida>
//     ),
//   },
// ];

// export default enrutador;