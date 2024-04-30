import express from "express";

const app = express();  
app.use(express.static('static'))

app.listen(3000, () =>{
    console.log("listening to port 3000");
})