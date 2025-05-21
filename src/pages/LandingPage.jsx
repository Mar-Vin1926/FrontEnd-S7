// src/pages/LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Asegúrate de que la ruta sea correcta

// *** AÑADE ESTA LÍNEA PARA IMPORTAR TU IMAGEN ***
import teacherIllustration from '../assets/Examen.jpg'; // Asegúrate de que el nombre del archivo sea exactamente 'Examen.jpg' y la ruta sea correcta.

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="landing-container">
            {/* Navegación Superior (Navbar) */}
            <nav className="landing-navbar">
                <div className="navbar-brand">EvaluAPP</div>
                <div className="navbar-links">
                    <button className="navbar-button" onClick={handleLoginClick}>
                        Iniciar Sesión
                    </button>
                </div>
            </nav>

            {/* Sección Principal (Hero Section) */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Evaluaciones <br /> inteligentes para <br /> un aprendizaje brillante.
                    </h1>
                    <p className="hero-subtitle">
                        Simplifica la gestión de exámenes y el seguimiento del progreso estudiantil con EvaluAPP, diseñada para educadores modernos.
                    </p>
                    <button className="cta-button" onClick={handleLoginClick}>
                        Comenzar Ahora
                    </button>
                </div>
                <div className="hero-image">
                    {/* *** USA LA VARIABLE IMPORTADA AQUÍ *** */}
                    <img src={teacherIllustration} alt="Ilustración de Profesor" />
                </div>
            </section>

            {/* Sección de Características */}
            <section className="landing-features">
                <div className="feature-item">
                    <h2>Gestión Simplificada</h2>
                    <p>Crea, asigna y revisa exámenes de forma intuitiva. Simplifica tu proceso de evaluación y ahorra tiempo valioso.</p>
                </div>
                <div className="feature-item">
                    <h2>Resultados Claros</h2>
                    <p>Accede a reportes detallados y análisis de rendimiento para entender mejor el progreso de tus estudiantes.</p>
                </div>
                <div className="feature-item">
                    <h2>Experiencia Intuitiva</h2>
                    <p>Diseñada para profesores y estudiantes, ofrece una interfaz fácil de usar para una interacción fluida.</p>
                </div>
            </section>

            <footer className="landing-footer">
                <p>&copy; 2024 EvaluAPP. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;