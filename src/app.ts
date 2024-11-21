import express  from "express";

const app = express();
const port = 3000;;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/get',(req,res)=>{
    res.send('gETtiNg')
})

app.get('/send/:id',(req,res)=>{
    console.log(`query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Header: ${JSON.stringify(req.headers)}`);   
    console.log(`method: ${req.method}`); 
    res.status(202).header('X-Custom-Header','foo').send(req.params.id)
})



app.listen(port,()=>{
    console.log(`App Running Successfully at ${port}`);
});