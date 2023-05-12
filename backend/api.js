const express=require('express');
const app=express();

app.get('/getrandom',(req,res)=>{
    const num=Math.floor(Math.random()*100)+1;
    const result={
        number:num
    };
    res.json(result);
});