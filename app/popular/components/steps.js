/**
 * Crea un componente de pasos con navegación y estado activo.
 *
 * @param {array} stepsContent - Un array que contiene el contenido de cada paso. 
 *                               Cada elemento del array puede ser una cadena o un elemento HTML.
 *
 * @returns {HTMLDivElement} El elemento div que contiene el componente de pasos.
 */
export function stepsComponent(stepsContent) {
    // Crea el contenedor principal
    const container = document.createElement('div');
  
    // Crea el contenedor principal de los pasos
    const stepsContainer = document.createElement('div');

    // Adiciona al contenedor la clase steps-container
    stepsContainer.classList.add('adl-steps-container');
  
    // Itera a través del contenido de los pasos y crea un contenedor para cada uno
    stepsContent.forEach((content, index) => {
      const step = document.createElement('div');

      // Agrega la clase step a cada elemento
      step.classList.add('adl-step');
  
      // Marca el primer paso como activo
      if (index === 0) {
        step.classList.add('adl-active');
      }
  
      // Agrega el contenido al paso
      if (typeof content === 'string') {
        step.innerHTML = content; // Si es una cadena, establece el contenido HTML
      } else {
        step.appendChild(content); // Si es un elemento, lo agrega directamente
      }
  
      stepsContainer.appendChild(step); // Agrega el paso al contenedor principal
    });
  
    // Crea la sección de botones de navegación
    const navigationButtons = document.createElement('div');
    navigationButtons.classList.add('adl-navigation-buttons');
  
    // Crea el botón anterior
    const prevButton = document.createElement('button');
    prevButton.id = 'prevBtn';
    prevButton.classList.add('adl-step-back-btn-bogota');
    prevButton.textContent = '<';
    prevButton.disabled = true; // Deshabilita el botón anterior inicialmente
  
    // Crea el botón siguiente
    const nextButton = document.createElement('button');
    nextButton.id = 'nextBtn';
    nextButton.classList.add('adl-step-next-btn-bogota');
    nextButton.textContent = '>';
  
    // Crea el botón finalizar
    const finishButton = document.createElement('button');
    finishButton.id = 'finishBtn';
    finishButton.classList.add('adl-btn');
    finishButton.classList.add('adl-btn-bogota');
    finishButton.textContent = 'Entiendo';
    finishButton.classList.add('adl-hidden'); // Oculta el botón finalizar inicialmente
  
    // Agrega los botones a la sección de navegación
    navigationButtons.appendChild(prevButton);
    navigationButtons.appendChild(nextButton);
    navigationButtons.appendChild(finishButton);
  
    // Obtiene una lista de todos los elementos con la clase 'step'
    const steps = stepsContainer.querySelectorAll('.adl-step');
  
    // Variable para controlar el paso actual
    let currentStep = 0;
  
    // Evento click del botón anterior
    prevButton.addEventListener('click', () => {
      if (currentStep > 0) {
        steps[currentStep].classList.remove('adl-active'); // Desactiva el paso actual
        currentStep--; // Disminuye el índice del paso actual
        steps[currentStep].classList.add('adl-active'); // Activa el nuevo paso anterior
      }
      toggleButtons(); // Actualiza el estado de los botones de navegación
    });
  
    // Evento click del botón siguiente
    nextButton.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('adl-active'); // Desactiva el paso actual
        currentStep++; // Aumenta el índice del paso actual
        steps[currentStep].classList.add('adl-active'); // Activa el nuevo paso siguiente
      }
      toggleButtons(); // Actualiza el estado de los botones de navegación
    });
  
    // Evento click del botón finalizar
    finishButton.addEventListener('click', () => {
      const finishEvent = new CustomEvent('stepsFinished', { // Dispara un evento personalizado
        detail: { message: 'Pasos completados exitosamente' } // Envía un mensaje con el evento
      });
      document.dispatchEvent(finishEvent);
    });
  
    // Función para actualizar el estado de los botones de navegación
    function toggleButtons() {
      prevButton.disabled = currentStep === 0; // Deshabilita el botón anterior en el primer paso
      nextButton.classList.toggle('adl-hidden', currentStep === steps.length - 1); // Oculta el botón siguiente en el último paso
      finishButton.classList.toggle('adl-hidden', currentStep !== steps.length - 1); // Muestra el botón finalizar solo en el último paso
    }

    // Agrega el contenedor de steps al contenedor principal
    container.appendChild(stepsContainer);

    // Agrega la sección de navegación al contenedor principal
    container.appendChild(navigationButtons);

    // Devuelve el elemento paso a paso creado
    return container;
}  