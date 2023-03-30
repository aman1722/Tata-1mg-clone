const express = require("express")
const { connection } = require("./connection/db")
require("dotenv").config()
var cors = require('cors');
const { productRouter } = require("./routes/product.router");
const {userRouter}=require("./routes/user.router")

//App
const app = express()

//Middleware
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use("/product",productRouter)




//App Listining
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to db!");
    } catch (error) {
        console.log("Unable to connect with db!");
        console.log(error);
    }
    console.log(`App is running on port ${process.env.port}`)
})