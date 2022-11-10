import React from "react";
import '../styles/styleRegister.css'

let url = "http://localhost:5000"
export function Registrar (){
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4" id="colPers">
                    <form >
                        <img id="imagenRegister" src="https://3pkm942y6f9nttcns2xe7cg1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/document-indexing-icon.png" ></img>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Identificación </label>
                            <input type="number" class="form-control" id="id" aria-describedby="emailHelp" placeholder="Ingrese su id" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Nombre</label>
                            <input type="text" class="form-control" id="name" placeholder="ingrese su nombre" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Correo</label>
                            <input type="email" class="form-control" id="email" placeholder="ingrese su correo" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" class="form-control" id="password" placeholder="ingrese su contraseña" />
                        </div>
                        <button type="button" onClick={registrarDatos} class="btn btn-primary btn-lg"> Registrar </button>
                    </form>
                </div>
                <div class="col-4"></div>
            </div>            
        </div>      
    )    
}

function registrarDatos(){
    let datos = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    fetch(url+'/registrar', {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(datos)
    })
    .then(res => res.text())
    .then(data => {
        alert(data)
        limpiar()
    })
}

function limpiar(){
    document.getElementById('id').value = ""
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
}