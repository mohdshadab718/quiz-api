const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.get('/', (req, res)=>{
    res.send("Home Page");
})


app.listen(process.env.PORT, p=> console.log("Server started onn port", process.env.PORT))