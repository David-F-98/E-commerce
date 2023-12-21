const btnAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const btnCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');

const renderCarrito = () =>{
    ventanaCarrito.classList.add('carrito--active');
};

btnAbrirCarrito.forEach((botones)=>{
    botones.addEventListener('click',()=>{
        renderCarrito();
    });
});

btnCerrarCarrito.forEach((botones)=>{
    botones.addEventListener('click',()=>{
        ventanaCarrito.classList.remove('carrito--active');
    });
});