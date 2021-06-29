// corchetes porque gulp tiene muchas funciones y dentro de esas llaves estarian todas las que se requieren
// ejecutar multiples tareas, buscar un archivo, poner un destino , observar cambios y ejecutar tarea 
const { series, src, dest, watch, parallel }  = require('gulp');
// este no nesecita porque esta dependencia solo tiene una funcion
const sass = require('gulp-sass');
// sass.compiler = require('');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// utilidades js
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

// rutas para reutilizar rutas comunes entre tareas o tasks
const paths = {
    imagenes: 'src/img/**/*',
    scss : './src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css(  ){
    
    return src(paths.scss)
        .pipe( sourcemaps.init() )
        // .pipe( sass({
        //     outputStyle: 'expanded'
        // }) )
        .pipe( sass() )
        // al final del proyecto
        // .pipe( postcss( autoprefixer() ) )
        // entre corchetes para ejecutar multiples tareas en una sola
        // estas tres funciones es para tenerlo de ultima generacion, lo mejor optimizado y lo mejor posible
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        // escribit nuestro mapa en el disco duro
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./build/css') );

}

// function minificarCss(  ){
    
//     return src(paths.scss)
//         .pipe( sass({
//             outputStyle: 'compressed'
//         }) )
//         .pipe( dest('./build/css') );

// }

function javascript(){
    return src(paths.js)
        .pipe( sourcemaps.init() )
        .pipe( concat('bundle.js') )
        .pipe( terser() )
        .pipe( sourcemaps.write('.') )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( dest('./build/js') );
}

function imagenes(){
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest('./build/img') )
        .pipe( notify({ message: 'imagen minificada' }) );
}

function versionWebp(){
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('build/img') );
}

function watchArchivos(){
    // observar archivos y ejecutar tarea 
    // watch('./src/scss/*.scss', css);
    // para que lea todos los archivos sin importar la ubicacion
    watch(paths.scss, css);
    watch(paths.js, javascript);
}

exports.css = css;
// exports.minificarCss = minificarCss;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.watchArchivos = watchArchivos;

exports.default = series( css, javascript, imagenes, versionWebp, watchArchivos);

// series sirve para ejecutar muchas tareas muchas funciones con una sola llamada
// exports.tareas = series( css, js);
// exports.default = series( css);