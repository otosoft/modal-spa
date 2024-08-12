/**
 * Crea un componente modal con contenido dinámico y opciones de personalización.
 *
 * @param {string} idModalContainer - El ID del contenedor principal del modal.
 * @param {HTMLElement | string} content - El contenido a mostrar en el modal (puede ser un elemento HTML o una cadena).
 * @param {string} idModalCloseButton - El ID del botón de cierre del modal.
 * @param {string} idModalContainerContent - El ID del contenedor del contenido del modal.
 */
export function modalComponent(idModalContainer, content, idModalCloseButton, idModalContainerContent) {
    // Referencia al contenedor del modal
    const container = document.getElementById(idModalContainer);
  
    // Construye el HTML del modal con los IDs proporcionados
    container.innerHTML = `
      <div class="adl-modal-content">
        <button class="adl-close-btn" id="${idModalCloseButton}">&times;</button>
        <div id="${idModalContainerContent}"></div>
      </div>`;
  
    // Muestra el modal
    container.classList.remove('adl-hidden');
  
    // Agrega el contenido al contenedor de contenido del modal
    document.getElementById(idModalContainerContent).appendChild(content);
  
    // Agrega un evento de clic al botón de cierre para ocultar el modal
    document.getElementById(idModalCloseButton).addEventListener('click', () => {
      container.classList.add('adl-hidden');
    });
  }
  