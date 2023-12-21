const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

thumbs.addEventListener('click', (e)=>{
    if(e.target.tagName==='IMG'){
        const imagenSrc = e.target.src;
        
        const lastIndex = imagenSrc.lastIndexOf('/');
        const nombreImagen = imagenSrc.substring(lastIndex + 1);
        productoImagen.src = `./img/tennis/${nombreImagen}`;
        
    };
    
});
