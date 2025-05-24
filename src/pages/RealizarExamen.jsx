import { useState } from "react";
import "./RealizarExamen.css";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const preguntasEjemplo = [
  "Nombre completo",
  "Documento de identidad",
  "¿que es SQL?",
  "¿que es un INNER JOIN?",
  "¿que es un LEFT JOIN?",
  "¿Para que es la clausula WHERE?",
  "¿que es un GROUP BY?",
  "¿que es un ORDER BY?",
  "¿que es un HAVING?",
];

const RealizarExamen = () => {
  const [respuestas, setRespuestas] = useState(Array(preguntasEjemplo.length).fill(""));
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("#f5fafa");

  const handleRespuestaChange = (index, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = value;
    setRespuestas(nuevasRespuestas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Respuestas enviadas: " + JSON.stringify(respuestas));
    navigate("/student"); // Redirige al inicio
  };

  return (
    <div className="form-bg">
      {/* Botón volver */}
      <div className="volver-container">
        <button
          type="button"
          className="volver-btn"
          onClick={() => navigate("/student")}
        >
          <FiArrowLeft size={24} style={{ marginRight: 8 }} />
          Volver
        </button>
      </div>
      {/* Selector de color */}
      <div className="color-picker-container">
        <label htmlFor="colorPicker">Color de fondo </label>
        <input
          id="colorPicker"
          type="color"
          value={bgColor}
          onChange={e => setBgColor(e.target.value)}
          style={{ marginLeft: 8, verticalAlign: "middle" }}
        />
      </div>

      {/* Formulario */}
      <form
        className="form-examen"
        onSubmit={handleSubmit}
        style={{ background: bgColor }}
      >
        <span className="form-obligatorio">* Obligatorio</span>
        {preguntasEjemplo.map((pregunta, idx) => (
          <div className="form-group" key={idx}>
            <label className="form-label">
              {idx + 1}. {pregunta} <span className="form-required">*</span>
            </label>
            <input
              type="text"
              value={respuestas[idx]}
              onChange={e => handleRespuestaChange(idx, e.target.value)}
              className="form-input"
              placeholder="Escriba su respuesta"
              required
            />
          </div>
        ))}
        <button className="form-button" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RealizarExamen;