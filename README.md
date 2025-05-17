# EvaluAPP

## Descripción del Proyecto

EvaluAPP es una aplicación web diseñada para la gestión de evaluaciones y notas académicas. Permite a los profesores crear exámenes, visualizar las calificaciones de los estudiantes y a los estudiantes realizar exámenes y consultar sus propias notas. La aplicación busca ser una herramienta intuitiva y eficiente para el proceso de evaluación en entornos educativos.

## Funcionalidades Principales

* **Creación de Exámenes:** (Solo para profesores y administradores) Permite diseñar exámenes con diferentes tipos de preguntas (actualmente en desarrollo).
* **Visualización de Notas:** (Solo para profesores y administradores) Ofrece una vista de las notas de todos los estudiantes.
* **Realización de Exámenes:** (Solo para estudiantes y administradores) Permite a los estudiantes responder a los exámenes asignados.
* **Consulta de Notas Personales:** (Solo para estudiantes y administradores) Los estudiantes pueden ingresar su nombre (ejemplo simulado) para ver sus calificaciones.
* **Gestión de Usuarios:** (Solo para administradores) (En desarrollo) Permite la creación, edición y eliminación de usuarios.
* **Configuración:** (Solo para administradores) (En desarrollo) Ofrece opciones para la configuración general de la aplicación.
* **Autenticación:** Sistema de inicio y cierre de sesión con diferentes roles (administrador, profesor, estudiante).
* **Interfaz de Usuario:** Diseño minimalista y fácil de usar con un menú lateral para la navegación.

## Tecnologías Utilizadas

* **Frontend:** React
* **Estilos:** CSS (con archivos CSS modulares)
* **Gestión de Estado:** (Implícito en la estructura de los componentes React)
* **Rutas:** React Router DOM
* **Almacenamiento Local:** `localStorage` para la gestión básica de tokens y roles.
* **Ayudantes:** Funciones JavaScript personalizadas para alertas y redirecciones.

## Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Mar-Vin1926/FrontEnd-S7.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd EvaluAPP
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```
4.  **Inicia la aplicación en modo de desarrollo:**
    ```bash
    npm start
    # o
    yarn start
    ```
    La aplicación se abrirá en tu navegador en `http://localhost:3000`.

## Estructura del Proyecto

EvaluAPP/
├── public/
│   └── index.html
│   └── ...
├── src/
│   ├── assets/         # Imágenes y otros archivos estáticos
│   ├── components/     # Componentes reutilizables de React
│   │   └── MenuLateral.jsx
│   ├── helpers/        # Funciones de utilidad
│   │   └── funciones.js
│   ├── pages/          # Páginas principales de la aplicación
│   │   └── Home.jsx
│   │   └── Login.jsx
│   │   └── ...
│   ├── App.jsx         # Componente raíz de la aplicación
│   ├── index.js        # Punto de entrada de la aplicación
│   ├── App.css         # Estilos globales de la aplicación
│   └── Home.css        # Estilos específicos de la página Home
├── package.json
├── README.md
└── .gitignore


## Configuración

Actualmente, la configuración de la aplicación es mínima y se maneja principalmente a través del código. En futuras versiones, se podría implementar un archivo de configuración para variables de entorno y otros ajustes.

## Cómo Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1.  **Haz un fork del repositorio.**
2.  **Crea una rama para tu contribución (`git checkout -b feature/nueva-funcionalidad`).**
3.  **Realiza tus cambios y haz commit de ellos (`git commit -m 'Añade nueva funcionalidad'`).**
4.  **Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).**
5.  **Crea un Pull Request desde tu rama a la rama `main` del repositorio original.**

Por favor, asegúrate de seguir las convenciones de código existentes y documentar cualquier cambio significativo.

## Próximos Pasos (Tareas Pendientes)

* Implementación completa del formulario de creación de exámenes.
* Desarrollo de la funcionalidad completa de gestión de usuarios.
* Implementación de la lógica real para la realización y calificación de exámenes.
* Conexión a una base de datos para persistencia de datos (usuarios, exámenes, notas).
* Mejoras en la autenticación y seguridad.
* Diseño y desarrollo de las páginas para las funcionalidades en desarrollo (Gestión de Usuarios, Configuración).
* Implementación de diferentes tipos de preguntas para los exámenes.

## Licencia

Este proyecto no tiene una licencia específica definida actualmente. Todos los derechos reservados.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos a través de [marvegarciacor@cesde.net] o creando un issue en el repositorio.

---

## Autor
Marvin Garcia,
Kevin Olivella,
Paola Murillo.

**¡Gracias por explorar EvaluAPP!**
