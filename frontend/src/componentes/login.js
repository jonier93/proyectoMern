import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/styleLogin.css'

let url = 'http://localhost:5000'

export function Login (){
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col"></div>
                <div class="col" id="colPers">
                    <img id="imagenLogin" src="https://www.aliwell.mx/imagenes/registro/icono_sesion.png"></img>
                    <div class="row">
                        <div class="col"> <label> Email </label> </div>
                        <div class="col"> <input type="email" id="emailCred" placeholder="ingrese su email" /> </div>
                    </div>
                    <div class="row"> &nbsp; </div>
                    <div class="row">
                        <div class="col"> <label> Contraseña </label> </div>
                        <div class="col"> <input type="password" id="passwordCred" placeholder="ingrese su contraseña" /> </div>  
                    </div>
                    <div class="row"> &nbsp; </div>
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-8"> <button onClick={autenticar} type="button" class="btn btn-primary btn-lg" > Logear </button> </div>
                        <div class="col-2"></div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    )    
}

function autenticar(){
    let datos = {
        email:document.getElementById('emailCred').value,
        password:document.getElementById('passwordCred').value
    }
    fetch(url +'/autenticacion', {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(datos)
    })
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))

}