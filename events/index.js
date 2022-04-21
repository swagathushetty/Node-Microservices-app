const express=require('express')
const bodyParser=require('body-parser')
const axios=require('axios')

const app=express()
app.use(bodyParser.json())

app.post('/events',async(req,res)=>{
    const event=req.body
    try {
        
    await axios.post('http://localhost:4000/events',event)
    await axios.post('http://localhost:4001/events',event)
    await axios.post('http://localhost:4002/events',event)

    res.send({status:'OK'})
    }catch(err){
        console.log(err)
    }
    
})



app.listen(4005,()=>{
    console.log('listening on 4005')
})