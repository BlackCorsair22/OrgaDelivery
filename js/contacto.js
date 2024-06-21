// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validar los campos (opcional, ya que HTML5 required lo hace)
    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando AJAX
    alert('Mensaje enviado con éxito.\nNombre: ' + name + '\nEmail: ' + email + '\nMensaje: ' + message);

    // Limpiar el formulario después de enviarlo
    document.getElementById('contactForm').reset();
});