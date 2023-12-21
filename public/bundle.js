'use strict';

const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

const propiedadColor = producto.querySelector('#propiedad-color');

const botonIncrementarCant = producto.querySelector('#incrementar-cantidad');
const botonDisminuirCant = producto.querySelector('#disminuir-cantidad');
const inputCantidad = producto.querySelector('#cantidad');


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
