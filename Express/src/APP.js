const http = require('http')

const PORT=3000

const server=http.createServer((req, res)=> {
    res.end("hola")
})
server.listen(PORT, ()=>{
    console.log(`server escuchando ${PORT}`)
})