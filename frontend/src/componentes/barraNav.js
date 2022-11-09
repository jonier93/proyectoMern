import React, { Component } from 'react'
import '../styles/styleBarraNav.css'
import { Login } from './login'
import { Registrar } from './registrar'
import { Inicio } from './inicio'
import { Contactar } from './contactar'

export class BarraNav extends Component{   
    constructor(){
        super()
        this.state = {
            estado: <Inicio />
        }
    }
    render(){
        let iniciar = () => {
            this.setState({estado:<Inicio />})
        }
        let logear = () => {
            this.setState({estado:<Login />})
        }
        let registrar = () => {
            this.setState({estado:<Registrar />})
        }
        let contactar = () => {
            this.setState({estado:<Contactar />})
            
        }
        return(
            <div >
                <div className='blockBarra'>
                    <button className='btnBarra' onClick={iniciar}> Inicio </button>
                    <button className='btnBarra' onClick={logear}> Login </button>
                    <button className='btnBarra' onClick={registrar}> Registro </button>
                    <button className='btnBarra' onClick={contactar}> Contactar </button>
                </div>
                {this.state.estado}
            </div>
        )
    }
}