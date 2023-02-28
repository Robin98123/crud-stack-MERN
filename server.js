//definimos una constante que nos permitirá usar express

const express = require ('express')

//definimos app como express

const app = express()

//se importa la conexión a mongoDB se accede al archivo de conexion 

const archivoBD = require('./conexion')


//se importa el archivo de rutas y modelo de usurio
const rutausuario = require('./rutas/usuario')

//se importa extencion para obtener la informacion de los campos
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

//hacemos una petición get que mostrara un mensaje en el dom 
//el res sirve para mostrar datos al cliente

app.get('/', (req, res) =>{
    res.end('Bienevenido al servdidor backend node.js que esta corriendo')
} )

//configuración server básico en el puerto 5000 y le indicamos con un console log 
//un mensaje indicando que el servdior estar corriendo correcatemnete

app.listen(5000, function(){
    console.log('el servidor esta corriendo correctamente')
})