/**
 * Crea un componente de saludo que contiene un encabezado H2 y un párrafo.
 *
 * @returns {HTMLDivElement} Un elemento div que contiene el componente de saludo.
 */
export function helloComponent() {
    // Crea el elemento contenedor
    const div = document.createElement('div');

    // Adiciona al contenedor la clase adl-hello-world
    div.classList.add('adl-hello-world');
    
    // Crea el elemento h2
    const h2 = document.createElement('h2');

    // Crea el elemento p
    const p = document.createElement('p');
    
    // Establece el texto del elemento h2
    h2.textContent = 'Hola Mundo';

    // Establece el texto del elemento p
    p.textContent = 'Componente de prueba.';
    
    // Agregar los elementos h2 y p al contenedor
    div.appendChild(h2);
    div.appendChild(p);
    
    // Devuelve el elemento creado
    return div;
  }
  