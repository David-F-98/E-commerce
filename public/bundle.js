'use strict';

const producto$1 = document.getElementById('producto');
const productoImagen = producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');

const propiedadColor = producto$1.querySelector('#propiedad-color');

const botonIncrementarCant = producto$1.querySelector('#incrementar-cantidad');
const botonDisminuirCant = producto$1.querySelector('#disminuir-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');


thumbs.addEventListener('click', (e)=>{
    if(e.target.tagName==='IMG'){
        const imagenSrc = e.target.src;
        
        const lastIndex = imagenSrc.lastIndexOf('/');
        const nombreImagen = imagenSrc.substring(lastIndex + 1);
        productoImagen.src = `./img/tennis/${nombreImagen}`;
        
    }    
    
});

propiedadColor.addEventListener('click',(e)=>{
    if(e.target.tagName==='INPUT'){
        const imagenSrc = e.target.value;
        productoImagen.src = `./img/tennis/${imagenSrc}.jpg`;
    }
    
});



botonDisminuirCant.addEventListener('click', (e)=>{
    
    if (parseInt(inputCantidad.value)>1){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
});

botonIncrementarCant.addEventListener('click', (e)=>{
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

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
});
