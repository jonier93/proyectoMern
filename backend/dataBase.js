import mongoose from "mongoose";

export let conectarCliente = () => {
    mongoose.connect('mongodb+srv://jonier:jhpd123@clusterjonier.y2vdjdd.mongodb.net/db?retryWrites=true&w=majority')
    .then(() => console.log("Conectado a Mongo DB atlas"))
    .catch(err => console.log(err)) 
}


let esquema = mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    password:String
}, {versionKey:false})

let modelo = mongoose.model('users', esquema)

export let query = async (id, email) => {
    let document = await modelo.findOne({$or:[{_id:id},{email:email}]})
    return document
}

export let insert = async (datos) => {
    let document = new modelo({
        _id:datos.id,
        name:datos.name,
        email:datos.email,
        password:datos.password
    })
    await document.save() 
}

export let autenticacion = async (correo, contraseña) => {
    let document = await modelo.findOne({$and:[{email:correo},{password:contraseña}]})
    return document
}
