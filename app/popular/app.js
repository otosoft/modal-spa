// Importar los componentes
import { modalComponent } from './components/modal.js';
import { stepsComponent } from './components/steps.js';

// Disparar la app principal
document.addEventListener("DOMContentLoaded", function() {
  adlMain();
});

export async function adlMain() {
  const templates = [
    loadTemplate("templates/step1.html"), 
    loadTemplate("templates/step2.html"), 
    loadTemplate("templates/step3.html"), 
    loadTemplate("templates/step4.html")
  ]

  Promise.all(templates)
    .then(([step1HTML, step2HTML, step3HTML, step4HTML]) => {
      // Obtener el id de la app principal
      const app = document.getElementById('adlApp');
      
      const stepsContent = [
        step1HTML,
        step2HTML,
        step3HTML,
        step4HTML,
      ];

      // Generar evento para el botón que dispara el modal
      const adlButton = document.getElementById('adlCallToAction');
      adlButton.textContent = 'Call to Action';
      adlButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Crear el componente paso a paso a partir del arreglo
        const steps = stepsComponent(stepsContent);
        modalComponent('adlModalContainer', steps, 'adlModalCloseButton', 'adlModalContainerBody');
      });
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
    });
}

function loadTemplate(url) {
  return fetch(url)
    .then(response => response.text());
}

// Evento que captura el evento de finalización del componente paso a paso
document.addEventListener('stepsFinished', (e) => {
  console.log(e.detail.message);
});
