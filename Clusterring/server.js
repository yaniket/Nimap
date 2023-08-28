
const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Welcome from client to server");
})

app.listen(PORT, ()=>{
     console.log(`Server listening on ${PORT}`);
})