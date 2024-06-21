const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Opcional: Manejar el envío de formularios
document.getElementById('signUpForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario de registro enviado');
});

document.getElementById('signInForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario de inicio de sesión enviado');
});
