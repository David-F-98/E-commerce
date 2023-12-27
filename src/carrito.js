const btnAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const btnCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = [];


const renderCarrito = () =>{
    ventanaCarrito.classList.add('carrito--active');
    console.log(carrito);
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

btnAgregarCarrito.addEventListener('click', (e)=>{
    const id = producto.dataset.productoId;
    const nombre = producto.querySelector('.producto__nombre').innerText;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = document.querySelector('#propiedad-color input:checked').value;
    const tamano = document.querySelector('#propiedad-tamaño input:checked').value;
    carrito.push({
        id : id,
        nombre:nombre,
        cantidad:cantidad,
        color:color,
        tamano:tamano,
    });
})
