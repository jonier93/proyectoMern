import {insert, query, autenticacion} from '../dataBase.js'

export function registrar (req, resp) {
    let datos = query(req.body.id, req.body.email) 
    .then(data => {guardar(data)})       
    
    function guardar(data){
        if (data == null){
            insert(req.body)
            .then(()=> resp.send("Usuario guardado exitosamente"))
        }
        else{
            resp.send("El usuario ya está registrado")            
        }
    }
}

export function autenticar (req, resp){
    console.log(req.body)
    let datos = autenticacion(req.body.email, req.body.password)
    .then(data => credenciales(data))

    function credenciales(data){
        if (data != null){
            console.log("Credenciales correctas")
            resp.send(data)
        }
        else {
            console.log("Credenciales incorrectas")
            resp.send({error:"Usuario y/o contraseña incorrecta"})
        }
    }
}