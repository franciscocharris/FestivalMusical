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