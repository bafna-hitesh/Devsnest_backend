const express = require('express');
const app = express();

//CRUD
//secure, performance, edge cases (at evry line youneed to consider this)

app.get('/', (req,res) =>{
    // res.send is most common so for specificity we use...
    res.status(200).json({ a:1 });  
    res.send(); //consider as return statment!!

    // res.status(200).send("Hello Boys"); -> pipeline 
    // We can send anything using res.send(string/obj/array/a file)
})

// http://localhost:3000/product?text=hello
// param is divided by <?>
// http://localhost:3000/product?text=hello boys -> for handeling spaces we use encodeURIComponent in js
//  
app.get('/product',(req,res) =>{
    res.send(req.query.text);
})

//if in my path b is optional then -> '/abcd' or 'acd'
app.get('/ab?cd',(req,res)=>{
    res.send('abcd');
})

//if in my path b is more than one then-> '/abbbd' or 'abbbbbbbbbbbcd'
app.get('/ab+cd',(req,res)=>{
    res.send('abbbbbbbbbbbbbbbbbbbbbbcd');
})

//anything after b but cd in last -> '/abhgfcd' or 'abrandomcd'
app.get('/ab*cd',(req,res)=>{
    res.send('abghdfjsicd');
})

//cd is option -> '/abcd' or 'acd'
app.get('/ab(cd)?e',(req,res)=>{
    res.send('abcd');
})

//regex 
app.get(/.*fly$/,(req,res)=>{
    res.send('butterfly');
})

// dynamic url
app.get('/user/:userId/books/:bookId',(req,res)=>{
    res.send(req.params);
})





app.listen(3000, () => console.log("Listing at http://localhost:3000"));