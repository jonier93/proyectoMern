import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/styleLogin.css'

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
                        <div class="col-8"> <button type="button" class="btn btn-primary btn-lg" > Logear </button> </div>
                        <div class="col-2"></div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    )    
}