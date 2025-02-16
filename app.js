const express = require('express');
const app = express();
app.listen(7800)

app.get('/',(req,res) =>{
    res.sendFile('./Data/index.html',{root: __dirname});
})

app.get('/about',(req,res) =>{
    res.sendFile('./Data/about.html',{root: __dirname});
})

app.get('/contact',(req,res) =>{
    res.sendFile('./Data/contact.html',{root: __dirname});
})

app.use((req,res) =>{
    res.sendFile('./Data/error.html',{root: __dirname});
})