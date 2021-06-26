document.addEventListener('DOMContentLoaded', function(){

    scrollNav();
    

    // fecha actual con javascript
    // mostrar fecha ceracion
    var fecha = document.querySelector('#fecha span');

    var actual = new Date();
    var año = actual.getFullYear();

    fecha.textContent = año;

    // desarrollado por Francisco M. Charris C. 2021
});

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            console.log(e.target.attributes.href.value);
        });
    });
}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(var i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        // añadir funcion de mostrar imagen grande
        imagen.onclick = mostrarImagen;
        // para añadir atributos propios al html desde js
        imagen.dataset.imagenId = i;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // boton cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

    // presionar donde sea tambien cerrara
    overlay.onclick = function(){
        overlay.remove();
    }

    // cuando de presiona cierra imagen grande
    cerrarImagen.onclick = function(){
        overlay.remove();
    }

    // mostrar en el hyml
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}