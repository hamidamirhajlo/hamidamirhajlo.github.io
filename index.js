const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send(`hi your ip addres is ${req.ip}`)
})

app.listen(403,()=> console.log('server runnig on port 403'))