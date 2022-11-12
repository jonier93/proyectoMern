import React, {useState} from "react";
import { Carrito } from "./carrito.js";
import { Productos } from "./productos.js";

export function Cliente () {
    let [estado, setEstado] = useState("")
    let verProductos = (event) => {
        event.preventDefault()
        setEstado(estado=<Productos/>)
    }
    let verCarrito = (event) => {
        event.preventDefault()
        setEstado(estado=<Carrito/>)
    }
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >Cliente</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="listaProductos" onClick={verProductos}> Lista Productos </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="carrito" onClick={verCarrito}> Carrito </a>
                </li>                
                </ul>
            </div>
            </nav>
            {estado}
        </div>
    )
}

