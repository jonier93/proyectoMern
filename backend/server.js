import Express from "express";
import cors from 'cors'
import {router} from './routes/route.js'

const app = Express()
app.use(cors())
app.use(Express.json())
app.use(router)

app.listen('5000', function(){
    console.log("Servidor iniciado")
})
