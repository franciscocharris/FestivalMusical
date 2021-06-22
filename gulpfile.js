// corchetes porque gulp tiene muchas funciones y dentro de esas llaves estarian todas las que se requieren
const { src, dest } = require('gulp')
// este no nesecita porque esta dependencia solo tiene una funcion
const sass = require('gulp-sass')

sass.compiler = require('dart-sass');

function compilarSASS(){
    return src("./src/scss/app.scss")
        .pipe( sass() )
        .pipe( dest("./build/css") );
}

// nombre de la tarea en gulp = nombre de la funcion o tarea 
exports.compilarSASS = compilarSASS