# Notas Importantes 

Instalr gulp npm i -D gulp

### Creando una funcio con Gulp
Estas funciónes nos ayudan a crear tareas para Gulp
~~~
function tarea( cb ) {
  console.log('mi primer tarea')
  cb()
}
~~~

### Gulp Manda a llamar una tarea por medio de node
exports.tarea = tarea; 

> npx sirve para mandar a llamar esa tarea este comando nos permite trabajar localmente