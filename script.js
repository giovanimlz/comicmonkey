// Obtener el modal y sus elementos
const modal = document.getElementById('modal');
const modalImg = document.getElementById('img-modal');
const closeBtn = document.querySelector('.close');

// Verificar si los elementos existen antes de agregar eventos
if (modal && modalImg && closeBtn) {
    // Seleccionar todas las imágenes con la clase "comic-image"
    const images = document.querySelectorAll('.comic-image');

    // Añadir evento de clic a cada imagen
    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex'; // Mostrar el modal
            modalImg.src = image.src; // Colocar la imagen seleccionada en el modal
        });
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Ocultar el modal
    });

    // Cerrar el modal al hacer clic fuera de la imagen
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Ocultar el modal
        }
    });
} else {
    console.error('Error: No se pudo encontrar el modal o sus elementos.');
}


