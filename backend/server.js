import Express from "express";
import {insert} from './dataBase.js'
import cors from 'cors'

const app = Express()
app.use(cors())
app.use(Express.json())

app.listen('5000', function(){
    console.log("Servidor iniciado")
})

app.get('/consultar', function(pet, res){
    console.log("Conectado al server de node js")
    res.send("Hola")
})

app.post('/registrar', function(req, resp) {
    insert(req.body)
    .then(()=> resp.send("Usuario guardado exitosamente"))
    .catch(err => resp.send("El usuario ya está registrado"))
})



