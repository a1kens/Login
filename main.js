// Seleccionar elementos del DOM
const loginButton = document.getElementById('loginButton');
const closeIcon = document.getElementById('closeIcon');
const loginForm = document.querySelector('.contenedor-form.login');
const registerForm = document.querySelector('.contenedor-form.registrar');
const registerLink = document.querySelector('.registrar-link');
const loginLink = document.querySelector('.login-link');
const formOverlay = document.querySelector('.fondo');

// Función para mostrar el formulario de login
function showLoginForm() {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}

// Función para mostrar el formulario de registro
function showRegisterForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
}

// Mostrar el formulario de inicio de sesión cuando se hace clic en 'Iniciar Sesión'
loginButton.addEventListener('click', () => {
    formOverlay.classList.add('active');
    showLoginForm();
});

// Cerrar el formulario cuando se hace clic en el icono de cerrar
closeIcon.addEventListener('click', () => {
    formOverlay.classList.remove('active');
});

// Mostrar el formulario de registro cuando se hace clic en el enlace 'Regístrate'
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    showRegisterForm();
});

// Mostrar el formulario de inicio de sesión cuando se hace clic en el enlace 'Iniciar Sesión' desde el formulario de registro
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
});



// console.log('loginButton:', loginButton);
// console.log('closeIcon:', closeIcon);
// console.log('loginForm:', loginForm);
// console.log('registerForm:', registerForm);
// console.log('registerLink:', registerLink);
// console.log('loginLink:', loginLink);
// console.log('formOverlay:', formOverlay);