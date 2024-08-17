/**
 * Carga el CSS y el JavaScript necesarios para la aplicación cuando el DOM esté listo.
 */
document.addEventListener("DOMContentLoaded", function () {
  //Cambiar URL cuando se requiera
  loadCSSADL("http://localhost/modal/app/popular/css/app.css"); // Carga el archivo CSS
  //Cambiar URL cuando se requiera
  loadScriptADL("http://localhost/modal/app/popular/app.js"); // Carga el archivo JavaScript
});

/**
 * Carga un archivo CSS dinámicamente.
 *
 * @param {string} urlCSS - La URL del archivo CSS a cargar.
 */
function loadCSSADL(urlCSS) {
  const link = document.createElement("link"); // Crea un nuevo elemento <link>
  link.rel = "stylesheet"; // Indica que es una hoja de estilos
  link.href = urlCSS; // Establece la URL del archivo CSS
  document.head.appendChild(link); // Agrega el enlace al <head> del documento
}

/**
 * Carga un archivo JavaScript como módulo de forma dinámica.
 *
 * @param {string} urlScript - La URL del archivo JavaScript a cargar.
 */
function loadScriptADL(urlScript) {
  const script = document.createElement("script"); // Crea un nuevo elemento <script>
  script.type = "module"; // Indica que es un módulo
  script.src = urlScript; // Establece la URL del archivo JavaScript
  script.onload = function () {
    // Una vez que el script se ha cargado, importa el módulo y ejecuta la función adlMain
    import(urlScript).then((module) => {
      module.adlMain(); // Funcion de app.js
    });
  };
  document.head.appendChild(script); // Agrega el script al <head> del documento
}
