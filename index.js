// index.js

// Función para aplicar los estilos al título y fondo
function aplicarEstilos() {
  // Cambiar el fondo a negro
  document.body.style.backgroundColor = 'black';

  // Crear un elemento h1 para el título
  const titulo = document.createElement('h1');
  titulo.textContent = 'GIE DDLR';
  
  // Aplicar estilos al título
  titulo.style.color = 'limegreen';
  titulo.style.fontSize = '36px';
  titulo.style.textAlign = 'center';

  // Agregar el título al cuerpo del documento
  document.body.appendChild(titulo);
}

// Llamar a la función para aplicar los estilos cuando la página se cargue
window.addEventListener('load', aplicarEstilos);
