document.addEventListener('DOMContentLoaded', function() {
    // Crear el círculo del cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Actualizar la posición del círculo al mover el cursor
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Agrandar el círculo al pasar sobre un enlace
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', function() {
            cursor.classList.add('cursor-large');
        });
        link.addEventListener('mouseout', function() {
            cursor.classList.remove('cursor-large');
        });
    });
});
