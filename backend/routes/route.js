import express from 'express'
import {registrar, autenticar} from '../controllers/control.js'

const router = express.Router()

router.post('/registrar', function(req, resp) {
    registrar(req, resp)
})

router.post('/autenticacion', function(req, resp){
    autenticar(req, resp)
})

export {router}