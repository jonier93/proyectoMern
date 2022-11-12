import ex from 'express'
import cors from 'cors'
import {router} from './routes/route.js'

let app = ex()

app.use(cors())
app.use(ex.json())
app.use(ex.static("../frontend/build"))
app.use(router)

app.listen('5000', function(){
    console.log("Servidor iniciado")
})
