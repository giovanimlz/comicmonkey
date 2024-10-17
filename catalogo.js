// Seleccionamos todas las imágenes de los productos
const images = document.querySelectorAll('.producto img');

// Función para agrandar la imagen cuando se hace clic
images.forEach((image) => {
    image.addEventListener('click', () => {
        // Crear un contenedor modal para mostrar la imagen
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        // Crear una imagen grande que se mostrará en el centro
        const enlargedImg = document.createElement('img');
        enlargedImg.src = image.src;
        enlargedImg.classList.add('enlarged');
        
        // Añadir la imagen al contenedor modal
        modal.appendChild(enlargedImg);
        
        // Añadir el contenedor modal al body
        document.body.appendChild(modal);
        
        // Cerrar el modal cuando se hace clic en cualquier parte de la pantalla
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
