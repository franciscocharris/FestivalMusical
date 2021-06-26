// corchetes porque gulp tiene muchas funciones y dentro de esas llaves estarian todas las que se requieren
// ejecutar multiples tareas, buscar un archivo, poner un destino , observar cambios y ejecutar tarea 
const { series, src, dest, watch }  = require('gulp');
// este no nesecita porque esta dependencia solo tiene una funcion
const sass = require('gulp-sass');
// sass.compiler = require('');
const imagemin = require('gulp-imagemin');

function css(  ){
    
    return src('./src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css') );

}

function minificarCss(  ){
    
    return src('./src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css') );

}

function imagenes(){
    return src('src/img/**/*')
        .pipe( imagemin() )
        .pipe( dest('./build/img') )
}

function watchArchivos(){
    // observar archivos y ejecutar tarea 
    // watch('./src/scss/*.scss', css);
    // para que lea todos los archivos sin importar la ubicacion
    watch('./src/scss/**/*.scss', css);
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

// series sirve para ejecutar muchas tareas muchas funciones con una sola llamada
// exports.tareas = series( css, js);
// exports.default = series( css);