export function stepsComponent(stepsContent) {
  // Crea el contenedor principal
  const container = document.createElement("div");

  // Crea el contenedor principal de los pasos
  const stepsContainer = document.createElement("div");

  // Adiciona al contenedor la clase steps-container
  stepsContainer.classList.add("adl-steps-container");

  // Itera a través del contenido de los pasos y crea un contenedor para cada uno
  stepsContent.forEach((content, index) => {
    const step = document.createElement("div");

    // Agrega la clase step a cada elemento
    step.classList.add("adl-step");

    // Marca el primer paso como activo
    if (index === 0) {
      step.classList.add("adl-active");
    }

    // Agrega el contenido al paso
    if (typeof content === "string") {
      step.innerHTML = content; // Si es una cadena, establece el contenido HTML
    } else {
      step.appendChild(content); // Si es un elemento, lo agrega directamente
    }

    stepsContainer.appendChild(step); // Agrega el paso al contenedor principal
  });

  // Crea la sección de botones de navegación
  const navigationButtons = document.createElement("div");
  navigationButtons.classList.add("adl-navigation-buttons");

  // Crea el botón anterior
  const prevButton = document.createElement("button");
  prevButton.id = "prevBtn";
  prevButton.classList.add("adl-step-back-btn-popular");
  prevButton.disabled = true; // Deshabilita el botón anterior inicialmente
  prevButton.classList.add("adl-hidden-back"); // Oculta el botón anterior en la primera vista

  // Inserta un ícono SVG directamente dentro del botón con una clase personalizada
  const svgIconatras = `
  <svg xmlns="http://www.w3.org/2000/svg" class="svg-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
`;

  prevButton.innerHTML = svgIconatras;

  // Crea el botón siguiente
  const nextButton = document.createElement("button");
  nextButton.id = "nextBtn";
  nextButton.classList.add("adl-step-next-btn-popular");

  // Inserta un ícono SVG directamente dentro del botón
  const svgIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" class="svg-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
`;

  nextButton.innerHTML = svgIcon;

  // Crea el botón finalizar
  const finishButton = document.createElement("button");
  finishButton.id = "finishBtn";
  finishButton.classList.add("adl-btn-final");
  finishButton.classList.add("adl-btn-popular");
  finishButton.textContent = "Entiendo";
  finishButton.classList.add("adl-hidden"); // Oculta el botón finalizar inicialmente

  // Crea el contenedor para las bolitas (miga de pan)
  const breadcrumb = document.createElement("div");
  breadcrumb.classList.add("adl-breadcrumb");

  // Agrega cuatro bolitas al contenedor de la miga de pan
  for (let i = 0; i < 4; i++) {
    const dot = document.createElement("div");
    dot.classList.add("adl-breadcrumb-dot");
    breadcrumb.appendChild(dot);
  }

  // Agrega los botones y la miga de pan al contenedor de navegación
  navigationButtons.appendChild(prevButton);
  navigationButtons.appendChild(breadcrumb);
  navigationButtons.appendChild(nextButton);
  navigationButtons.appendChild(finishButton);

  // Obtiene una lista de todos los elementos con la clase 'step'
  const steps = stepsContainer.querySelectorAll(".adl-step");

  // Variable para controlar el paso actual
  let currentStep = 0;

  // Evento click del botón anterior
  prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
      steps[currentStep].classList.remove("adl-active"); // Desactiva el paso actual
      currentStep--; // Disminuye el índice del paso actual
      steps[currentStep].classList.add("adl-active"); // Activa el nuevo paso anterior
      updateBreadcrumb(); // Actualiza la miga de pan
    }
    toggleButtons(); // Actualiza el estado de los botones de navegación
  });

  // Evento click del botón siguiente
  nextButton.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove("adl-active"); // Desactiva el paso actual
      currentStep++; // Aumenta el índice del paso actual
      steps[currentStep].classList.add("adl-active"); // Activa el nuevo paso siguiente
      updateBreadcrumb(); // Actualiza la miga de pan
    }
    toggleButtons(); // Actualiza el estado de los botones de navegación
  });

  // Evento click del botón finalizar
  finishButton.addEventListener("click", () => {
    const finishEvent = new CustomEvent("stepsFinished", {
      // Dispara un evento personalizado
      detail: { message: "Pasos completados exitosamente" }, // Envía un mensaje con el evento
    });
    document.dispatchEvent(finishEvent);
  });

  // Función para actualizar el estado de los botones de navegación
  function toggleButtons() {
    prevButton.classList.toggle("adl-hidden-back", currentStep === 0); // Oculta el botón anterior en el primer paso
    prevButton.disabled = currentStep === 0; // Deshabilita el botón anterior en el primer paso
    nextButton.classList.toggle("adl-hidden", currentStep === steps.length - 1); // Oculta el botón siguiente en el último paso
    finishButton.classList.toggle(
      "adl-hidden",
      currentStep !== steps.length - 1
    ); // Muestra el botón finalizar solo en el último paso
    breadcrumb.classList.toggle("adl-hidden", currentStep === steps.length - 1); // Oculta la miga de pan en el último paso
  }

  // Función para actualizar las bolitas de la miga de pan
  function updateBreadcrumb() {
    const dots = breadcrumb.querySelectorAll(".adl-breadcrumb-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentStep);
    });
  }

  // Inicializa las bolitas de la miga de pan
  updateBreadcrumb();

  // Agrega el contenedor de steps al contenedor principal
  container.appendChild(stepsContainer);

  // Agrega la sección de navegación al contenedor principal
  container.appendChild(navigationButtons);

  // Devuelve el elemento paso a paso creado
  return container;
}
