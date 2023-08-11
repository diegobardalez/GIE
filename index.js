// index.js

// Obtener la URL completa
const urlCompleta = window.location.href;

// Imprimir la URL en la consola
console.log('URL completa:', urlCompleta);

// Función para aplicar los estilos al título y fondo
function aplicarEstilos() {
  // Crear un elemento div para el fondo negro
  const fondoNegro = document.createElement('div');
  fondoNegro.style.backgroundColor = 'black';
  fondoNegro.style.position = 'fixed';
  fondoNegro.style.top = '0';
  fondoNegro.style.left = '0';
  fondoNegro.style.width = '100%';
  fondoNegro.style.height = '100%';
  fondoNegro.style.zIndex = '9999'; // Asegura que esté por encima de todos los elementos
  document.body.appendChild(fondoNegro);

  // Crear un elemento h1 para el título
  const titulo = document.createElement('h1');
  titulo.textContent = 'GIE DDLR';
  titulo.style.color = 'limegreen';
  titulo.style.fontSize = '36px';
  titulo.style.textAlign = 'center';
  titulo.style.position = 'fixed';
  titulo.style.top = '50%';
  titulo.style.left = '50%';
  titulo.style.transform = 'translate(-50%, -50%)';
  titulo.style.zIndex = '10000'; // Asegura que esté por encima de todo
  document.body.appendChild(titulo);
}

// Llamar a la función para aplicar los estilos cuando la página se cargue
window.addEventListener('load', aplicarEstilos);
