// Importar los componentes
import { buttonComponent } from './components/button.js';
import { helloComponent } from './components/helloWorld.js';
import { modalComponent } from './components/modal.js';
import { stepsComponent } from './components/steps.js';

// Disparar la app principal
document.addEventListener("DOMContentLoaded", function() {
  adlMain();
});

export function adlMain() {
  // Obtener el id de la app principal
  const app = document.getElementById('adlApp');

  // Crear el componente hola mundo
  const hello = helloComponent();

  // Crear arreglo para el componente paso a paso
  const stepsContent = [
    helloComponent(), // Primer paso: Componente de saludo
    '<h2>Paso 2</h2><p>Contenido del tercer paso.</p>', // Segundo paso: HTML personalizado
    helloComponent(), // Tercer paso: Componente de saludo
    '<h2>Paso 4</h2><p>Contenido del cuarto paso.</p>' // Cuarto paso: HTML personalizado
  ];

  // Crear el componente paso a paso a partir del arreglo
  const steps = stepsComponent(stepsContent);

  // Crear botones para los modales
  const button1 = buttonComponent('adlButton1', 'Abrir modal 1', modalComponent, ['adlModalContainer1', steps, 'adlModalCloseButton1', 'adlModalContainerContent1']);
  const button2 = buttonComponent('adlButton2', 'Abrir modal 2', modalComponent, ['adlModalContainer2', hello, 'adlModalCloseButton2', 'adlModalContainerContent2']);

  // Agregar los botones a la app
  app.appendChild(button1);
  app.appendChild(button2);
}

// Evento que captura el evento de finalización del componente paso a paso
document.addEventListener('stepsFinished', (e) => {
  console.log(e.detail.message);
});
