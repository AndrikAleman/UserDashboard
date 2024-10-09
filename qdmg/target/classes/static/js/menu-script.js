function abrirEnNuevaVentana(url) {
    // Obtener el nombre de usuario (correo electrónico) desde el elemento HTML
    const nombreUsuario = document.getElementById('nombreUsuario').textContent;

    // Añadir el parámetro "NombreDelUsuario=email" a la URL
    const urlConParametro = `${url}?userId=${encodeURIComponent(nombreUsuario)}`;

    // Obtener el ancho y la altura de la ventana del dispositivo
    const ancho = window.innerWidth * 0.8; // 80% del ancho del dispositivo
    const altura = window.innerHeight * 0.8; // 80% de la altura del dispositivo

    // Abrir la nueva ventana con la URL que contiene el parámetro y con las dimensiones calculadas
    window.open(urlConParametro, '_blank', `width=${ancho},height=${altura}`);
}