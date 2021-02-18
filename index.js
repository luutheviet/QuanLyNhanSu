const express=require('express')
const app=express()
const port=1999

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`Dang nghe tai port ${port}`)
})