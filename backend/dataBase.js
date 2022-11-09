import mongoose from "mongoose";

mongoose.connect('mongodb+srv://jonier:jhpd123@clusterjonier.y2vdjdd.mongodb.net/db?retryWrites=true&w=majority')
.then(() => console.log("Conectado a Mongo DB atlas"))
.catch(err => console.log(err)) 

let esquema = mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    password:String
}, {versionKey:false})

let modelo = mongoose.model('users', esquema)

export let insert = async (datos) => {
    let document = new modelo({
        _id:datos.id,
        name:datos.name,
        email:datos.email,
        password:datos.password
    })
    await document.save() 
}
