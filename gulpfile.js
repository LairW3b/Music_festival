//En el const requerimos las funciones que trae gulp
// 'src' nos permite identificar un archivo
// 'dest' sirve para guardar un archivo
// 'watch' escucha por cambios
const { src, dest, watch,} = require('gulp')
/* gulp requiere instalar gulp-sass para poder trabajar (npm i -D gulp-sass) 
**  gulp-sass requiere mandar a llamar a sass por eso se adjunta el código entre parentesis
*/
const sass = require('gulp-sass')(require('sass'))

/* COMPILANDO SASS */
function css(cb) {
  src('src/scss/app.scss') //Identificar el archivo de sass
    .pipe( sass() ) // Conpilarlo
    .pipe( dest('build/css') ) // Almacenarla en el disco duro

  cb() /* Callback que avisa a gulp cuando llegamos al final */
}

/* Creando un Watch para nuestras funciones */
function dev(cb) {
  // Aquí le digo que cuando cambie el archivo app.scss mande a llamar a mi función css
  watch('src/scss/app.scss', css)

  cb()
}

exports. css = css
exports.dev = dev
// npx gulp css -> ejecuta la tarea
// npx gulp dev -> ejecuta el watch