import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuLateral from "../components/MenuLateral";
import MenuLateralStudent from "../components/MenuLateralStudent";
import "../Home.css";
import "./CrearExamen.css";

const CrearExamen = () => {
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol");
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState(60); // Valor por defecto 60 minutos
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [preguntas, setPreguntas] = useState([
    { 
      id: 1, 
      texto: '', 
      tipo: 'opcion_multiple', 
      opciones: ['', '', '', ''], 
      respuestaCorrecta: 0 
    }
  ]);

  // Función para formatear la fecha actual en formato YYYY-MM-DDThh:mm
  const getCurrentDateTime = () => {
    const now = new Date();
    const tzOffset = now.getTimezoneOffset() * 60000; // offset en milisegundos
    return (new Date(now - tzOffset)).toISOString().slice(0, 16);
  };

  // Establecer fecha de inicio por defecto como ahora
  if (!fechaInicio) {
    setFechaInicio(getCurrentDateTime());
  }

  const agregarPregunta = () => {
    setPreguntas([...preguntas, { 
      id: preguntas.length + 1, 
      texto: '', 
      tipo: 'opcion_multiple', 
      opciones: ['', '', '', ''],
      respuestaCorrecta: 0
    }]);
  };

  const actualizarPregunta = (id, campo, valor) => {
    setPreguntas(preguntas.map(pregunta => 
      pregunta.id === id ? { ...pregunta, [campo]: valor } : pregunta
    ));
  };

  const actualizarOpcion = (idPregunta, indexOpcion, valor) => {
    setPreguntas(preguntas.map(pregunta => {
      if (pregunta.id === idPregunta) {
        const nuevasOpciones = [...pregunta.opciones];
        nuevasOpciones[indexOpcion] = valor;
        return { ...pregunta, opciones: nuevasOpciones };
      }
      return pregunta;
    }));
  };

  const marcarRespuestaCorrecta = (idPregunta, indexOpcion) => {
    setPreguntas(preguntas.map(pregunta => 
      pregunta.id === idPregunta ? { ...pregunta, respuestaCorrecta: indexOpcion } : pregunta
    ));
  };

  const eliminarPregunta = (id) => {
    if (preguntas.length > 1) {
      setPreguntas(preguntas.filter(pregunta => pregunta.id !== id));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar fechas
    if (new Date(fechaFin) <= new Date(fechaInicio)) {
      alert('La fecha de cierre debe ser posterior a la fecha de inicio');
      return;
    }

    // Validar que todas las preguntas tengan texto
    const preguntasSinTexto = preguntas.filter(p => !p.texto.trim());
    if (preguntasSinTexto.length > 0) {
      alert('Todas las preguntas deben tener un enunciado');
      return;
    }

    // Validar opciones de respuesta y respuestas correctas
    const errores = [];
    
    preguntas.forEach((pregunta, index) => {
      // Validar que se haya seleccionado una respuesta correcta
      if (pregunta.respuestaCorrecta === null || pregunta.respuestaCorrecta === undefined) {
        errores.push(`Debes seleccionar una respuesta correcta para la Pregunta ${index + 1}`);
        return;
      }
      
      // Validar que la opción de respuesta correcta no esté vacía
      const opcionCorrecta = pregunta.opciones[pregunta.respuestaCorrecta];
      if (!opcionCorrecta || !opcionCorrecta.trim()) {
        errores.push(`La respuesta correcta para la Pregunta ${index + 1} no puede estar vacía`);
      }
      
      // Validar que no haya opciones vacías
      const opcionesVacias = pregunta.opciones.filter(op => op.trim() === '');
      if (opcionesVacias.length > 0) {
        errores.push(`La Pregunta ${index + 1} tiene opciones vacías. Por favor, completa o elimina las opciones vacías.`);
      }
    });

    if (errores.length > 0) {
      alert(errores.join('\n\n'));
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No hay token de autenticación. Por favor, inicia sesión nuevamente.');
      }

      // Preparar los datos del examen
      const examenData = {
        titulo,
        descripcion,
        duracion: parseInt(duracion, 10),
        fechaInicio,
        fechaFin,
        preguntas: preguntas.map(p => ({
          ...p,
          opciones: p.opciones.filter(op => op.trim() !== '')
        }))
      };

      console.log('Enviando datos al servidor:', examenData);

      // Intenta hacer la petición
      const response = await fetch('http://localhost:3000/examenes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(examenData)
      });

      // Manejar la respuesta
      let responseData;
      try {
        responseData = await response.json();
      } catch (e) {
        console.error('Error al parsear la respuesta del servidor:', e);
        throw new Error('La respuesta del servidor no es válida');
      }
      
      if (!response.ok) {
        console.error('Error del servidor:', responseData);
        throw new Error(responseData.message || `Error del servidor: ${response.status} ${response.statusText}`);
      }

      if (!responseData._id) {
        throw new Error('No se recibió un ID de examen válido');
      }
      
      // Si todo sale bien, redirigir
      navigate(`/asignar-examen/${responseData._id}`);

    } catch (error) {
      console.error('Error detallado:', error);
      
      if (error.message === 'Failed to fetch') {
        try {
          // Preparar los datos del examen
          const examenData = {
            _id: Date.now().toString(), // Generar un ID temporal
            titulo,
            descripcion,
            duracion: parseInt(duracion, 10),
            fechaInicio,
            fechaFin,
            preguntas: preguntas.map(p => ({
              ...p,
              opciones: p.opciones.filter(op => op.trim() !== '')
            })),
            esTemporal: true // Marcar como temporal
          };

          console.log('Guardando examen localmente (modo sin conexión):', examenData);
          
          // Guardar en localStorage
          const examenesGuardados = JSON.parse(localStorage.getItem('examenesTemporales') || '[]');
          examenesGuardados.push(examenData);
          localStorage.setItem('examenesTemporales', JSON.stringify(examenesGuardados));
          
          // Mostrar mensaje de éxito
          alert('✅ Examen guardado localmente. Se sincronizará cuando haya conexión.');
          
          // Redirigir a la vista de asignación
          navigate(`/asignar-examen/${examenData._id}`);
          
        } catch (error) {
          console.error('Error al guardar el examen localmente:', error);
          alert('⚠️ Error al guardar el examen localmente. Por favor, inténtalo de nuevo.');
        }
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="aplicacion">
      {rol === "admin" ? <MenuLateral /> : <MenuLateralStudent />}
      
      <main className="aplicacion__principal">
        <div className="crear-examen-container">
          <h1 className="crear-examen-titulo">Crear Nuevo Examen</h1>
          
          <form onSubmit={handleSubmit} className="crear-examen-form">
            <div className="form-group">
              <label htmlFor="titulo">Título del Examen</label>
              <input
                type="text"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ingrese el título del examen"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="descripcion">Descripción del Examen</label>
              <textarea
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Describa el propósito y contenido del examen"
                rows="3"
              ></textarea>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="duracion">Duración (minutos)</label>
                <input
                  type="number"
                  id="duracion"
                  value={duracion}
                  onChange={(e) => setDuracion(e.target.value)}
                  min="1"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="fechaInicio">Fecha de Inicio</label>
                <input
                  type="datetime-local"
                  id="fechaInicio"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  min={getCurrentDateTime()}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="fechaFin">Fecha de Cierre</label>
                <input
                  type="datetime-local"
                  id="fechaFin"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                  min={fechaInicio || getCurrentDateTime()}
                  required
                />
              </div>
            </div>
            
            <div className="preguntas-container">
              <h3>Preguntas del Examen</h3>
              
              {preguntas.map((pregunta, index) => (
                <div key={pregunta.id} className="pregunta-card">
                  <div className="pregunta-header">
                    <h4>Pregunta {index + 1}</h4>
                    {preguntas.length > 1 && (
                      <button 
                        type="button" 
                        className="btn-eliminar"
                        onClick={() => eliminarPregunta(pregunta.id)}
                      >
                        Eliminar
                      </button>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label>Enunciado de la Pregunta</label>
                    <input
                      type="text"
                      value={pregunta.texto}
                      onChange={(e) => actualizarPregunta(pregunta.id, 'texto', e.target.value)}
                      placeholder="Escriba la pregunta aquí"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tipo de Pregunta</label>
                    <select
                      value={pregunta.tipo}
                      onChange={(e) => actualizarPregunta(pregunta.id, 'tipo', e.target.value)}
                    >
                      <option value="opcion_multiple">Opción Múltiple</option>
                      <option value="verdadero_falso">Verdadero/Falso</option>
                      <option value="respuesta_corta">Respuesta Corta</option>
                    </select>
                  </div>
                  
                  <div className="opciones-container">
                    <label>Opciones de Respuesta</label>
                    {pregunta.tipo === 'opcion_multiple' && (
                      pregunta.opciones.map((opcion, opcionIndex) => (
                        <div key={opcionIndex} className="opcion-item">
                          <input
                            type="radio"
                            name={`pregunta-${pregunta.id}`}
                            checked={pregunta.respuestaCorrecta === opcionIndex}
                            onChange={() => marcarRespuestaCorrecta(pregunta.id, opcionIndex)}
                          />
                          <input
                            type="text"
                            value={opcion}
                            onChange={(e) => actualizarOpcion(pregunta.id, opcionIndex, e.target.value)}
                            placeholder={`Opción ${opcionIndex + 1}`}
                            required={pregunta.respuestaCorrecta === opcionIndex}
                          />
                        </div>
                      ))
                    )}
                    
                    {pregunta.tipo === 'verdadero_falso' && (
                      <div className="opcion-item">
                        <input
                          type="radio"
                          name={`pregunta-${pregunta.id}`}
                          checked={pregunta.respuestaCorrecta === 0}
                          onChange={() => marcarRespuestaCorrecta(pregunta.id, 0)}
                        />
                        <input
                          type="text"
                          value="Verdadero"
                          readOnly
                          className="opcion-texto"
                        />
                      </div>
                    )}
                    
                    {pregunta.tipo === 'verdadero_falso' && (
                      <div className="opcion-item">
                        <input
                          type="radio"
                          name={`pregunta-${pregunta.id}`}
                          checked={pregunta.respuestaCorrecta === 1}
                          onChange={() => marcarRespuestaCorrecta(pregunta.id, 1)}
                        />
                        <input
                          type="text"
                          value="Falso"
                          readOnly
                          className="opcion-texto"
                        />
                      </div>
                    )}
                    
                    {pregunta.tipo === 'respuesta_corta' && (
                      <div className="form-group">
                        <input
                          type="text"
                          value={pregunta.opciones[0] || ''}
                          onChange={(e) => actualizarOpcion(pregunta.id, 0, e.target.value)}
                          placeholder="Escriba la respuesta correcta"
                          required
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <button 
                type="button" 
                className="btn-agregar-pregunta"
                onClick={agregarPregunta}
              >
                + Agregar Pregunta
              </button>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="btn-cancelar"
                onClick={() => window.history.back()}
              >
                Cancelar
              </button>
              <button type="submit" className="btn-guardar">
                Guardar Examen
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CrearExamen;