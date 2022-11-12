import express from 'express'
import {registrar, autenticar} from '../controllers/control.js'
import path from 'path'

const router = express.Router()
const dirFrontend = path.join(path.resolve(), '../frontend')

router.get('/', function(req, resp) {
    resp.sendFile(dirFrontend+"/build/home.html")
})

router.post('/registrar', function(req, resp) {
    registrar(req, resp)
})

router.post('/autenticacion', function(req, resp){
    autenticar(req, resp)
})

export {router}