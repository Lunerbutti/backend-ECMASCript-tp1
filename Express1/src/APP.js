// Importacion de clases y require
const express= require('express')
// const ProductManager = require('../../Procesotesting')
// const path = require("path")



const PORT=8080
const app=express()

app.get('/', (req, res)=> {
    res.send("hola")
})

const server =app.listen(PORT, ()=>{
    console.log(`server escuchando ${PORT}`)
})
