import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/styleLogin.css'

export function Login (){
    return(
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4" id="columna1"><h1> Columna 1</h1></div>
                    <div class="col-4" id="columna2"> <h1> Columna 2</h1></div>
                    <div class="col-4" id="columna3"> <h1> Columna 3</h1></div>
                </div>
                <div class="row">
                    <div class="col" id="columna4"> <h1> Columna 4 </h1></div>
                    <div class="col" id="columna5"> <h1> Columna 5 </h1></div>
                </div>
            </div>
        </div>

    )    
}