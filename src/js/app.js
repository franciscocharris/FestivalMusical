document.addEventListener('DOMContentLoaded', function(){

    scrollNav();
    
    navegacionFija();

    // fecha actual con javascript
    // mostrar fecha ceracion
    var fecha = document.querySelector('#fecha span');

    var actual = new Date();
    var año = actual.getFullYear();

    fecha.textContent = año;

    // desarrollado por Francisco M. Charris C. 2021
});

function navegacionFija(){
    // se seleeciona la barra
    const barra = document.querySelector('.header');

    // registrar el Intersection Observer  | entries nos va a dar la informaciona del elemento a observar
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
    });
    // elemento a observar
    observer.observe(document.querySelector('.video'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            // funcion para poner el smoth scroll suave
            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        });
    });
}