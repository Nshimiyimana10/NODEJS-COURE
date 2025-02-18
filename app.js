const express = require('express');
const app = express();
const dataBaseURL = 'mongodb+srv://Nshimiyimana10:Nshimiyimana10@firstmongodb.3jnjn.mongodb.net/?retryWrites=true&w=majority&appName=FirstMongoDB'
const mongoose = require('mongoose');
mongoose.connect(dataBaseURL).then((result) =>{
    console.log('connected')
}).catch((error) => console.log(error))
app.set('view engine','ejs');
app.set('views','Data');
app.listen(7800);
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/',(req,res) =>{
    const infos = [
        {name:'Peter',age:25, email:'peter@gmail.com'},
        {name:'John',age:20, email:'john@gmail.com'},
        {name:'Eric',age:40, email:'eric@gmail.com'},
        {name:'Med',age:18, email:'med@gmail.com'}
    ]   
    res.render('index',{title:'Home',infos});
})

app.get('/about',(req,res) =>{
    res.render('about',{title:'About'});
})

app.get('/contact',(req,res) =>{
    res.render('contact',{title:'Contact'})
})

app.use((req,res) =>{
    res.status(404).render('error',{title:'Error page'});
})