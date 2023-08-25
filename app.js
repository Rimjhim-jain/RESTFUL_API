require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const connectDB = require("./db/connect.js");

const products_routes = require("./routes/products");

app.get("/",(req,res) => {
    res.send("Hi, I'M Live");
});

//middleware or to set router
app.use("/api/products", products_routes);

const start = async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
           console.log( `${PORT} I am Connected!`);
        });
    }catch(error){
        console.log(error);
    }
}

start();