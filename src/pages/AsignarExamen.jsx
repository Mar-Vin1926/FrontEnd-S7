import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AsignarExamen.css';

const AsignarExamen = () => {
  const { examenId } = useParams();
  const navigate = useNavigate();
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiantesSeleccionados, setEstudiantesSeleccionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [examen, setExamen] = useState(null);
  const [esModoOffline, setEsModoOffline] = useState(false);
  const [modoSeleccionOfflineActivo, setModoSeleccionOfflineActivo] = useState(false);
  const [estudiantesDisponiblesOffline, setEstudiantesDisponiblesOffline] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const examenesGuardados = JSON.parse(localStorage.getItem('examenesTemporales') || '[]');
        const examenLocal = examenesGuardados.find(e => e._id === examenId);
        
        if (examenLocal) {
          setExamen(examenLocal);
          setEsModoOffline(true);
          const sampleOfflineStudents = [
            { _id: 'offline_marvin', nombre: 'Marvin', apellido: 'Esteban', email: 'marvin.offline@example.com' },
            { _id: 'offline_paola', nombre: 'Paola', apellido: 'Murillo', email: 'paola.offline@example.com' },
            { _id: 'offline_kevin', nombre: 'Kevin', apellido: 'Olivella', email: 'kevin.offline@example.com' },
            { _id: 'offline_carlitos', nombre: 'Carlitos', apellido: '', email: 'carlitos.offline@example.com' },
            { _id: 'offline_Samanta', nombre: 'Samanta', apellido: 'Giraldo', email: 'samanta.offline@example.com' },
            { _id: 'offline_Esteban', nombre: 'Esteban', apellido: 'Murillo', email: 'Esteban.offline@example.com' },
            { _id: 'offline_Tania', nombre: 'Tania', apellido: 'Murillo', email: 'Esteban.offline@example.com' },

          ];
          setEstudiantesDisponiblesOffline(sampleOfflineStudents);
          setLoading(false);
          return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No se encontró el token de autenticación');
        }
        
        const examenResponse = await fetch(`http://localhost:3000/examenes/${examenId}`, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!examenResponse.ok) {
          throw new Error('Error al cargar la información del examen');
        }
        
        const examenData = await examenResponse.json();
        setExamen(examenData);
        
        await cargarEstudiantes(token);
        
      } catch (err) {
        console.error('Error:', err);
        setError('Error al cargar los datos. ' + (esModoOffline ? 'Estás en modo sin conexión.' : 'Por favor, verifica tu conexión.'));
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, [examenId]);

  const cargarEstudiantes = async (token) => {
    try {
      const estudiantesResponse = await fetch('http://localhost:3000/estudiantes', {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!estudiantesResponse.ok) {
        throw new Error('Error al cargar los estudiantes');
      }
      
      const estudiantesData = await estudiantesResponse.json();
      setEstudiantes(estudiantesData);
    } catch (err) {
      console.error('Error al cargar estudiantes:', err);
      setError('No se pudieron cargar los estudiantes. ' + (esModoOffline ? 'Estás en modo sin conexión.' : 'Por favor, verifica tu conexión.'));
    }
  };

  const handleSeleccionarEstudiante = (estudianteId) => {
    setEstudiantesSeleccionados(prev => 
      prev.includes(estudianteId)
        ? prev.filter(id => id !== estudianteId)
        : [...prev, estudianteId]
    );
  };

  const handleAsignarExamen = async () => {
    if (esModoOffline) {
      if (!modoSeleccionOfflineActivo) {
        setModoSeleccionOfflineActivo(true);
        return; // Mostrar lista, no guardar aún
      }
      // Modo offline, lista activa, proceder a guardar
      if (estudiantesSeleccionados.length === 0) {
        alert('Por favor, selecciona al menos un estudiante de la lista offline.');
        return;
      }
      const asignaciones = JSON.parse(localStorage.getItem('asignacionesPendientes') || '[]');
      asignaciones.push({
        examenId,
        estudiantes: estudiantesSeleccionados,
        fecha: new Date().toISOString()
      });
      localStorage.setItem('asignacionesPendientes', JSON.stringify(asignaciones));
      alert('✅ Asignación guardada localmente. Se sincronizará cuando haya conexión.');
      navigate('/home');
      return;
    }

    if (estudiantesSeleccionados.length === 0) {
      alert('Por favor, selecciona al menos un estudiante');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `http://localhost:3000/examenes/${examenId}/asignar`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ estudiantes: estudiantesSeleccionados })
        }
      );

      if (!response.ok) {
        throw new Error('Error al asignar el examen');
      }

      alert('Examen asignado correctamente a los estudiantes seleccionados');
      navigate('/home');
      
    } catch (error) {
      console.error('Error al asignar el examen:', error);
      setError('Error al asignar el examen. ' + (esModoOffline ? 'Estás en modo sin conexión.' : 'Por favor, inténtalo de nuevo.'));
    }
  };

  if (loading) {
    return <div className="cargando">Cargando datos del examen y estudiantes...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => navigate(-1)} className="boton-volver">
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="asignar-examen">
      {esModoOffline && (
        <div className="aviso-offline">
          ⚠️ Estás en modo sin conexión. Los cambios se guardarán localmente.
        </div>
      )}
      
      <h2>Asignar Examen: {examen?.titulo || 'Cargando...'}</h2>
      <p className="descripcion-examen">{examen?.descripcion || ''}</p>
      
      <div className="estudiantes-contenedor">
        <h3>Selecciona los estudiantes:</h3>
        
        {esModoOffline ? (
          modoSeleccionOfflineActivo ? (
            <div className="estudiantes-lista">
              {estudiantesDisponiblesOffline.length > 0 ? (
                estudiantesDisponiblesOffline.map(estudiante => (
                  <div key={estudiante._id} className="estudiante-item">
                    <input
                      type="checkbox"
                      id={`estudiante-${estudiante._id}`}
                      checked={estudiantesSeleccionados.includes(estudiante._id)}
                      onChange={() => handleSeleccionarEstudiante(estudiante._id)}
                    />
                    <label htmlFor={`estudiante-${estudiante._id}`}>
                      {estudiante.nombre} {estudiante.apellido} - {estudiante.email}
                    </label>
                  </div>
                ))
              ) : (
                <p>No hay estudiantes de muestra configurados para el modo offline.</p>
              )}
            </div>
          ) : (
            <div className="aviso-modo-offline-seleccion">
              <p>Estás asignando este examen en modo offline.</p>
              <p>Haz clic en "Guardar Localmente" abajo para seleccionar estudiantes (de una lista de muestra) y confirmar la asignación local.</p>
            </div>
          )
        ) : (
          <div className="estudiantes-lista">
            {estudiantes.length > 0 ? (
              estudiantes.map(estudiante => (
                <div key={estudiante._id} className="estudiante-item">
                  <input
                    type="checkbox"
                    id={`estudiante-${estudiante._id}`}
                    checked={estudiantesSeleccionados.includes(estudiante._id)}
                    onChange={() => handleSeleccionarEstudiante(estudiante._id)}
                  />
                  <label htmlFor={`estudiante-${estudiante._id}`}>
                    {estudiante.nombre} {estudiante.apellido} - {estudiante.email}
                  </label>
                </div>
              ))
            ) : (
              <p>{loading ? 'Cargando estudiantes...' : 'No hay estudiantes disponibles para cargar.'}</p>
            )}
          </div>
        )}
      </div>
      
      <div className="acciones">
        <button 
          onClick={handleAsignarExamen} 
          disabled={esModoOffline ? (modoSeleccionOfflineActivo && estudiantesSeleccionados.length === 0) : (estudiantes.length === 0 || estudiantesSeleccionados.length === 0)}
          className="boton-asignar"
        >
          {esModoOffline ? 'Guardar Localmente' : 'Asignar Examen'}
        </button>
        <button 
          onClick={() => navigate(-1)} 
          className="boton-cancelar"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default AsignarExamen;
