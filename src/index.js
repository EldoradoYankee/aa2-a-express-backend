const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())

const port = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Backend!");
});

app.get("/getListRandom", (req, res) => {
    res.send({msg :"Welcome to significant improved Backend!"});
});



app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});