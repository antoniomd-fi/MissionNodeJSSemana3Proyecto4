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

//Inicializar la app
app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})