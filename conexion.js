//con esta constante extraida de la pagina de mongoose se hace la conexion con el puerto

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

//se define la constante db de base de datos de conexion

const objetodb = mongoose.connection

//con una función callback se define un console.log para saber si la 
//conexion con la base de datos fue correcta o no

objetodb.on('connected', ()=>{console.log('conexion correcta a mongoDB')})
objetodb.on('error', ()=>{console.log('error conexion a mongoDB')})

//se exporta el modulo mongoose
module.exports = mongoose
