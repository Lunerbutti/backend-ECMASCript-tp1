// Importacion de clases y require
const express= require('express')
const ProductManager = require('./ProductManager.js')
// const path = require("path")



const PORT=8080
const app=express()



const server =app.listen(PORT, ()=>{
    console.log(`server escuchando ${PORT}`)
})

const pm = new ProductManager('../Archivo/productList.json')
const products = pm.getProduct()

//PAGINA PRINCIPAL
app.get('/', (req, res)=> {
    res.status(200).send("hola, bienvenido al servidor express")
})  

//Mostrar products y limitar por params
app.get("/products",(req,res)=>{

    if(req.query.limit ==="")return res.status(200).send(products)
    else{
     let limitation =products.slice(0,req.query.limit)
     res.status(200).send(limitation)
    }
  })
  
//Busquedad con el ID q
app.get("/products/:id",(req,res)=>{
   let id = req.params.id
   if(id == NaN || id == "")return res.status(400).send("ID NAN insert a number")
   else {
      let search = products.find((p)=> p.id == id)
        if(!search)return res.status(400).send("ID number doesnt exist")
        return res.status(200).send(search)}
   
  })