import {insert, query, autenticacion, conectarCliente} from '../dataBase.js'
import { autenticacionAdmin, conectarAdmin } from '../dataBase2.js'

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
    if(req.body.userType == true){
        conectarCliente()
        let datos = autenticacion(req.body.email, req.body.password)  
        .then(data => credenciales(data))      
    }
    else {
        conectarAdmin()
        let datos = autenticacionAdmin(req.body.email, req.body.password)
        .then(data => credenciales(data))
    }
    
    function credenciales(data){
        if (data != null){
            console.log("Credenciales correctas")
            resp.send(data)
        }
        else {
            console.log("Credenciales incorrectas")
            resp.send({id:""})
        }
    }
    
}