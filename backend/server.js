const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req,res,next)=> {
  res.send({message: 'Hola Mundo'})
})


app.listen(PORT, HOST, () => console.log('Servidor corriendo...'))