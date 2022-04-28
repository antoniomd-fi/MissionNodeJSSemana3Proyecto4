//Usando objeto express
const express = require('express')
//App de Express
const app= express()

//Puerto en donde se verá la app: localhost:3000
const port = 3000

//Path inicial, responderá a la url localhost:3000
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/launchx', (req,res)=>{
    res.send('Bienvenidos a launchx')
})

app.get('/explorersInNode', (req,res)=>{
    const explorer = {name: "Explorer",msg: "Hello"}
    res.send(explorer)
})


//Query params

app.get('/explorers/:explorerName', (req,res)=>{
    res.send(req.params)
})

//Inicializar la app
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})

