//se usa expreses y se pone como requerido
const express = require('express')
const router = express.Router()


//se crea el esquema
const mongoose = require('mongoose')
const eschema = mongoose.Schema

//se indican el tipo de dato del esquema de usuario
const eschemausuario = new eschema({
    nombre: String, 
    email: String,
    telefono: String, 
    idusuario: String, 
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

/*
//ruta de prueba 
router.get('/ejemplo', (req, res)=>{
    res.end('saludo carga desde ruta ejemplo')
})*/

//hacemos una petición de tipo post, para recoger los datos del formulario
//esta buscando el agregar usuario correctamente
router.post('/agregarusuario', (req, res) =>{
    //se crea una nueva instanacia para el modelo usuario donde se pondran esos datos
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    //con la propiedad save hacemos que usuario se guarde en la base de datos con una condicional
    nuevousuario.save(function(err){
        //se hace una validación
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
    ModeloUsuario.find({idusuario:req.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//ruta para actualizar el usuario
router.post('/actualizausuario', (req, res) =>{
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono

    }, (err) => {
        if(!err){
            res.send('Usuario actualizado correctamente')
        }else{
            res.send(err)
        }
        })
})

//ruta para borrar usuario
router.post('/borrarusuario', (req, res) =>{
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err)=>{
        if(!err){
            res.send('Usuario borrado correctamente')
        }else{
            res.send(err)
        }  
    })
})