const express = require('express');
const app = express();

app.listen(3000, ()=> {
    console.log("NodeJS project has started")
})


app.get("/", (req, res) => {
    res.send("Hello Hello World")
})