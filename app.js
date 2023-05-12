const express=require('express');


const router=express.Router();
const app=express();
const port=3000;
const hostname="localhost";

app.set('view engine','ejs');

app.listen(port,hostname,()=>{
    console.log("Server is running in port",port);
});

app.get('/',(req,res)=>{
    res.render('./Frontend/inspiration')
})
