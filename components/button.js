/**
 * Crea un elemento de botón con el ID, etiqueta y manejador de clic especificado.
 *
 * @param {string} idButton - El ID único que se asignará al elemento del botón.
 * @param {string} label - El texto que se mostrará en el botón.
 * @param {function} fn (opcional) - La función que se llamará cuando se haga clic en el botón. Por defecto es nulo.
 * @param {array} params (opcional) - Un array que contiene parámetros adicionales que se pasarán a la función del manejador de clic. Por defecto es nulo.
 *
 * @returns {HTMLButtonElement} El elemento de botón recién creado.
 */
export function buttonComponent(idButton, label, fn = null, params = null) {
  // Crea el elemento botón
  const button = document.createElement('button');

  // Adiciona al contenedor la clase adl-button
  button.classList.add('adl-button');

  // Asigna el ID al botón
  button.id = idButton;

  // Establece el tipo de botón (por defecto es 'button')
  button.type = 'button';

  // Establece el texto del botón
  button.textContent = label;

  // Agrega un escuchador de eventos de clic si se proporciona una función
  if (fn) {
    button.addEventListener('click', () => {
      // Llama a la función con los parámetros opcionales (hasta 4)
      fn(params[0], params[1], params[2], params[3]);
    });
  }

  // Devuelve el elemento de botón creado
  return button;
}
