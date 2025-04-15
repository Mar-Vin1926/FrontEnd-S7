import Login from '../pages/Login.jsx';
import Home from '../Home';
import RutaProtegida from '../components/RutaProtegida';

const enrutador = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <RutaProtegida rolRequerido="Teacher">
        <Home />
      </RutaProtegida>
    ),
  },
  {
    path: '/student',
    element: (
      <RutaProtegida rolRequerido="Student">
        <Home />
      </RutaProtegida>
    ),
  },
];

export default enrutador;