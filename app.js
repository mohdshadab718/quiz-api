const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;

app.get('/', (req, res)=>{
    res.send("Home Page");
})


app.listen(PORT, p=> console.log("Server started onn port", p))