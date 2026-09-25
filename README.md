# Portafolio Personal

Portafolio web de Carlos Marcelo Hernandez, realizado como entrega para la PFO1 de la materia Desarrollo de Sistemas Web (Front End) en el IFTS 29. Presenta mi perfil como desarrollador de software en formación, mis habilidades, cursos y certificados, y una sección de contacto.

## Enlaces

- **Sitio publicado:** [pfo1-carlos-marcelo-hernandez.vercel.app](https://pfo1-carlos-marcelo-hernandez.vercel.app/)


- **Perfil de GitHub:** [github.com/cmarceloh](https://github.com/cmarceloh)

## Tecnologías

- **HTML5:** estructura semántica del contenido con elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`.
- **CSS3:** estilos, variables personalizadas para las paletas de color, Flexbox, CSS Grid, media queries y transiciones.
- **JavaScript:** lógica del selector de tema. No se utilizan frameworks ni dependencias de JavaScript.
- **Google Fonts:** fuente Roboto, con una familia sans-serif de respaldo.

El sitio es estático y no necesita un proceso de compilación ni instalación de paquetes. Google Fonts requiere conexión a Internet; si no está disponible, se utiliza la fuente de respaldo.

## Contenido del sitio

- **Presentación:** foto, perfil, descripción personal y enlace al perfil de GitHub.
- **Habilidades:** tarjetas con tecnologías y áreas de conocimiento, organizadas en una cuadrícula adaptable.
- **Cursos y certificados:** doce elementos agrupados en tandas de cuatro. Los controles permiten mostrar cuatro, ocho o todos los cursos, y volver a ocultar los grupos adicionales.
- **Contacto:** formulario visual con campos obligatorios para nombre, correo electrónico y mensaje. Actualmente no está conectado a un servicio ni a un backend, por lo que no envía mensajes.
- **Pie de página:** identificación del portafolio y año.

## Diseño e interacción

- Paleta basada en tonos grafito y verde agua, con superficies, bordes y textos adaptados a cada tema.
- Selector para alternar entre modo claro y oscuro. La elección se guarda en `localStorage`; si todavía no hay una preferencia guardada, se toma como referencia la preferencia de color del dispositivo.
- Menú de navegación que se convierte en menú hamburguesa en pantallas pequeñas. Se implementa con un checkbox y CSS, sin JavaScript.
- Maquetación adaptable: Flexbox para la cabecera y la presentación, CSS Grid para las habilidades y distribución flexible para las tarjetas de cursos.
- Transiciones de hover y estados de foco visibles para facilitar la navegación con teclado.
- Texto alternativo en las imágenes y etiquetas asociadas a los campos del formulario.

## Estructura del proyecto

```text
.
├── index.html       # Contenido y estructura de la página
├── estilos.css      # Diseño, temas y reglas responsive
├── js/
│   └── tema.js      # Preferencia y alternancia de tema
├── media/           # Foto de perfil y certificados
└── README.md        # Documentación del proyecto
```

## Cómo abrirlo

Abrí `index.html` en un navegador. También se puede ejecutar con una extensión de servidor local de VS Code para probarlo durante el desarrollo.

## Declaración de uso de IA

En el desarrollo de este proyecto utilicé asistencia de inteligencia artificial generativa, de acuerdo con los requisitos de la consigna.

- **Herramienta utilizada:** Google Gemini.
- **Plan:** Google AI Pro.
- **Experiencia previa:** utilizo esta herramienta a diario para el aprendizaje y también en mi entorno laboral, como apoyo para la organización y la resolución de tareas.
- **Proceso y adaptación:** primero desarrollo y maqueto el código por mi cuenta. Luego comparto el trabajo con la IA para solicitar opiniones, detectar posibles errores y evaluar mejoras, por ejemplo en el uso de Flexbox, Grid y HTML semántico. Las adaptaciones y el código final integrado en el proyecto se realizan bajo mi propio criterio técnico.
